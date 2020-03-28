import { profesorInterface } from './../../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-profesor',
  templateUrl: './ingresar-profesor.component.html',
  styleUrls: ['./ingresar-profesor.component.css']
})
export class IngresarProfesorComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  private profesores: profesorInterface;
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
    
    if( confirm('ESTA SEGURO DE ELIMINAR EL PROFESOR')){

      this.dataApi.deleteProfesoR(profesorid).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/profesor']);
          this.ngOnInit();
        },
        err => {console.error(err);
          alert('No se elimino el Profesor'); 
        }
      );
    }
    
       
   
  }
}
