import { cursoInterface } from './../../../models/crurso-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { MatTableDataSource, throwMatDialogContentAlreadyAttachedError } from '@angular/material';


@Component({
  selector: 'app-crear-curso',
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent implements OnInit {

  constructor(private readonly dataApi: DataApiService) {
   }
  public cursos: cursoInterface;
 

   

  ngOnInit() {
    this.getCurso();
    
  }

  getCurso(){
    this.dataApi
    .getCurso()
    .subscribe((cursos: cursoInterface) => {this.cursos = cursos});


  }

  
  
    
    

}
