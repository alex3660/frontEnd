import { tallerInterface } from './../../../models/taller';
import { Component, OnInit } from '@angular/core';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-taller',
  templateUrl: './edit-taller.component.html',
  styleUrls: ['./edit-taller.component.css']
})
export class EditTallerComponent implements OnInit {

  constructor(private profeApi: ProfesorServiceService, private router: Router) { }

  taller: tallerInterface;

  ngOnInit() {
    this.taller = this.profeApi.getCurrentTaller();

  }

  editarTaller() {

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
        this.profeApi.editTaller(this.taller)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profesor/talleres']);
        },
        err => console.error(err)
      )
        Swal.fire(
          'Exito!',
          'Los cambios en el taller se han realizado con exito!',
          'success'
        )
      }
    }) 
    
   
  }




}
