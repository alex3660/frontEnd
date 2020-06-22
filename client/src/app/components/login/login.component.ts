import { HttpHeaders } from '@angular/common/http';
import { profesorInterface } from './../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Location } from '@angular/common';
import { isError } from 'util';
import { JwtResponseI } from 'src/app/models/jwt-response';
import { faUserAlt, faKey} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, private location: Location) { }

  faCoffee = faUserAlt;
  faKey = faKey;

  user: JwtResponseI = {
    userName: '',
    passwd: '',
    tipo: ''
  };
  public isError = false;

  ngOnInit() {
    localStorage.clear();

   
  }


  nuevaSession() {
    
    this.authService.loginP(this.authService.jwrespose)
      .subscribe(
        res => {
          
          console.log(res);
          if(this.authService.jwrespose.tipo == 'Administrador'){
            this.authService.setAdmin(res.admin);
          this.authService.seToken(res.token);
            this.router.navigate(['/admin/inicio']);
            

          }
          else{
            this.authService.setProfesor(res.profesor);
            this.authService.seToken(res.token);
            if(res.profesor[0].estado == 'Nuevo')
            {
              
              this.router.navigate(['/profesor/passwd']);

            }

            else if(res.profesor[0].estado == 'Inactivo'){

              Swal.fire(
                'Error!',
                'Accesso Denegado usuario inactivo!',
                'error'
              )

            }


            else{
              this.router.navigate(['/profesor/inicio']);

            }            
          }          

        },
        err => {console.error(err);
          Swal.fire(
            'Error!',
            'Error el usuario o contraseña no coinciden!',
            'error'
          )
        
        }
      )
  }



 
 

 


  

}
