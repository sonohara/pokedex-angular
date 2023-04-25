import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id',
})
export class IdPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'number') {
      value = value.toString();
    }
    return `#${value.padStart(5, '0')}`;
  }
}
