import { cursoInterface } from 'src/app/models/crurso-interface';
import { profesorInterface } from './../../../models/profesor-inteface';
import { alumnoCursoInterface } from './../../../models/alumno-curso';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';

@Component({
  selector: 'app-modal-curso',
  templateUrl: './modal-curso.component.html',
  styleUrls: ['./modal-curso.component.css']
})
export class ModalCursoComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService) { }

  alumnos:alumnoCursoInterface;
  curso:cursoInterface;

  ngOnInit() {
    this.curso= this.profeApi.getCurrentCuso();
    console.log(this.curso.idCurso);
    this.alumnoCurso()
  }

  alumnoCurso(){
    
      this.profeApi
      .getAlumnoC(this.curso.idCurso)
      .subscribe((alumnos: alumnoCursoInterface) => (this.alumnos = alumnos));
  
    
  }

  

  

}
