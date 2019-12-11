
import { cursoInterface } from './../../../models/crurso-interface';
import { repositorioInterface } from './../../../models/repositorio';
import { ProfesorServiceService } from './../../../services/profesor-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repositorio',
  templateUrl: './repositorio.component.html',
  styleUrls: ['./repositorio.component.css']
})
export class RepositorioComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService) { }


  curso: cursoInterface={
    codigoCurso:''
  }

  uploadedFiles: Array < File > ;

  ngOnInit() {
    this.curso= this.profeApi.getCurrentCuso();
    console.log(this.curso.codigoCurso);
    
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  upload() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length ; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);

    }
    this.profeApi.uploadFile(formData,this.curso.idCurso).subscribe((res)=> {
      console.log('response received is ', res);
    });
    }

}
