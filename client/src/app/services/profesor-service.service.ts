import { environment } from './../../../../client/src/environments/environment.prod';
import { mensajeIngreso } from './../models/mensaje';

import { contrasenaInterface } from './../models/contrasena';
import { eliminarInterface } from './../models/eliminar';
import { tareaInterface } from 'src/app/models/tarea';
import { foroListInterface } from './../models/foro-list';
import { foroInterface } from './../models/foro';
import { repositorioInterface } from './../models/repositorio';
import { tallerInterface } from './../models/taller';
import { evaluacionInterface } from './../models/evaluacion';



import { cursoInterface } from './../models/crurso-interface';
import { iCursoInterface } from './../models/ingresar-curso-interface';
import { AuthService } from './auth.service';
import { MateriaIdComponent } from './../components/admin/materia-id/materia-id.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { comentarioForoInterface } from '../models/comentario-foro';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }
  
  //url='http://ec2-18-224-19-123.us-east-2.compute.amazonaws.com:3000';


  url= environment.apiUrl

  curso: Observable<any>;
  cursos: Observable<any>;

  getcursoId(id: string){
    
    const url_api =this.url+`/curso/profesor/${id}`;
    return (this.curso = this.http.get(url_api));
  }

  setCurso( curso: cursoInterface){
    let admin_string = JSON.stringify(curso);
    localStorage.setItem('Currentcurso', admin_string);
  }

  getCurrentCuso(): cursoInterface{
    let admin_string = localStorage.getItem("Currentcurso");
    if ( !isNullOrUndefined(admin_string)){
      let admin: cursoInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  setTarea( tarea: tareaInterface){
    let admin_string = JSON.stringify(tarea);
    localStorage.setItem('CurrentTarea', admin_string);
  }

  getCurrentTarea(): tareaInterface{
    let admin_string = localStorage.getItem("CurrentTarea");
    if ( !isNullOrUndefined(admin_string)){
      let admin: tareaInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }


  setEvaluacion( evaluacion: evaluacionInterface){
    let admin_string = JSON.stringify(evaluacion);
    localStorage.setItem('CurrentEvaluacion', admin_string);
  }

  getCurrentEvaluacion(): evaluacionInterface{
    let admin_string = localStorage.getItem("CurrentEvaluacion");
    if ( !isNullOrUndefined(admin_string)){
      let admin: evaluacionInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  setTaller( evaluacion: tallerInterface){
    let admin_string = JSON.stringify(evaluacion);
    localStorage.setItem('CurrentTaller', admin_string);
  }

  getCurrentTaller(): tallerInterface{
    let admin_string = localStorage.getItem("CurrentTaller");
    if ( !isNullOrUndefined(admin_string)){
      let admin: tallerInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }

  setForo( foro: foroListInterface){
    let admin_string = JSON.stringify(foro);
    localStorage.setItem('CurrentForo', admin_string);
  }

  getCurrentForo(): foroListInterface{
    let admin_string = localStorage.getItem("CurrentForo");
    if ( !isNullOrUndefined(admin_string)){
      let admin: foroListInterface = JSON.parse(admin_string);
      return admin;
    }
    else{
      return null;
    }
  }


  getAlumnoC(id: string){
    
    const url_api =this.url+`/registroCA/curso/${id}`;
    return (this.curso = this.http.get(url_api));
  }

  //TAREAS

  getTareaC(id: string){
    
    const url_api =this.url+`/tarea/curso/${id}`;
    return (this.curso = this.http.get(url_api));
  }

  saveTarea(tarea: tareaInterface)
  {
    const url_api = this.url+'/tarea';
    return this.http.post<tareaInterface>(url_api, tarea)
    .pipe(map(data => data ));
    
  }

  editTarea(tarea: tareaInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/tarea';
    return this.http.put<tareaInterface>(url_api, tarea)
    .pipe(map(data => data ));
    
  }

  deleteTarea(elimin:eliminarInterface){
    //token
    //not null

    let token = this.authService.gettoken();
    const url_api = this.url+`/tarea/delete`;
    return this.http.put<eliminarInterface>(url_api, elimin)
    .pipe(map(data => data ));  
    
  }

  //EVALUACIONES

  getEvaluacionC(id: string){
    
    const url_api =this.url+`/evaluacion/curso/${id}`;
    return (this.curso = this.http.get(url_api));
  }

  saveEvaluacion(evaluacion: evaluacionInterface)
  {
    const url_api = this.url+'/evaluacion';
    return this.http.post<evaluacionInterface>(url_api, evaluacion)
    .pipe(map(data => data ));
    
  }

  editEvaluacion(evaluacion: evaluacionInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/evaluacion';
    return this.http.put<evaluacionInterface>(url_api, evaluacion)
    .pipe(map(data => data ));
    
  }

  deleteEvaluacion(elim: eliminarInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+`/evaluacion/delete`;
    return this.http.put<eliminarInterface>(url_api, elim)
    .pipe(map(data => data ));
    
  }


  //Talleres

  getTallerC(id: string){
    
    const url_api =this.url+`/taller/curso/${id}`;
    return (this.curso = this.http.get(url_api));
  }

  saveTaller(taller: tallerInterface)
  {
    const url_api = this.url+'/taller';
    return this.http.post<tallerInterface>(url_api, taller)
    .pipe(map(data => data ));
    
  }

  editTaller(taller: tallerInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+'/taller';
    return this.http.put<tallerInterface>(url_api, taller)
    .pipe(map(data => data ));
    
  }


  deleteTaller(elimn : eliminarInterface){
    //token
    //not null
    let token = this.authService.gettoken();
    const url_api = this.url+`/taller/delete`;
    return this.http.put<eliminarInterface>(url_api,elimn)
    .pipe(map(data => data ));
    
  }


//Repositorio
uploadFile(formData, codCurso: string) {  

  let urlAPI = this.url+`/down/${codCurso}`;
  return this.http.post(urlAPI, formData);
}

getRepositorioC(id: string){
    
  const url_api =this.url+`/down/path/${id}`;
  return (this.curso = this.http.get(url_api));
}

//Foro

saveForo(foro: foroInterface)
{
  const url_api = this.url+'/foro';
  return this.http.post<foroInterface>(url_api, foro)
  .pipe(map(data => data ));
  
}

getforoC(id: string){
    
  const url_api =this.url+`/foro/enum/${id}`;
  return (this.curso = this.http.get(url_api));
}

getComentario(id: string){
  const url_api =this.url+`/comentario/foro/${id}`;
  return (this.curso = this.http.get(url_api));
}

saveComentario(comentario: comentarioForoInterface)
{
  const url_api = this.url+'/comentario';
  return this.http.post<comentarioForoInterface>(url_api, comentario)
  .pipe(map(data => data ));
  
}

descarga(id: string){
  const url_api =this.url+`/down/descarga/${id}`;
  return (this.curso = this.http.get(url_api));
}

deleteRepositorio(id: string){
  //token
  //not null
  let token = this.authService.gettoken();
  const url_api = this.url+`/down/delete/${id}`;
  return this.http.delete(url_api)
  .pipe(map(data => data ));
  
}


editContrasena(contrasena: contrasenaInterface){
  //token
  //not null
  let token = this.authService.gettoken();
  const url_api = this.url+'/login/change';
  return this.http.post<contrasenaInterface>(url_api, contrasena)
  .pipe(map(data => data ));
  
}

getMensaje(id: string){
  const url_api =this.url+`/mensaje/curso/${id}`;
  return (this.curso = this.http.get(url_api));
}

saveMensaje(id: string, mensaje: mensajeIngreso)
{
  const url_api = this.url+'/mensaje';
  return this.http.post<mensajeIngreso>(url_api, mensaje)
  .pipe(map(data => data ));
  
}

  
}







