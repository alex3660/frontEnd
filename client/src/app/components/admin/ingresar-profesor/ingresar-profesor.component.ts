import { profesorInterface } from './../../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-profesor',
  templateUrl: './ingresar-profesor.component.html',
  styleUrls: ['./ingresar-profesor.component.css']
})
export class IngresarProfesorComponent implements OnInit {

  constructor(public dataApi: DataApiService, public router: Router) { }
  profesores: profesorInterface;
  filtro = '';
  pageActual: number = 1;

  ngOnInit() {
    this.getProfesor();
    console.log(this.profesores)

    
  }

  getProfesor(){
    this.dataApi
    .getProfesor()
    .subscribe((profesores: profesorInterface) => (this.profesores = profesores));
    localStorage.removeItem('CurrentP');

  }

  editar(profesor: profesorInterface){
    this.dataApi.setCProfesor(profesor);    
    this.router.navigate(['/admin/profesor/editar']);


  }

  eliminar(profesorid: string){
      Swal.fire({
      title: 'Esta Seguro de Eliminar Profesor',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      if (result.value) {
        this.dataApi.deleteProfesoR(profesorid).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/profesor']);
            this.ngOnInit();
          },
          err => {console.error(err);
            
          }
        );
        Swal.fire(
          'ELIMINADO!',
          'El Profesor se ha Eliminado con EXITO!',
          'success'
        )
      }
    })  
   
  }
}
