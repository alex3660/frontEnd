import { evaluacionInterface } from './../../../models/evaluacion';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

    Swal.fire({
      title: 'Guardar',
      text: 'Esta seguro de Guardar los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'NO'
      }).then((result) => {
      if (result.value) {
        this.profeApi.editEvaluacion(this.evaluacion)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/evaluaciones']);
        },
        err => console.error(err)
      )
        Swal.fire(
          'Exito!',
          'Los cambios en la evaluacion se han realizado con EXITO!',
          'success'
        )
      }
    }) 
    
  }

}
