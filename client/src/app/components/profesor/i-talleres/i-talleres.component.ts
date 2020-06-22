import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import { cursoInterface } from 'src/app/models/crurso-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-i-talleres',
  templateUrl: './i-talleres.component.html',
  styleUrls: ['./i-talleres.component.css']
})
export class ITalleresComponent implements OnInit {

  constructor(private profeApi:ProfesorServiceService, private router: Router) { }

  taller:tallerInterface={
    idCurso:'',
    nombre:'',
    descripcion:'',
    horaEntrega:'',
    fechaEntrega:'',
    tipoEntrega:''

  };
  
  curso: cursoInterface;

  ngOnInit() {
  }

  ingresarTaller(){

    this.curso=this.profeApi.getCurrentCuso();
    this.taller.idCurso=this.curso.idCurso;
    console.log(this.taller);
    this.profeApi.saveTaller(this.taller)
    .subscribe(
      res => {
        console.log(res);
        Swal.fire(
          'Exito!',
          'El Taller ha sido Ingresado con EXITO!',
          'success'
        )
        this.router.navigate(['/profesor/talleres']);
      },
      err => console.error(err)
    )
}

}
