import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrom'
})
export class FiltromPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const listaBusqueda =[];
    for(const materia of value){
      if(materia.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       listaBusqueda.push(materia)
      }

      else if(materia.codMateria.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(materia)

      }
      
    

    };
    return listaBusqueda;
  }

}
