
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { MateriaInterface } from './../../../models/materia-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-materia',
  templateUrl: './ingresar-materia.component.html',
  styleUrls: ['./ingresar-materia.component.css']
})
export class IngresarMateriaComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }

  
  private materias: MateriaInterface;
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
    
    if( confirm('ESTA SEGURO DE ELIMINAR EL PROFESOR')){
      this.dataApi.deleteMateria(materiaid).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/materia']);
          this.ngOnInit();
        },
        err => {console.error(err);
          alert('No se elimino el Alumno');
        }
      );
         
    }
    
   
  }

}
