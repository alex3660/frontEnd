import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroc'
})
export class FiltrocPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const listaBusqueda =[];
    for(const curso of value){
      if(curso.codigoCurso.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       listaBusqueda.push(curso)
      }

      else if(curso.nombreMateria.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(curso)

      }
      else if(curso.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(curso)

      }
      
    

    };
    return listaBusqueda;
  }


}
