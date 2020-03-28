import { contrasenaInterface } from './../../models/contrasena';
import { ProfesorServiceService } from 'src/app/services/profesor-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { profesorInterface } from 'src/app/models/profesor-inteface';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-crontasena',
  templateUrl: './crontasena.component.html',
  styleUrls: ['./crontasena.component.css']
})
export class CrontasenaComponent implements OnInit {

  constructor(private profeApi : ProfesorServiceService,  private router: Router, private authService: AuthService, private dataApiService :DataApiService) { }

  contrasena : contrasenaInterface={
    id:'',
    tipo:'Profesor',
    passwordNueva:''
  }

  user:profesorInterface;

  temp : string;

  ngOnInit() {
  }

  cambiarContrasena(){
    this.user = this.authService.getProfesor();
    this.contrasena.id= this.user[0].idProfesor;
    console.log(this.contrasena)
    if(this.contrasena.passwordNueva == this.temp){
      this.profeApi.editContrasena(this.contrasena)
      .subscribe(
        res => {
          console.log(res);
          alert('CONTRASEÑA CAMBIADA');
          this.router.navigate(['/profesor/inicio']);
        },
        err => console.error(err)
      )
  
    }
    

  }

}
