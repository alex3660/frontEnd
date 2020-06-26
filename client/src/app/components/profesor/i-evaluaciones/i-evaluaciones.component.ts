import { evaluacionInterface } from './../../../models/evaluacion';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { cursoInterface } from 'src/app/models/crurso-interface';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-i-evaluaciones',
  templateUrl: './i-evaluaciones.component.html',
  styleUrls: ['./i-evaluaciones.component.css']
})
export class IEvaluacionesComponent implements OnInit {

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
  evaluacion: evaluacionInterface={
    idCurso:'',
    nombre:'',
    descripcion:'',
    horaEntrega:'',
    fechaEntrega:'',
    tipoEvaluacion:''

  };
  
  curso: cursoInterface;

  ngOnInit() {
  }

  ingresarE(){

    if(this.ngForm.valid){
    this.curso=this.profeApi.getCurrentCuso();
    this.evaluacion.idCurso=this.curso.idCurso;
    console.log(this.evaluacion);
    this.profeApi.saveEvaluacion(this.evaluacion)
    .subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Exito!',
          'La Evaluación ha sido Ingresada con EXITO!',
          'success'
        );
        this.router.navigate(['/profesor/evaluaciones']);
      },
      err => console.error(err)
    )
    }
    else{
      Swal.fire(
        'Error!',
        'Ingrese datos de evaluación validos!',
        'error'
      )

    }
    
}
   

}
