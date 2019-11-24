import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroc'
})
export class FiltrocPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
