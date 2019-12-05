import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], search: string, column?: string): any[] {
    if (!value) {
      return [];
    }
    if (!search) {
      return value;
    }

    search = search.toLocaleLowerCase();
    if(column === ''){
    return value.filter(
      val => Object.keys(val).some(i => {
        if (typeof val[i] === 'string') {
          return val[i].toLowerCase().includes(search.toLocaleLowerCase());
          }
        }));
    } else {
      return value.filter(
        val => val[column].toLowerCase().includes(search.toLocaleLowerCase())
      );
    }
  }

}
