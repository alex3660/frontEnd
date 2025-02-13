import { iCursoInterface } from './../../../models/ingresar-curso-interface';
import { MateriaInterface } from './../../../models/materia-interface';
import { profesorInterface } from './../../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-i-curso',
  templateUrl: './i-curso.component.html',
  styleUrls: ['./i-curso.component.css']
})
export class ICursoComponent implements OnInit {

  constructor(public dataApi: DataApiService, private router: Router, private activatedRoute: ActivatedRoute, private modalService: NgbModal) { }

  arrayBuffer:any;
  file:File;
  profesores: profesorInterface;
  materias: MateriaInterface;
  filtro = '';
  filtro1 = '';
  filtro2 = '';
  pageActual: number = 1;
  closeResult: string;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }

  profe:profesorInterface={
    idProfesor:'',
    cedula:'',
    
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
    this.getProfesor();
    this.getMaterias();
    
  }

  buscarp(pcedula: string){
    this.profe.cedula=pcedula;
    this.dataApi
  .getProfesorId(pcedula)
  .subscribe((profesor: profesorInterface) => {(this.profe = profesor), 
    this.profe.cedula=pcedula,
    this.curso.idProfesor=profesor[0].idProfesor,
    this.dataApi.setProfe(profesor)});
    this.profe.cedula=pcedula;

     

  }
  

  buscarM(codMateria: string){

    this.dataApi
  .getMateriaId(codMateria)
  .subscribe((materia: MateriaInterface) => {(this.materi = materia),
    this.materi.codMateria=codMateria,
    this.curso.idMateria=materia[0].idMateria});
    this.materi.codMateria=codMateria;
    
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  openM(contM) {
    this.modalService.open(contM, { size: 'lg' });
  }


 ingresarCurso(){ 
  
  this.dataApi.savecurso(this.curso)
      .subscribe(
        res => {
          Swal.fire(
            'Exito!',
            'El Curso ha sido Ingresado con EXITO!',
            'success'
          )
          this.router.navigate(['/admin/curso']);
        },
        err => {console.error(err);
          Swal.fire(
            'Error!',
            'Error en Datos!',
            'error'
          )}
      );

      console.log(this.curso)



}

getProfesor(){
  this.dataApi
  .getProfesor()
  .subscribe((profesores: profesorInterface) => (this.profesores = profesores));
  

}

getMaterias(){
  this.dataApi
  .getMaterias()
  .subscribe((materias: MateriaInterface) => (this.materias = materias));
  localStorage.removeItem('CurrentMateria');

}



 

}
