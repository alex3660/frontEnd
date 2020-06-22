
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { MateriaInterface } from './../../../models/materia-interface';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ingresar-materia',
  templateUrl: './ingresar-materia.component.html',
  styleUrls: ['./ingresar-materia.component.css']
})
export class IngresarMateriaComponent implements OnInit {

  constructor(public dataApi: DataApiService, public router: Router) { }

  
  materias: MateriaInterface;
  filtro = '';
  pageActual: number = 1;

  ngOnInit() {
    this.getMaterias();
  }

  getMaterias(){
    this.dataApi
    .getMaterias()
    .subscribe((materias: MateriaInterface) => (this.materias = materias));
    localStorage.removeItem('CurrentMateria');

  }

  editar(materia: MateriaInterface){
    this.dataApi.setMateria(materia);    
    this.router.navigate(['/admin/materia/editar']);


  }
  eliminar(materiaid: string){
    
    Swal.fire({
      title: 'Esta Seguro de Eliminar Materia',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'Cancelar'
      }).then((result) => {
      if (result.value) {
        this.dataApi.deleteMateria(materiaid).subscribe(
          res => {
            console.log(res);
            this.router.navigate(['/admin/materia']);
            this.ngOnInit();
          },
          err => {console.error(err);
            
          }
        );
        Swal.fire(
          'ELIMINADO!',
          'La Materia se ha Eliminado con EXITO!',
          'success'
        )
      }
    })     
   
  }

}
