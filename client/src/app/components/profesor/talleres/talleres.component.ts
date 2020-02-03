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

  constructor(private profeApi: ProfesorServiceService, private router: Router) { }

  curso:cursoInterface;
  talleres: tallerInterface;

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


  eliminar(tallerid: string){
    
    
    this.profeApi.deleteTaller(tallerid).subscribe(
      res => {
        console.log('jojk');
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
