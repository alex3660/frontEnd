import { adminInterface } from 'src/app/models/admin-interface';
import { contrasenaInterface } from './../../models/contrasena';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profesorInterface } from 'src/app/models/profesor-inteface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';
import Swal from 'sweetalert2';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crontasena',
  templateUrl: './crontasena.component.html',
  styleUrls: ['./crontasena.component.css']
})
export class CrontasenaComponent implements OnInit {

  public ngForm: FormGroup
  
  constructor(private profeApi : ProfesorServiceService,  private router: Router, private authService: AuthService, private dataApiService :DataApiService) { 
    this.ngForm = this.createFormGroup()
  }

  createFormGroup(){
    return new FormGroup({
      pass: new FormControl('',[Validators.required, Validators.minLength(5)]),
      password: new FormControl('',[Validators.required, Validators.minLength(5)])
      })
  };
  get pass() { return this.ngForm.get('pass')};
  get password() { return this.ngForm.get('password')};



  contrasena : contrasenaInterface={
    id:'',
    tipo:'',
    passwordNueva:''
  }

  admin: adminInterface;
  user:profesorInterface;

  temp : string;

  ngOnInit() {
    this.admin= this.authService.getAdmin(),
    this.user= this.authService.getProfesor()
    
  }
  
  public isError = false;
  cambiarContrasena(){
    var temp = this.authService.getProfesor()
    if(this.ngForm.valid){
    if(temp == null){
      this.contrasena.tipo='Administrador'
      this.admin = this.authService.getAdmin();
    this.contrasena.id= this.admin[0].idAdministrador;
    if(this.contrasena.passwordNueva == this.temp){
      this.profeApi.editContrasena(this.contrasena)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Exito!',
            'La Contraseña ha sido cambiada con EXITO!',
            'success'
          )
          this.router.navigate(['/admin/inicio']);
        },
        err =>{ console.error(err),
        this.isError = true
        })
  
    }
    else{
      Swal.fire(
        'Error!',
        'Contraseñas no coinciden!',
        'error'
      )}
    }
    else{
      this.contrasena.tipo='Profesor'
      this.user = this.authService.getProfesor();
    this.contrasena.id= this.user[0].idProfesor;
    if(this.contrasena.passwordNueva == this.temp){
      this.profeApi.editContrasena(this.contrasena)
      .subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Exito!',
            'La Contraseña ha sido cambiada con EXITO!',
            'success'
          )
          this.router.navigate(['/profesor/inicio']);
        },
        err => console.error(err)
      )
  
    }else{
      Swal.fire(
        'Error!',
        'Contraseñas no coinciden!',
        'error'
      )}
    
    }
  }else{
    Swal.fire(
      'Error!',
      'Ingrese una contraseña válida!',
      'error'
    )}
    
    
    

  }

}
