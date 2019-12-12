import { comentarioInterface } from './../../../models/comentario';
import { foroListInterface } from './../../../models/foro-list';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';

@Component({
  selector: 'app-mensaje-foro',
  templateUrl: './mensaje-foro.component.html',
  styleUrls: ['./mensaje-foro.component.css']
})
export class MensajeForoComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService) { }

  foro: foroListInterface;
  comentarios: comentarioInterface

  ngOnInit() {
    this.listaComentario()
  }

  listaComentario(){
    this.foro= this.profeApi.getCurrentForo();
    this.profeApi.getComentario(this.foro.idForo)
    .subscribe((comentarios: comentarioInterface) => (this.comentarios = comentarios))
  }

}
