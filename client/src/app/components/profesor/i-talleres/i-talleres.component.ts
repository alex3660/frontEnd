import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { cursoInterface } from 'src/app/models/crurso-interface';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-i-talleres',
  templateUrl: './i-talleres.component.html',
  styleUrls: ['./i-talleres.component.css']
})
export class ITalleresComponent implements OnInit {

  public ngForm: FormGroup
  
  constructor(private profeApi:ProfesorServiceService, private router: Router) { 
    this.ngForm = this.createFormGroup()
  }

  createFormGroup(){
    return new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      hora: new FormControl('', [Validators.required]),
      tipo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('',[Validators.required])
      })
  };

  get titulo() { return this.ngForm.get('titulo'); }
  get date() { return this.ngForm.get('date')}; 
  get hora() { return this.ngForm.get('hora')}; 
  get tipo() { return this.ngForm.get('tipo')}; 
  get descripcion() { return this.ngForm.get('descripcion')}; 

  taller:tallerInterface={
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

  ingresarTaller(){

    if(this.ngForm.valid){
    this.curso=this.profeApi.getCurrentCuso();
    this.taller.idCurso=this.curso.idCurso;
    console.log(this.taller);
    this.profeApi.saveTaller(this.taller)
    .subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Exito!',
          'El Taller ha sido Ingresado con EXITO!',
          'success'
        )
        this.router.navigate(['/profesor/talleres']);
      },
      err => console.error(err)
    )
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
