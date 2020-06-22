
import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { MatTableDataSource, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  constructor(private profeApi : ProfesorServiceService, private authService : AuthService, private dataApi: DataApiService, private router: Router) {
   }
  public cursos: cursoInterface;
  filtro = '';
  
  pageActual: number = 1;
  

  ngOnInit() {
    this.getCurso();
    
  }

  getCurso(){
    this.dataApi
    .getCurso()
    .subscribe((cursos: cursoInterface) => {this.cursos = cursos});


  }
  
    lista(Curso: cursoInterface){
      this.profeApi.setCurso(Curso)
      this.router.navigate(['/admin/curso/lista']);
    
  }

  eliminar(id: string){
    
    Swal.fire({
      title: 'Esta Seguro de Eliminar Curso',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      if (result.value) {
        this.dataApi.deleteCurso(id).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/curso']);
            this.ngOnInit();
          },
          err => {console.error(err);
            alert('No se elimino el Curso');
          }
        );
        Swal.fire(
          'ELIMINADO!',
          'El Curso se ha Eliminado con EXITO!',
          'success'
        )
      }
    })    
    
    
  }
  
  
    
    

}
