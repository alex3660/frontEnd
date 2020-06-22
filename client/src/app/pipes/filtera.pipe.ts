import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtera'
})
export class FilteraPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const listaBusqueda =[];
    
    for(const admin of value){
      var Nombre1 =admin.nombre1+' '+admin.nombre2+' '+ admin.apellido1+' '+admin.apellido2;
      var Nombre2 =admin.apellido1+' '+admin.apellido2+' '+admin.nombre1+' '+admin.nombre2;
      if(Nombre1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(admin)
       }
       else if(Nombre2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(admin)
       }

      else if(admin.nombre1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
       listaBusqueda.push(admin)
      }

      else if(admin.nombre2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(admin)

      }
      else if(admin.apellido1.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(admin)

      }
      else if(admin.apellido2.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        listaBusqueda.push(admin)

      }
      
      else if(admin.cedula.indexOf(arg) > -1){
        listaBusqueda.push(admin)

      }
    

    };
    return listaBusqueda;
    
  }

}
