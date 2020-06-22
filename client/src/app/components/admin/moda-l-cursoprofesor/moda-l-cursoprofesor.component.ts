import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { alumnoCursoInterface } from 'src/app/models/alumno-curso';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-moda-l-cursoprofesor',
  templateUrl: './moda-l-cursoprofesor.component.html',
  styleUrls: ['./moda-l-cursoprofesor.component.css']
})
export class ModaLCursoprofesorComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private dataApi: DataApiService, private router: Router) { }

  alumnos:alumnoCursoInterface;
  curso:cursoInterface;

  ngOnInit() {
    this.curso= this.profeApi.getCurrentCuso();
    console.log(this.curso.idCurso);
    this.alumnoCurso()

  }

  alumnoCurso(){
    
    this.profeApi
    .getAlumnoC(this.curso.idCurso)
    .subscribe((alumnos: alumnoCursoInterface) => (this.alumnos = alumnos));

  
}

eliminar(id: string){

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
      this.dataApi.deleteAlumnoCurso(id).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/curso/lista']);
          this.ngOnInit();
        },
        err => {console.error(err);
          alert('No se elimino el Alumno');
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
