import { MateriaInterface } from './../../../models/materia-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-m',
  templateUrl: './editar-m.component.html',
  styleUrls: ['./editar-m.component.css']
})
export class EditarMComponent implements OnInit {

  public ngForm: FormGroup
  private pattern: any = /^\d*$/;
  
  constructor(private dataApi: DataApiService, private router: Router) { 
    this.ngForm = this.createFormGroup()
  }
  materia:MateriaInterface={};

  createFormGroup(){
    return new FormGroup({
      codMateria: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      horas: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
      })
  };
  get codMateria() { return this.ngForm.get('codMateria'); }
  get nombre() { return this.ngForm.get('nombre'); }
  get horas() { return this.ngForm.get('horas')}; 

  ngOnInit() {
    this.materia=this.dataApi.getCurrentMateria();
  }

  editM() {
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
          this.dataApi.editMateria(this.materia)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/materia']);
          },
          err => console.error(err)
        )
          Swal.fire(
            'Éxito!',
            'Los Cambios en la materia se han realizado con éxito!',
            'success'
          )
        }
      })

    }
    else{
      Swal.fire(
        'Error!',
        'Ingrese información de la materia correctamente!',
        'error'
      )
    }     
  }

}
