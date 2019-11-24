import { adminInterface } from './../models/admin-interface';
import { profesorInterface } from './../models/profesor-inteface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map, tap} from 'rxjs/operators';
import { isNullOrUndefined } from "util";
import { JwtResponseI } from '../models/jwt-response';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000/login';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor( private http: HttpClient) { }

  public jwrespose : JwtResponseI = {

    userName: '',
    passwd: '',
    tipo:'',
   };

  headers : HttpHeaders = new HttpHeaders({
    "Content-Type": "appication/json"
  });

  

  loginP(user: JwtResponseI): Observable<any> {
    //token
    //not null
    const url_api = 'http://localhost:3000/login';
    return this.http.post<JwtResponseI>(url_api, user)
    .pipe(map(data => data ));
    
  }

  

  setAdmin( admin:adminInterface){
    let admin_string = JSON.stringify(admin);
    localStorage.setItem('CurrentAdmin', admin_string);
  }

  setProfesor( admin:profesorInterface){
    let admin_string = JSON.stringify(admin);
    localStorage.setItem('Currentprofe', admin_string);
  }
  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  getAdmin(): adminInterface{
    let admin_string = localStorage.getItem("CurrentAdmin");
    if ( !isNullOrUndefined(admin_string)){
      let admin: adminInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  getProfesor(): profesorInterface{
    let admin_string = localStorage.getItem("Currentprofe");
    if ( !isNullOrUndefined(admin_string)){
      let admin: profesorInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  seToken(token){
    localStorage.setItem("token", token);
  }

  gettoken(){
    return localStorage.getItem('token');    
  }

  logout(){
    //const url_api = 'http://localhost:3000/login?access_token=${accessToken}';
    localStorage.removeItem('CurrentAdmin');
    localStorage.removeItem('token');
    
    //return this.http.post<profesorInterface>(url_api, {headers : this.headers});
  }
  logoutP(){
    //const url_api = 'http://localhost:3000/login?access_token=${accessToken}';
    localStorage.removeItem('Currentprofe');
    localStorage.removeItem('token');
    
    //return this.http.post<profesorInterface>(url_api, {headers : this.headers});
  }
}
