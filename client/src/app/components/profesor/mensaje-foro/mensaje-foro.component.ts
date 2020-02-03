import { profesorInterface } from './../../../models/profesor-inteface';
import { comentarioInterface } from './../../../models/comentario';
import { foroListInterface } from './../../../models/foro-list';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { comentarioForoInterface } from 'src/app/models/comentario-foro';

@Component({
  selector: 'app-mensaje-foro',
  templateUrl: './mensaje-foro.component.html',
  styleUrls: ['./mensaje-foro.component.css']
})
export class MensajeForoComponent implements OnInit {

  constructor(private datapi :DataApiService, private profeApi:ProfesorServiceService, private router: Router) { }

  foro: foroListInterface;
  profesor: profesorInterface;
  comentarios: comentarioInterface;
  coment: comentarioForoInterface ={
    comentario:'',
  };


  ngOnInit() {
    this.listaComentario()
  }

  listaComentario(){
    this.foro= this.profeApi.getCurrentForo();
    this.profeApi.getComentario(this.foro.idForo)
    .subscribe((comentarios: comentarioInterface) => (this.comentarios = comentarios))
  }

  agregarComentario(){
    
    this.foro= this.profeApi.getCurrentForo(); 
    this.coment.idForo=this.foro.idForo;
    this.profesor=this.datapi.getCurrentP()
    this.coment.nombre=this.profesor[0].nombre1+' '+this.profesor[0].nombre2+' '+this.profesor[0].apellido1+' '+this.profesor[0].apellido2
    
    this.profeApi.saveComentario(this.coment)
    .subscribe(
      res => {
        
        this.router.navigate(['/profesor/foro/comentario']);
        this.ngOnInit();
      },
      err => console.error(err)
    )
}



  

}
