import { AuthService } from 'src/app/services/auth.service';
import { ProfesorServiceService } from './../../../services/profesor-service.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { profesorInterface } from 'src/app/models/profesor-inteface';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-navegacion',
  templateUrl: './profesor-navegacion.component.html',
  styleUrls: ['./profesor-navegacion.component.css']
})
export class ProfesorNavegacionComponent implements OnInit {

  constructor(private profeApi : ProfesorServiceService, private authService : AuthService, private dataApi: DataApiService, private router: Router) { }

  user:profesorInterface;
  public cursos: cursoInterface;
  


  ngOnInit() {
    localStorage.removeItem('Currentcurso');
    this.user = this.authService.getProfesor();
    console.log(this.user[0].idProfesor);
    this.getCurso()


  }


  getCurso(){
    this.profeApi.getcursoId(this.user[0].idProfesor)
    .subscribe((cursos: cursoInterface) => {this.cursos = cursos});

  }

  abrirCurso(Curso: cursoInterface){
    this.profeApi.setCurso(Curso)
    this.router.navigate(['/profesor/curso/menu']);


  }
  

  

}
