import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-taller',
  templateUrl: './edit-taller.component.html',
  styleUrls: ['./edit-taller.component.css']
})
export class EditTallerComponent implements OnInit {

  public ngForm: FormGroup

  constructor(private profeApi: ProfesorServiceService, private router: Router) {
    this.ngForm = this.createFormGroup()
   }
   createFormGroup(){
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('')
      })
  };

  get titulo() { return this.ngForm.get('titulo'); }
  get date() { return this.ngForm.get('date')}; 
  get hora() { return this.ngForm.get('hora')}; 
  get tipo() { return this.ngForm.get('tipo')}; 
  get descripcion() { return this.ngForm.get('descripcion')};
  taller: tallerInterface;

  ngOnInit() {
    this.taller = this.profeApi.getCurrentTaller();

  }

  editarTaller() {
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
        this.profeApi.editTaller(this.taller)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/talleres']);
        },
        err => console.error(err)
      )
        Swal.fire(
          'Exito!',
          'Los cambios en el taller se han realizado con exito!',
          'success'
        )
      }
    })
  }
  else{
    Swal.fire(
      'Error!',
      'Ingrese datos de taller validos!',
      'error'
    )
  } 
    
   
  }




}
