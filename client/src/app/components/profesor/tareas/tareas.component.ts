import { tareaInterface } from 'src/app/models/tarea';
import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService,  private router: Router) { }
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

  editar(tarea: tareaInterface){
    this.profeApi.setTarea(tarea);    
    this.router.navigate(['profesor/editar/tarea']);

  }

  eliminar(tareaid: string){
    
    
    this.profeApi.deleteTarea(tareaid).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profesor/tareas']);
        this.ngOnInit();
      },
      err => {console.error(err);
       // alert('No se elimino el tarea');
        //this.ngOnInit();
      }
      
    );
  }

}
