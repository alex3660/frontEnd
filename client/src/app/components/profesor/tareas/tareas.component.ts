import { eliminarInterface } from './../../../models/eliminar';
import { tareaInterface } from 'src/app/models/tarea';
import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  constructor(public profeApi: ProfesorServiceService,  private router: Router) { }
  curso:cursoInterface;
  tareas: tareaInterface;
  elim : eliminarInterface={
    idEvento:'',
    idCurso:''
  }

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

  eliminar(tareaid: string, idcurso: string){
    this.elim.idEvento=tareaid;
    this.elim.idCurso= idcurso;

    Swal.fire({
      title: 'Esta Seguro de Eliminar Tarea',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      if (result.value) {
        this.profeApi.deleteTarea(this.elim).subscribe(
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
        Swal.fire(
          'ELIMINADO!',
          'La Tarea se ha Eliminado con EXITO!',
          'success'
        )
      }
    })       
    
  }

}
