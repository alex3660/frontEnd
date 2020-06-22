import { tareaInterface } from 'src/app/models/tarea';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private router: Router, public datepipe: DatePipe) { }
  tarea : tareaInterface={};

  ngOnInit() {
    this.tarea = this.profeApi.getCurrentTarea();
    this.tarea.fechaEntrega =this.datepipe.transform(this.tarea.fechaEntrega, 'MM-dd-yyyy');
    console.log(this.tarea.fechaEntrega)

    
  }

  
  editarTarea() {

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
        this.profeApi.editTarea(this.tarea)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/tareas']);
        },
        err => console.error(err)
      )
        Swal.fire(
          'Exito!',
          'Los cambios en la tarea se han realizado con exito!',
          'success'
        )
      }
    }) 
    
   
  }

}
