import { evaluacionInterface } from './../../../models/evaluacion';
import { Component, OnInit } from '@angular/core';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService) { }

  curso:cursoInterface;
  evaluaciones: evaluacionInterface;


  ngOnInit() {
    this.listaE();
  }

  listaE(){
    this.curso= this.profeApi.getCurrentCuso();
    this.profeApi.getEvaluacionC(this.curso.idCurso)
    .subscribe((evaluaciones: evaluacionInterface) => (this.evaluaciones = evaluaciones));
    
  }

}
