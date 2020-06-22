import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-moda-exel-al',
  templateUrl: './moda-exel-al.component.html',
  styleUrls: ['./moda-exel-al.component.css']
})
export class ModaExelAlComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logoutP(): void {
    this.authService.logoutP();
    localStorage.clear();

  }

  
}
