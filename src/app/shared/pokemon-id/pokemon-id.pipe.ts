import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonId',
})
export class PokemonIdPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof value === 'number') {
      value = value.toString();
    }
    return `#${value.padStart(5, '0')}`;
  }
}
