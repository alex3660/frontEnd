import { eliminarInterface } from './../../../models/eliminar';
import { Router } from '@angular/router';
import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { tareaInterface } from 'src/app/models/tarea';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';

@Component({
  selector: 'app-talleres',
  templateUrl: './talleres.component.html',
  styleUrls: ['./talleres.component.css']
})
export class TalleresComponent implements OnInit {

  constructor(public profeApi: ProfesorServiceService, private router: Router) { }

  curso:cursoInterface;
  talleres: tallerInterface;
  elim:eliminarInterface={
    idEvento:'',
    idCurso:'',
  };

  ngOnInit() {
    this.listaTaller()
  }

  listaTaller(){
    this.curso= this.profeApi.getCurrentCuso();
    this.profeApi.getTallerC(this.curso.idCurso)
    .subscribe((talleres: tareaInterface) => (this.talleres = talleres));
    
  }

  editar(taller: tallerInterface){
    this.profeApi.setTaller(taller);    
    this.router.navigate(['profesor/editar/taller']);

  }


  eliminar(tallerid: string, cursoIi: string){
    this.elim.idEvento=tallerid;
    this.elim.idCurso=cursoIi;
    if( confirm('ESTA SEGURO DE ELIMINAR EL TALLER!!!')){
      this.profeApi.deleteTaller(this.elim).subscribe(
        res => {
          
          this.router.navigate(['/profesor/talleres']);
          this.ngOnInit();
        },
        err => {console.error(err);
          alert('No se elimino el taller');
          this.ngOnInit();
        }
        
      );

    }
    
  }

  

}
