
import { alumnoInterface } from './../../../models/alumno-interface';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import  Swal from 'sweetalert2'


@Component({
  selector: 'app-ingresar-alumno',
  templateUrl: './ingresar-alumno.component.html',
  styleUrls: ['./ingresar-alumno.component.css']
})



export class IngresarAlumnoComponent implements OnInit {

  constructor(public dataApi: DataApiService, public router: Router) { }
  alumnos: alumnoInterface;
  filtro = '';
  pageActual: number = 1;



  ngOnInit() {
    this.getEstudiante();
  }

  getEstudiante(){
    this.dataApi
    .getAlumno()
    .subscribe((alumnos: alumnoInterface) => (this.alumnos = alumnos));
    localStorage.removeItem('CurrentAlumno');

  }

  editar(alumno: alumnoInterface){
    
    this.dataApi.setAlumno(alumno);    
    this.router.navigate(['/admin/alumno/editar']);

  }

  eliminar(alumnoid: string){    
  Swal.fire({
  title: 'Esta Seguro de Eliminar Alumno',
  text: '',
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'SI!',
  cancelButtonText: 'Cancelar'
  }).then((result) => {
  if (result.value) {
    this.dataApi.deleteAlumno(alumnoid).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/alumno']);
        this.ngOnInit();
      },
      err => {console.error(err);
        
      }
    );
    Swal.fire(
      'ELIMINADO!',
      'El Alumno se ha Eliminado con EXITO!',
      'success'
    )
  }
})       
   
  }
  
  

}
