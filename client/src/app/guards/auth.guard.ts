import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard1 implements CanActivate{
  constructor(private authService: AuthService, private router: Router){}
  canActivate()
    {
    if(this.authService.getAdmin()){
      return true;
      
    }
    else{
      this.router.navigate(['/']);
      return false;
     
    }
  }
  
}
 