import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { faPencilRuler, faKey} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-naveg',
  templateUrl: './naveg.component.html',
  styleUrls: ['./naveg.component.css']
})
export class NavegComponent implements OnInit {

  constructor(private authService: AuthService) { }
  faPencilRuler=faPencilRuler;

  ngOnInit() {
  }

  logout(): void {
    //localStorage.removeItem('CurrentAdmin');
    //localStorage.removeItem('token');
    this.authService.logout();

  }

}
