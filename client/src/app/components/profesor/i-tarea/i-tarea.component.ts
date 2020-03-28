import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { tareaInterface } from 'src/app/models/tarea';
import { Router } from '@angular/router';

@Component({
  selector: 'app-i-tarea',
  templateUrl: './i-tarea.component.html',
  styleUrls: ['./i-tarea.component.css']
})
export class ITareaComponent implements OnInit {

  constructor(private profeApi:ProfesorServiceService, private router: Router) { }
  tarea:tareaInterface={
    idCurso:'',
    nombre:'',
    descripcion:'',
    horaEntrega:'',
    fechaEntrega:'',
    tipoEntrega:''

  };
  
  curso: cursoInterface;

  ngOnInit() {
    
  }

  ingresarTarea(){

    this.curso=this.profeApi.getCurrentCuso();
    this.tarea.idCurso=this.curso.idCurso;
    console.log(this.tarea);
    this.profeApi.saveTarea(this.tarea)
    .subscribe(
      res => {
        console.log(res);
        alert('INGRESO DE TAREA EXITOSO!!!');
        this.router.navigate(['/profesor/tareas']);
      },
      err => console.error(err)
    )
}
    

  


}
