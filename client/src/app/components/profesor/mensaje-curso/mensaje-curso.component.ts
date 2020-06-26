import { mensajeIngreso } from './../../../models/mensaje';

import { Mensaje } from 'src/app/models/mensaje';
import { Component, OnInit } from '@angular/core';
import { comentarioInterface } from 'src/app/models/comentario';
import { DataApiService } from 'src/app/services/data-api.service';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { profesorInterface } from 'src/app/models/profesor-inteface';
import { cursoInterface } from 'src/app/models/crurso-interface';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mensaje-curso',
  templateUrl: './mensaje-curso.component.html',
  styleUrls: ['./mensaje-curso.component.css']
})
export class MensajeCursoComponent implements OnInit {
  public ngForm: FormGroup
  constructor(private datapi :DataApiService, private profeApi:ProfesorServiceService, private router: Router) { 
    this.ngForm = this.createFormGroup()
  }
  createFormGroup(){
    return new FormGroup({
      descripcion: new FormControl('',[Validators.required])
      })
  };
  get descripcion() { return this.ngForm.get('descripcion')};
  
  mensajeLista: any;
  profesor: profesorInterface;
  men: mensajeIngreso={
    idCurso:'',
    mensaje:''
  };
  pageActual: number = 1;
  curso: cursoInterface;
  ngOnInit() {

    this.listaMensaje();
  }

  listaMensaje(){
    
    this.curso= this.profeApi.getCurrentCuso();
    console.log(this.curso.idCurso)
    this.profeApi.getMensaje(this.curso.idCurso)
    .subscribe((mensaje: Mensaje) => (this.mensajeLista = mensaje))
    
  }

  agregarMensaje(){
    
    this.curso= this.profeApi.getCurrentCuso(); 
    this.men.idCurso=this.curso.idCurso;
    if(this.ngForm.valid){
    this.profeApi.saveMensaje(this.curso.idCurso, this.men)
    .subscribe(
      res => {
        Swal.fire(
          'Exito!',
          'El Mensaje ha sido Enviado con EXITO!',
          'success'
        );
        this.router.navigate(['/profesor/mensaje']);
        this.ngOnInit();
      },
      err => console.error(err)
    )}
    else{
      Swal.fire(
        'Error!',
        'Ingrese Mensaje!',
        'error'
      )}
      this.onResetForm();
}

onResetForm(): void {
  this.ngForm.reset();
}

}
