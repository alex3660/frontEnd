import { tareaInterface } from 'src/app/models/tarea';
import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService) { }
  curso:cursoInterface;
  tareas: tareaInterface;

  ngOnInit() {
    this.listaTarea();
  }


  listaTarea(){
    this.curso= this.profeApi.getCurrentCuso();
    this.profeApi.getTareaC(this.curso.idCurso)
    .subscribe((tareas: tareaInterface) => (this.tareas = tareas));
    
  }

}
