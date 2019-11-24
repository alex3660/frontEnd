import { adminInterface } from './../../../models/admin-interface';
import { DataApiService } from 'src/app/services/data-api.service';
import { profesorInterface } from './../../../models/profesor-inteface';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.css']
})
export class AdminInicioComponent implements OnInit {

  constructor(private authService: AuthService, private dataApiService :DataApiService) { }
  user: adminInterface

  ngOnInit() {
    this.user = this.authService.getAdmin();
    console.log(this.user);
        
  }

  

 

  
}
