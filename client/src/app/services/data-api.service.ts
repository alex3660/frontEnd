import { asignarCursointerface } from './../models/agregar-alumno-curso';
import { alumnoInterface } from './../models/alumno-interface';
import { JwtResponseI } from 'src/app/models/jwt-response';
import { iCursoInterface } from './../models/ingresar-curso-interface';
import { cursoInterface } from './../models/crurso-interface';
import { profesorInterface } from './../models/profesor-inteface';
import { MateriaInterface } from './../models/materia-interface';
import { AuthService } from './auth.service';
import { MateriaIdComponent } from './../components/admin/materia-id/materia-id.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';




@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  materias: Observable<any>;
  materia: Observable<any>;

  alumno: Observable<any>;
  alumnos: Observable<any>;
  
  profesor: Observable<any>;
  profesores: Observable<any>;

  curso: Observable<any>;
  cursos: Observable<any>;

  registroca : Observable<any>;
  registrosca : Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService) { }

  url='http://192.168.0.4:3000'

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization: this.authService.gettoken()

  });

  public jwresponse : JwtResponseI ={

    userName: '',
    passwd: '',
    tipo:''
   };
    public sprofesor : profesorInterface ={
      idProfesor:'',
      numUnico:'',
      cedula:'',
      nombre1:'',
      nombre2:'',
      apellido1:'',
      apellido2:'',
      userName:'',
      passwd:'',
      correo:'',
      telefono:'',
      oficina:'',
      estado:'',
      tipo:'',
      token:''
    };

    public salumno : alumnoInterface ={ 
      idAlumno:'',
      numUnico:'',
      cedula:'',
      nombre1:'',
      nombre2:'',
      apellido1:'',
      apellido2:'',
      userName:'',
      passwd:'',
      correo:'',
      estado:''  
      
    };

    public smateria : MateriaInterface ={
    idMateria:'',
    codMateria:'',
    nombre:'',
    numHoras:''
    };

    public scurso: iCursoInterface ={
      idProfesor:'',
      idMateria:'',
      paralelo:'',
      aula:'',
      periodoLectivo:''
    };

    




  getMaterias(){
    let token = this.authService.gettoken();
    const url_api = this.url+'/materia';
    return this.http.get(url_api);
    
  }

  getMateriaId(id: string){
    let token = this.authService.gettoken();
    const url_api = this.url+`/materia/codigo/${id}`;
    return (this.materia = this.http.get(url_api))
  }

  saveMateria(materia: MateriaInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/materia';
    return this.http.post<MateriaInterface>(url_api, materia)
    .pipe(map(data => data ));
    
  }

  editMateria(alumno: MateriaInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/materia';
    return this.http.put<MateriaInterface>(url_api, alumno)
    .pipe(map(data => data ));
    
  }

 

  setMateria( admin: MateriaInterface){
    let admin_string = JSON.stringify(admin);
    localStorage.setItem('CurrentMateria', admin_string);
  }
  getCurrentMateria(): MateriaInterface{
    let admin_string = localStorage.getItem("CurrentMateria");
    if ( !isNullOrUndefined(admin_string)){
      let admin: MateriaInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }


  //ADMINISTRACION PROFESOR
  getProfesor(){
    let token = this.authService.gettoken();
    const url_api = this.url+'/profesor';
    return this.http.get(url_api);
    
  }

  setProfe( admin:profesorInterface){
    let admin_string = JSON.stringify(admin);
    localStorage.setItem('Profesor', admin_string);
  }
  
  getProfe(): profesorInterface{
    let admin_string = localStorage.getItem("Profesor");
    if ( !isNullOrUndefined(admin_string)){
      let admin: profesorInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  getProfesorId(cedula: string){
    let token = this.authService.gettoken();
    const url_api =this.url+`/profesor/cedula/${cedula}`;
    return (this.profesor = this.http.get(url_api))
  }

  saveProfesor(profesor: profesorInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/profesor';
    return this.http.post<profesorInterface>(url_api, profesor, {headers: this.headers})
    .pipe(map(data => data ));
    
  }

  setCProfesor( admin:profesorInterface){
    let admin_string = JSON.stringify(admin);
    localStorage.setItem('Currentprofe', admin_string);
  }
  getCurrentP(): profesorInterface{
    let admin_string = localStorage.getItem("Currentprofe");
    if ( !isNullOrUndefined(admin_string)){
      let admin: profesorInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  editProfesor(alumno: profesorInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/profesor';
    return this.http.put<profesorInterface>(url_api, alumno)
    .pipe(map(data => data ));
    
  }


  //ADMINISTRACION Estudiante
  getAlumno(){
    let token = this.authService.gettoken();
    const url_api = this.url+'/alumno';
    return this.http.get(url_api);
    
  }
  saveAlumno(alumno: alumnoInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/alumno';
    return this.http.post<alumnoInterface>(url_api, alumno)
    .pipe(map(data => data ));
    
  }

  editAlumno(alumno: alumnoInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/alumno';
    return this.http.put<alumnoInterface>(url_api, alumno)
    .pipe(map(data => data ));
    
  }

  getAlumnoId(id: string){
    
    const url_api =this.url+`/alumno/cedula/${id}`;
    return (this.alumno = this.http.get(url_api))
  }

  setAlumno( admin:alumnoInterface){
    let admin_string = JSON.stringify(admin);
    localStorage.setItem('CurrentAlumno', admin_string);
  }
  getCurrentAlumno(): alumnoInterface{
    let admin_string = localStorage.getItem("CurrentAlumno");
    if ( !isNullOrUndefined(admin_string)){
      let admin: alumnoInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }



   //ADMINISTRACION Cursos
   getCurso():Observable<cursoInterface> {
    const url_api = this.url+'/curso';
    return this.http.get<cursoInterface>(url_api);
    
  }

  getcursoId(id: string){
    
    const url_api =this.url+`/curso/codigo/${id}`;
    return (this.alumno = this.http.get(url_api));
  }

  savecurso(curso: iCursoInterface){
    
    const url_api = this.url+'/curso';
    return this.http.post<iCursoInterface>(url_api, curso)
    .pipe(map(data => data ));
    
  }
  
  saveAlumnocurso(registroca: asignarCursointerface){
    
    const url_api =this.url+'/registroCA';
    return this.http.post<asignarCursointerface>(url_api, registroca)
    .pipe(map(data => data ));
    
  }

}
