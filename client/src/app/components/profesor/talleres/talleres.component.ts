import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { tareaInterface } from 'src/app/models/tarea';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService) { }

  curso:cursoInterface;
  talleres: tallerInterface;

  ngOnInit() {
    this.listaTaller()
  }

  listaTaller(){
    this.curso= this.profeApi.getCurrentCuso();
    this.profeApi.getTallerC(this.curso.idCurso)
    .subscribe((talleres: tareaInterface) => (this.talleres = talleres));
    
  }

}
