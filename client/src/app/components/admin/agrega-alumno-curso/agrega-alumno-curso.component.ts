import { async } from '@angular/core/testing';
import { asignarCursointerface } from './../../../models/agregar-alumno-curso';
import { cursoInterface } from './../../../models/crurso-interface';
import { alumnoInterface } from './../../../models/alumno-interface';
import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as XLSX from 'ts-xlsx';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-agrega-alumno-curso',
  templateUrl: './agrega-alumno-curso.component.html',
  styleUrls: ['./agrega-alumno-curso.component.css']
})
export class AgregaAlumnoCursoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router, private modalService: NgbModal) { }
  arrayBuffer:any;
  file:File;
  filtro = '';
  pageActual: number = 1;
  closeResult: string;
  incomingfile(event) 
    {
    this.file= event.target.files[0]; 
    }

  alumno:alumnoInterface={
    idAlumno:'',
    cedula:''
  };
  curso:cursoInterface={
    idCurso:'',
    codigoCurso:'',
  };
  rca: asignarCursointerface={
    idCurso:'',
    idAlumno:''
    
  };

  listaAlumnos: alumnoInterface[]=[];
  listRca: asignarCursointerface[]=[];
  lista: string[]=[];

  public cursos: cursoInterface;


  ngOnInit() {
    this.getCurso();
  }


  getCurso(){
    this.dataApi
    .getCurso()
    .subscribe((cursos: cursoInterface) => {this.cursos = cursos});


  }

  buscarp(){

    this.dataApi
  .getcursoId(this.curso.codigoCurso)
  .subscribe((materia: cursoInterface) => {(this.curso = materia),
    console.log(materia),
    this.rca.idCurso=materia[0].idCurso})

    this.dataApi
  .getAlumnoId(this.alumno.cedula)
  .subscribe((profesor: alumnoInterface) => {(this.alumno = profesor),
    console.log(profesor), 
    this.rca.idAlumno=profesor[0].idAlumno});       

  }

  buscarc(id: string){

  this.dataApi
  .getcursoId(id)
  .subscribe((materia: cursoInterface) => {(this.curso = materia),
    console.log(materia),  
    this.curso.codigoCurso=id,
    this.rca.idCurso=materia[0].idCurso})
     

  }

  

  Guardar(){
    console.log(this.rca)
    
    this.dataApi.saveAlumnocurso(this.rca)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/curso']);
        },
        err => console.error(err)
      );     


  }


  async Upload() {
    
    let fileReader = new FileReader();
    fileReader.onload = async (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        //for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = XLSX.read(bstr, {type:"binary"});
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        this.listaAlumnos=(XLSX.utils.sheet_to_json(worksheet,{raw:true}));               
        var lista1=[]
        var temp:asignarCursointerface;
        for (var i =0; i< this.listaAlumnos.length; i++){
          await this.dataApi
          .getAlumnoId(this.listaAlumnos[i].cedula)
          .subscribe(async(profesor: alumnoInterface) => {await(this.alumno = profesor); 
           //this.rca.idAlumno=profesor[0].idAlumno, 
           this.lista.push(profesor[0].idAlumno); 
           temp={idCurso: this.rca.idCurso, idAlumno:profesor[0].idAlumno },
          console.log(temp),
        this.dataApi.saveAlumnocurso(temp)
        .subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/curso']);
          },
          err => console.error(err)
        )
          }); 
        } 
        ;
      Swal.fire(
        'Exito!',
        'Alumnos Asignados con EXITO!',
        'success'
      )

    }
    fileReader.readAsArrayBuffer(this.file);
    //console.log(this.lista);   
}

open(content) {
  this.modalService.open(content, { size: 'lg' });
}


  
}
