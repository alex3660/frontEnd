import { alumnoInterface } from './../../../models/alumno-interface';
import { alumnoCursoInterface } from './../../../models/alumno-curso';
import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-a',
  templateUrl: './editar-a.component.html',
  styleUrls: ['./editar-a.component.css']
})
export class EditarAComponent implements OnInit {

  public ngForm: FormGroup
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private cedulaPattern: any = /^\d*$/;
  private pattern="[a-zA-Z ]{2,254}"
  constructor(private dataApi: DataApiService, private router: Router) { 
    this.ngForm = this.createFormGroup()
  }
  createFormGroup(){
    return new FormGroup({
      cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.cedulaPattern)]),
      numUnico: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern(this.cedulaPattern)]),
      name1: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      name2: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      apellido1: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      apellido2: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100),Validators.pattern(this.emailPattern)]), 
      telefono: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(10),Validators.pattern(this.cedulaPattern)]),
      tipo: new FormControl('', [Validators.required]),
    })
  };
  get cedula() { return this.ngForm.get('cedula'); }
  get numUnico() { return this.ngForm.get('numUnico'); }
  get name1() { return this.ngForm.get('name1')}; 
  get name2() { return this.ngForm.get('name2')}; 
  get apellido1() { return this.ngForm.get('apellido1')}; 
  get apellido2() { return this.ngForm.get('apellido2')}; 
  get email() { return this.ngForm.get('email'); }
  get telefono() { return this.ngForm.get('telefono')};
  get tipo() { return this.ngForm.get('tipo')}; 

  user:alumnoInterface={}


  ngOnInit() {
    this.user= this.dataApi.getCurrentAlumno();
    console.log(this.user.idAlumno);

  }

  editAlumno() {    

    if(this.ngForm.valid){
      Swal.fire({
        title: 'Guardar',
        text: 'Esta seguro de guardar los cambios',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'NO'
        }).then((result) => {
        if (result.value) {
          this.dataApi.editAlumno(this.user)
        .subscribe(
          res => {          
            this.router.navigate(['/admin/alumno']);
            Swal.fire(
              'Éxito!',
              'Los cambios en el alumno se han realizado con éxito!',
              'success'
            )
          },
          err => console.error(err)
        )
          
        }
      }) 

    }   
    else{
      Swal.fire(
        'Error!',
        'Ingrese información del alumno correctamente!',
        'error'
      )
    }
  }

  

}
