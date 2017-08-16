import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filter'})
export class FilterPipe implements PipeTransform {
  transform(value: any, priority: number): any {
      if (!value) return value;
      return value.filter(val => val.priority == priority)  
  }
}
