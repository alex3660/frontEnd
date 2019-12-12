import { foroListInterface } from './../../../models/foro-list';
import { cursoInterface } from './../../../models/crurso-interface';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foro',
  templateUrl: './foro.component.html',
  styleUrls: ['./foro.component.css']
})
export class ForoComponent implements OnInit {

  constructor(private profeApi : ProfesorServiceService, private router: Router) { }

  curso: cursoInterface;
  foros:foroListInterface;

  ngOnInit() {
    this.listaForo();
  }

  listaForo(){
    this.curso=this.profeApi.getCurrentCuso();
    this.profeApi.getforoC(this.curso.idCurso)
    .subscribe((foros: foroListInterface) => {(this.foros = foros), console.log(foros)});


  }

  abrirforo(foro: foroListInterface){
    this.profeApi.setForo(foro)
    this.router.navigate(['/profesor/foro/comentario']);


  }


}
