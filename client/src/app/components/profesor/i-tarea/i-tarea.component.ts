
import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { tareaInterface } from 'src/app/models/tarea';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-i-tarea',
  templateUrl: './i-tarea.component.html',
  styleUrls: ['./i-tarea.component.css']
})
export class ITareaComponent implements OnInit {

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
      descripcion: new FormControl('')
      })
  };

  get titulo() { return this.ngForm.get('titulo'); }
  get date() { return this.ngForm.get('date')}; 
  get hora() { return this.ngForm.get('hora')}; 
  get tipo() { return this.ngForm.get('tipo')}; 
  get descripcion() { return this.ngForm.get('descripcion')}; 
  
  tarea:tareaInterface={
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

  ingresarTarea(){
      
      if(this.ngForm.valid){
        this.curso=this.profeApi.getCurrentCuso();
    this.tarea.idCurso=this.curso.idCurso;
    console.log(this.tarea);
    this.profeApi.saveTarea(this.tarea)
    .subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Exito!',
          'La Tarea ha sido Ingresada con EXITO!',
          'success'
        )
        this.router.navigate(['/profesor/tareas']);
      },
      err => console.error(err)
    )

      }
      else{
        Swal.fire(
          'Error!',
          'Ingrese datos de tarea validos!',
          'error'
        )

      }
    

    
    
}

validar(fecha:string, hora:string){
  let _hora= new Date(hora)
  let _fecha=new Date(fecha)
  console.log(_fecha)
  _fecha.setHours(_hora.getHours(),_hora.getMinutes(), 0)
  console.log(_fecha)
  if(_fecha>new Date()){
    console.log('No se puede')
    return false
  }else{
    console.log('Si se puede')
    return true
  }
}
    

  


}
