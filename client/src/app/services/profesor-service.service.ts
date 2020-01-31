import { foroListInterface } from './../models/foro-list';
import { foroInterface } from './../models/foro';
import { repositorioInterface } from './../models/repositorio';
import { tallerInterface } from './../models/taller';
import { evaluacionInterface } from './../models/evaluacion';
import { tareaInterface } from './../models/tarea';


import { cursoInterface } from './../models/crurso-interface';
import { iCursoInterface } from './../models/ingresar-curso-interface';
import { AuthService } from './auth.service';
import { MateriaIdComponent } from './../components/admin/materia-id/materia-id.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class ProfesorServiceService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  url='http://192.168.100.2:3000';

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
  
}






