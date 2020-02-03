import { descargaInterface } from './../../../models/descarga';

import { cursoInterface } from './../../../models/crurso-interface';
import { repositorioInterface } from './../../../models/repositorio';
import { ProfesorServiceService } from './../../../services/profesor-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faUserAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  constructor(
    private profeApi: ProfesorServiceService, 
    private router: Router,
    private modalService: NgbModal,
    @Inject(DOCUMENT) private documento: Document) { }


    arrayBuffer:any;
    file:File;
    element: File;
    closeResult: string
    faCoffee = faUserAlt;
    faKey = faFileAlt;;
    incomingfile(event) 
      {
      this.file= event.target.files; 
      }

  curso: cursoInterface={
    codigoCurso:''
  }


  descargas: descargaInterface

  uploadedFiles: Array < File > ;

  ngOnInit() {
    this.curso= this.profeApi.getCurrentCuso();    
    this.listaRepositorio();
    
    
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);

    }
    this.profeApi.uploadFile(formData,this.curso.idCurso).subscribe((res)=> {
      console.log('response received is ', res);
      this.ngOnInit();
      
      

    });
    this.router.navigate(['/profesor/repositorio']);
    }

    listaRepositorio(){
      console.log('hola');
      this.curso= this.profeApi.getCurrentCuso();
      this.profeApi.getRepositorioC(this.curso.idCurso)
      .subscribe((descargas: descargaInterface) => {(this.descargas = descargas);
        
      
      });
      
    }

    llamarDescargar(){
      
      let descargar = this.documento.getElementById("descargar");
      descargar

    }

    open(content) {
      this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});
    }

    eliminar(repoid: string){
    
    
      this.profeApi.deleteRepositorio(repoid).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/repositorio']);
          this.ngOnInit();
        },
        err => {console.error(err);
          alert('No se elimino el tarea');
          this.ngOnInit();
        }
        
      );
    }
}
