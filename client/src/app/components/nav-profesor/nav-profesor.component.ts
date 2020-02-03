import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-profesor',
  templateUrl: './nav-profesor.component.html',
  styleUrls: ['./nav-profesor.component.css']
})
export class NavProfesorComponent implements OnInit {
  

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logoutP(): void {
    this.authService.logoutP();
    localStorage.clear();

  }

}
