import { adminInterface } from 'src/app/models/admin-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-i-admin',
  templateUrl: './i-admin.component.html',
  styleUrls: ['./i-admin.component.css']
})
export class IAdminComponent implements OnInit {

  constructor(private dataApi: DataApiService, 
    private router: Router, private activatedRoute: ActivatedRoute) { }
    
    arrayBuffer:any;
    file:File;
    closeResult: string;

    user: adminInterface = {
      usuario: '',
      cedula: '',
      nombre1: '',
      nombre2: '',
      apellido1: '',
      apellido2: '',    
      correo: ''      
    };
  
    ngOnInit() {

  }

  nuevoAdmin(){
    console.log(this.user)
    this.dataApi.saveAdmin(this.user)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Exito!',
            'El Administrador ha sido Ingresado con EXITO!',
            'success'
          )
          this.router.navigate(['/admin/admin']);
        },
        err => {console.error(err);
          Swal.fire(
            'Error!',
            'Error en Datos!',
            'error'
          )
          
        }
        
      )
  }

}
