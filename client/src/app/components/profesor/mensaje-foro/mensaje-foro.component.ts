import { profesorInterface } from './../../../models/profesor-inteface';
import { comentarioInterface } from './../../../models/comentario';
import { foroListInterface } from './../../../models/foro-list';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { comentarioForoInterface } from 'src/app/models/comentario-foro';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mensaje-foro',
  templateUrl: './mensaje-foro.component.html',
  styleUrls: ['./mensaje-foro.component.css']
})
export class MensajeForoComponent implements OnInit {

  public ngForm: FormGroup
  constructor(public datapi :DataApiService, public profeApi:ProfesorServiceService, private router: Router) {
    this.ngForm = this.createFormGroup()
   }

   createFormGroup(){
    return new FormGroup({
      descripcion: new FormControl('',[Validators.required])
      })
  };
  get descripcion() { return this.ngForm.get('descripcion')};

  foro: foroListInterface;
  profesor: profesorInterface;
  comentarios: any;
  coment: comentarioForoInterface ={
  comentario:'',
  };
  pageActual: number = 1;


  ngOnInit() {
    this.listaComentario()
  }

  listaComentario(){
    this.foro= this.profeApi.getCurrentForo();
    this.profeApi.getComentario(this.foro.idForo)
    .subscribe((comentarios: comentarioInterface) => (this.comentarios = comentarios))
    
  }

  agregarComentario(){
    
    this.foro= this.profeApi.getCurrentForo(); 
    this.coment.idForo=this.foro.idForo;
    this.profesor=this.datapi.getCurrentP()
    this.coment.nombre=this.profesor[0].nombre1+' '+this.profesor[0].nombre2+' '+this.profesor[0].apellido1+' '+this.profesor[0].apellido2
    if(this.ngForm.valid){
    this.profeApi.saveComentario(this.coment)
    .subscribe(
      res => {
        Swal.fire(
          'Exito!',
          'El Comentario ha sido Ingresado con EXITO!',
          'success'
        );
        this.router.navigate(['/profesor/foro/comentario']);
        this.ngOnInit();
      },
      err => console.error(err)
    )}
    else{
      Swal.fire(
        'Error!',
        'Ingrese comentraio!',
        'error'
      )}
      this.onResetForm();
}

onResetForm(): void {
  this.ngForm.reset();
}

  

}
