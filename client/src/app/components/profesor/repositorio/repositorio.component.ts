import { descargaInterface } from './../../../models/descarga';

import { cursoInterface } from './../../../models/crurso-interface';
import { repositorioInterface } from './../../../models/repositorio';
import { ProfesorServiceService } from './../../../services/profesor-service.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faUserAlt, faFileAlt} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  constructor(
    public profeApi: ProfesorServiceService, 
    private router: Router,
    private modalService: NgbModal,
    @Inject(DOCUMENT) private documento: Document) { }


    arrayBuffer:any;
    file:File;
    element: File;
    closeResult: string
    faCoffee = faUserAlt;
    faKey = faFileAlt;;
    pageActual: number = 1;
    incomingfile(event) 
      {
      this.file= event.target.files; 
      }

  curso: cursoInterface={
    codigoCurso:''
  }


  descargas: any;
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
      Swal.fire(
        'Exito!',
        'El Archivo ha sido Adjuntado con EXITO!',
        'success'
      );
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

      Swal.fire({
        title: 'Esta Seguro de Eliminar Archivo',
        text: '',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'SI!',
        cancelButtonText: 'Cancelar'
        }).then((result) => {
        if (result.value) {
          this.profeApi.deleteRepositorio(repoid).subscribe(
            res => {
              console.log(res);
              this.router.navigate(['/profesor/repositorio']);
              this.ngOnInit();
            },
            err => {console.error(err);
              
              this.ngOnInit();
            }
            
          );
          Swal.fire(
            'ELIMINADO!',
            'El Archivo se ha Eliminado con EXITO!',
            'success'
          )
        }
      })
    
      
    }
}
