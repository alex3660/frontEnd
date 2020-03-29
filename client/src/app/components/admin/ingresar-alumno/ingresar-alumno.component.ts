
import { alumnoInterface } from './../../../models/alumno-interface';
import { Component, OnInit, PipeTransform } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

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
    
   if( confirm('Esta seguro de eliminar el Alumno')){
    this.dataApi.deleteAlumno(alumnoid).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/alumno']);
        this.ngOnInit();
      },
      err => {console.error(err);
        alert('No se elimino el Alumno');
      }
    );

   } 
    
       
   
  }
  
  

}
