import { Router } from '@angular/router';
import { evaluacionInterface } from './../../../models/evaluacion';
import { Component, OnInit } from '@angular/core';
import { cursoInterface } from 'src/app/models/crurso-interface';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { eliminarInterface } from 'src/app/models/eliminar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html',
  styleUrls: ['./evaluaciones.component.css']
})
export class EvaluacionesComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private router: Router) { }

  curso:cursoInterface;
  evaluaciones: evaluacionInterface;
  elim:eliminarInterface={
    idEvento:'',
    idCurso:'',
  };


  ngOnInit() {
    this.listaE();
  }

  listaE(){
    this.curso= this.profeApi.getCurrentCuso();
    this.profeApi.getEvaluacionC(this.curso.idCurso)
    .subscribe((evaluaciones: evaluacionInterface) => (this.evaluaciones = evaluaciones));
    
  }

  editar(evaluacion: evaluacionInterface){
    this.profeApi.setEvaluacion(evaluacion);    
    this.router.navigate(['profesor/editar/evaluacion']);

  }

  eliminar(evaluacionid: string, idCurso: string){
    this.elim.idEvento=evaluacionid,
    this.elim.idCurso=idCurso;
    
    Swal.fire({
      title: 'Esta Seguro de Eliminar Evaluación',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      if (result.value) {
        this.profeApi.deleteEvaluacion(this.elim).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/profesor/evaluaciones']);
            this.ngOnInit();
          },
          err => {console.error(err);
            
          }
        );
        Swal.fire(
          'ELIMINADO!',
          'La Evaluación se ha Eliminado con EXITO!',
          'success'
        )
      }
    })
    
    
       
   
  }

}
