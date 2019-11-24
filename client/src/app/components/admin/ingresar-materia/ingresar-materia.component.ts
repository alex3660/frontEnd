
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

}
