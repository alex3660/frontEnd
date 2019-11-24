import { iCursoInterface } from './../../../models/ingresar-curso-interface';
import { MateriaInterface } from './../../../models/materia-interface';
import { profesorInterface } from './../../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-i-curso',
  templateUrl: './i-curso.component.html',
  styleUrls: ['./i-curso.component.css']
})
export class ICursoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router, private activatedRoute: ActivatedRoute) { }

  arrayBuffer:any;
  file:File;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }

  profe:profesorInterface={
    idProfesor:'',
    cedula:''
  };
  materi: MateriaInterface={
    idMateria:'',
    codMateria:'' 
   };

  curso:iCursoInterface ={
    idProfesor:'',
    idMateria:'',
    paralelo:'',
    aula:'',
    periodoLectivo:''
  };

  
  ngOnInit() {
    
  }

  buscarp(){
    this.dataApi
  .getProfesorId(this.profe.cedula)
  .subscribe((profesor: profesorInterface) => {(this.profe = profesor),
    console.log(profesor), 
    this.curso.idProfesor=profesor[0].idProfesor,
    this.dataApi.setProfe(profesor)});

  this.dataApi
  .getMateriaId(this.materi.codMateria)
  .subscribe((materia: MateriaInterface) => {(this.materi = materia),
    this.curso.idMateria=materia[0].idMateria});
    

  }


 ingresarCurso(){ 
  
  this.dataApi.savecurso(this.curso)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/curso']);
        },
        err => {console.error(err);
          alert('ERROR EN DATOS');}
      );

      console.log(this.curso)



}



 

}
