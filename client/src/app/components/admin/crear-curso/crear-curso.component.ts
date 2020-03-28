
import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { MatTableDataSource, throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


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
    
    console.log(id);
    if( confirm('ESTA SEGURO DE ELIMINAR EL CURSO')){
      this.dataApi.deleteCurso(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/admin/curso']);
        this.ngOnInit();
      },
      err => {console.error(err);
        alert('No se elimino el Curso');
      }
    );}
    
  }
  
  
    
    

}
