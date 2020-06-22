import { MateriaInterface } from './../../../models/materia-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-m',
  templateUrl: './editar-m.component.html',
  styleUrls: ['./editar-m.component.css']
})
export class EditarMComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }
  materia:MateriaInterface={};

  ngOnInit() {
    this.materia=this.dataApi.getCurrentMateria();
  }

  editM() {
    Swal.fire({
      title: 'Guardar',
      text: 'Esta seguro de Guardar los cambios',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'SI!',
      cancelButtonText: 'NO'
      }).then((result) => {
      if (result.value) {
        this.dataApi.editMateria(this.materia)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/materia']);
        },
        err => console.error(err)
      )
        Swal.fire(
          'Exito!',
          'Los Cambios en la materia se han realizado con exito!',
          'success'
        )
      }
    })
   
    
  }

}
