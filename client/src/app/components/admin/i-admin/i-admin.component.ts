import { adminInterface } from 'src/app/models/admin-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-i-admin',
  templateUrl: './i-admin.component.html',
  styleUrls: ['./i-admin.component.css']
})
export class IAdminComponent implements OnInit {

  public ngForm: FormGroup
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  private cedulaPattern: any = /^\d*$/;
  private pattern="[a-zA-Z ]{2,254}"
  
  constructor(private dataApi: DataApiService, 
    private router: Router, private activatedRoute: ActivatedRoute) { 
      this.ngForm = this.createFormGroup()
    }

    createFormGroup(){
      return new FormGroup({
        cedula: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.cedulaPattern)]),
        name1: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        name2: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        apellido1: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        apellido2: new FormControl('', [Validators.required, Validators.pattern(this.pattern)]),
        email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100),Validators.pattern(this.emailPattern)]), 
        })
    };

    get cedula() { return this.ngForm.get('cedula'); }
    get name1() { return this.ngForm.get('name1')}; 
    get name2() { return this.ngForm.get('name2')}; 
    get apellido1() { return this.ngForm.get('apellido1')}; 
    get apellido2() { return this.ngForm.get('apellido2')}; 
    get email() { return this.ngForm.get('email'); }
    
    
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
    
    if(this.ngForm.valid){
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
    else{
      Swal.fire(
        'Error!',
        'Ingrese información del adminsitrador correctamente!',
        'error'
      )
    }
  } 

}
