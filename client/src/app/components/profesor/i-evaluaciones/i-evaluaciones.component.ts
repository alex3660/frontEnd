import { evaluacionInterface } from './../../../models/evaluacion';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { cursoInterface } from 'src/app/models/crurso-interface';

@Component({
  selector: 'app-i-evaluaciones',
  templateUrl: './i-evaluaciones.component.html',
  styleUrls: ['./i-evaluaciones.component.css']
})
export class IEvaluacionesComponent implements OnInit {

  constructor(private profeApi:ProfesorServiceService, private router: Router) { }
  evaluacion: evaluacionInterface={
    idCurso:'',
    nombre:'',
    descripcion:'',
    horaEntrega:'',
    fechaEntrega:'',
    tipoEvaluacion:''

  };
  
  curso: cursoInterface;

  ngOnInit() {
  }

  ingresarE(){

    this.curso=this.profeApi.getCurrentCuso();
    this.evaluacion.idCurso=this.curso.idCurso;
    console.log(this.evaluacion);
    this.profeApi.saveEvaluacion(this.evaluacion)
    .subscribe(
      res => {
        console.log(res);
        alert('INGRESO DE EVALUACION EXITOSO!!!');
        this.router.navigate(['/profesor/evaluaciones']);
      },
      err => console.error(err)
    )
}
   

}
