import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const listaBusqueda =[];
    
    for(const alumno of value){
      var Nombre1 =alumno.nombre1+' '+alumno.nombre2+' '+ alumno.apellido1+' '+alumno.apellido2;
      var Nombre2 =alumno.apellido1+' '+alumno.apellido2+' '+alumno.nombre1+' '+alumno.nombre2;
      if(Nombre1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(alumno)
       }
       else if(Nombre2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(alumno)
       }

      else if(alumno.nombre1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       listaBusqueda.push(alumno)
      }

      else if(alumno.nombre2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(alumno)

      }
      else if(alumno.apellido1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(alumno)

      }
      else if(alumno.apellido2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(alumno)

      }
      else if(alumno.numUnico.indexOf(arg) > -1){
        listaBusqueda.push(alumno)

      }
      else if(alumno.cedula.indexOf(arg) > -1){
        listaBusqueda.push(alumno)

      }
    

    };
    return listaBusqueda;
    
  }

}
