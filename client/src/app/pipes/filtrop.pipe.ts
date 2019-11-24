import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrop'
})
export class FiltropPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const listaBusqueda =[];
    for(const profesor of value){
      if(profesor.nombre1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       listaBusqueda.push(profesor)
      }

      else if(profesor.nombre2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(profesor)

      }
      else if(profesor.apellido1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(profesor)

      }
      else if(profesor.apellido2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(profesor)

      }
      else if(profesor.numUnico.indexOf(arg) > -1){
        listaBusqueda.push(profesor)

      }
      else if(profesor.cedula.indexOf(arg) > -1){
        listaBusqueda.push(profesor)

      }
    

    };
    return listaBusqueda;
    
  }

}
