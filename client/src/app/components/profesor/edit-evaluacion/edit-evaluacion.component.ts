import { evaluacionInterface } from './../../../models/evaluacion';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-evaluacion',
  templateUrl: './edit-evaluacion.component.html',
  styleUrls: ['./edit-evaluacion.component.css']
})
export class EditEvaluacionComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private router: Router) { }

  evaluacion: evaluacionInterface={}

  ngOnInit() {
    this.evaluacion = this.profeApi.getCurrentEvaluacion();
  }

  editarE() {
    if( confirm('ESTA SEGURO DE GUARDAR LOS CAMBIOS!!!')){
      this.profeApi.editEvaluacion(this.evaluacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/evaluaciones']);
        },
        err => console.error(err)
      )
    }
    
  }

}
