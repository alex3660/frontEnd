import { profesorInterface } from './../../../models/profesor-inteface';
import { DataApiService } from './../../../services/data-api.service';
import { foroInterface } from './../../../models/foro';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { cursoInterface } from 'src/app/models/crurso-interface';

@Component({
  selector: 'app-i-foro',
  templateUrl: './i-foro.component.html',
  styleUrls: ['./i-foro.component.css']
})
export class IForoComponent implements OnInit {

  constructor(private datapi :DataApiService, private profeApi:ProfesorServiceService, private router: Router) { }

  curso: cursoInterface;
  profesor: profesorInterface

  foro: foroInterface={
    idCurso:'',
    tema:'',
    nombre:'',
    comentario:'',

  }

  ngOnInit() {
  }

  ingresarForo(){

    this.curso=this.profeApi.getCurrentCuso();
    this.foro.idCurso=this.curso.idCurso;
    this.profesor=this.datapi.getCurrentP()
    this.foro.nombre=this.profesor[0].nombre1+' '+this.profesor[0].nombre2+' '+this.profesor[0].apellido1+' '+this.profesor[0].apellido2
    console.log(this.foro);
    this.profeApi.saveForo(this.foro)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/profesor/foro']);
      },
      err => console.error(err)
    )
}

}
