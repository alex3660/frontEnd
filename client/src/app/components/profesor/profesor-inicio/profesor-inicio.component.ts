import { profesorInterface } from './../../../models/profesor-inteface';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-profesor-inicio',
  templateUrl: './profesor-inicio.component.html',
  styleUrls: ['./profesor-inicio.component.css']
})
export class ProfesorInicioComponent implements OnInit {

  constructor(private authService: AuthService, private dataApiService :DataApiService) { }
  user:profesorInterface

  ngOnInit() {
    this.user = this.authService.getProfesor();
    console.log(this.user);
    localStorage.removeItem('Currentcurso');
  }

}
