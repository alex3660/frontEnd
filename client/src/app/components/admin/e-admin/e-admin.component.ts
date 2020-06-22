import { adminInterface } from './../../../models/admin-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-e-admin',
  templateUrl: './e-admin.component.html',
  styleUrls: ['./e-admin.component.css']
})
export class EAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, private router: Router) { }

  user:adminInterface={}

  ngOnInit() {
    this.user= this.dataApi.getAdminis();
    console.log(this.user.idAdministrador);
  }

  nuevoAdmin() {
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
        this.dataApi.editAdmin(this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/admin']);
        },
        err => console.error(err)
      )
        Swal.fire(
          'Exito!',
          'Los Cambios se han realizado con EXITO!',
          'success'
        )
      }
    }) 
    
  }


}
