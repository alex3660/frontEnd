import { eliminarInterface } from './../../../models/eliminar';
import { Router } from '@angular/router';
import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { tareaInterface } from 'src/app/models/tarea';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import Swal from 'sweetalert2';

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

    Swal.fire({
      title: 'Esta Seguro de Eliminar Taller',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      if (result.value) {
        this.profeApi.deleteTaller(this.elim).subscribe(
          res => {
            
            this.router.navigate(['/profesor/talleres']);
            this.ngOnInit();
          },
          err => {console.error(err);
            
            this.ngOnInit();
          }
          
        );
        Swal.fire(
          'ELIMINADO!',
          'El Taller se ha Eliminado con EXITO!',
          'success'
        )
      }
    })
    
    
  }

  

}
