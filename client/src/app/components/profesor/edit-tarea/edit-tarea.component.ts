import { tareaInterface } from 'src/app/models/tarea';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent implements OnInit {

  public ngForm: FormGroup
  fechahoy= new Date();
  constructor(private profeApi: ProfesorServiceService, private router: Router, public datepipe: DatePipe) {
    this.ngForm = this.createFormGroup()
   }
   createFormGroup(){
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required])
      })
  };

  get titulo() { return this.ngForm.get('titulo'); }
  get date() { return this.ngForm.get('date')}; 
  get hora() { return this.ngForm.get('hora')}; 
  get tipo() { return this.ngForm.get('tipo')}; 
  get descripcion() { return this.ngForm.get('descripcion')}; 
  
  tarea : tareaInterface={};

  ngOnInit() {
    this.tarea = this.profeApi.getCurrentTarea();
    this.tarea.fechaEntrega =this.datepipe.transform(this.tarea.fechaEntrega, 'MM-dd-yyyy');
    console.log(this.tarea.fechaEntrega)

    
  }

  
  editarTarea() {
    if(this.ngForm.valid){
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
            Swal.fire(
              'Exito!',
              'Los cambios en la tarea se han realizado con exito!',
              'success'
            )
            this.router.navigate(['/profesor/tareas']);
          },
          err => console.error(err)
        )
          
        }
      }) 

    }

  }

}
