import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { alumnoInterface } from 'src/app/models/alumno-interface';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { asignarCursointerface } from 'src/app/models/agregar-alumno-curso';

@Component({
  selector: 'app-aalumno-individual-curso',
  templateUrl: './aalumno-individual-curso.component.html',
  styleUrls: ['./aalumno-individual-curso.component.css']
})
export class AalumnoIndividualCursoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router, private modalService: NgbModal) { }

  
  filtro = '';
  pageActual: number = 1;
  closeResult: string;
  alumno:alumnoInterface={
    idAlumno:'',
    cedula:'',
  };
  curso:cursoInterface={
    idCurso:'',
    codigoCurso:'',
  };
  rca: asignarCursointerface={
    idCurso:'',
    idAlumno:'',
    
  };

  public cursos: cursoInterface;
  public alumnos: alumnoInterface;

  ngOnInit() {
    this.getCurso();
    this.getEstudiante();
  }

  getCurso(){
    this.dataApi
    .getCurso()
    .subscribe((cursos: cursoInterface) => {this.cursos = cursos});
  }

  buscarc(id: string){

    this.dataApi
    .getcursoId(id)
    .subscribe((materia: cursoInterface) => {(this.curso = materia),
      alert('Curso Asignado'),
      console.log(materia),  
      this.curso.codigoCurso=id,
      this.rca.idCurso=materia[0].idCurso})
      console.log(this.rca) 
  
    }

    getEstudiante(){
      this.dataApi
      .getAlumno()
      .subscribe((alumnos: alumnoInterface) => (this.alumnos = alumnos));
      localStorage.removeItem('CurrentAlumno');
  
    }

    buscarp(cedula: string){
      this.dataApi
    .getAlumnoId(cedula)
    .subscribe((profesor: alumnoInterface) => {(this.alumno = profesor),
      alert('Alumno Asignado'),
      this.alumno.cedula=cedula,
      console.log(profesor), 
      this.rca.idAlumno=profesor[0].idAlumno}); 
           
    }

    Guardar(){
      console.log(this.rca)
      
      this.dataApi.saveAlumnocurso(this.rca)
        .subscribe(
          res => {
            console.log(res);
            alert('ALUMNO ASIGNADO CON EXITO!');
            this.router.navigate(['/admin/curso']);
          },
          err => console.error(err)
        );    
  
  
    }

    open(content) {
      this.modalService.open(content, { size: 'lg' });
    }

    openM(content) {
      this.modalService.open(content, { size: 'lg' });
    }

    

  

}
