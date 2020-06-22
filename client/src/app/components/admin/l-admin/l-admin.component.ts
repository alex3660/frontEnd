import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router } from '@angular/router';
import { adminInterface } from 'src/app/models/admin-interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-l-admin',
  templateUrl: './l-admin.component.html',
  styleUrls: ['./l-admin.component.css']
})
export class LAdminComponent implements OnInit {

  constructor(public dataApi: DataApiService, public router: Router) { }
  administradores: any;
  filtro = '';
  pageActual: number = 1;

  ngOnInit() {
    this.lAdmin()
  }

  lAdmin(){
    this.dataApi
    .listAdmin()
    .subscribe((administradoress: adminInterface) => (this.administradores = administradoress));
    
  }

  editar(admin: adminInterface){
    
    this.dataApi.setAdminis(admin);    
    this.router.navigate(['/admin/admin/editar']);

  }
  eliminar(adminid: string){    
    Swal.fire({
    title: 'Esta Seguro de Eliminar Administrador',
    text: '',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI!',
    cancelButtonText: 'Cancelar'
    }).then((result) => {
    if (result.value) {
      this.dataApi.deleteAdministrador(adminid).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/admin/admin']);
          this.ngOnInit();
        },
        err => {console.error(err);
          
        }
      );
      Swal.fire(
        'ELIMINADO!',
        'El Administrador se ha Eliminado con EXITO!',
        'success'
      )
    }
  })       
     
    }

}
