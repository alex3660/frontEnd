import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const listaBusqueda =[];
    for(const alumno of value){
      if(alumno.nombre1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
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
