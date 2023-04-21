import { Component, Input } from '@angular/core';
import { PokemonType } from 'src/app/pages/pokemons/pokemons.model';

@Component({
  selector: 'app-pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss'],
})
export class PokemonTypeComponent {
  @Input() type: PokemonType = 'unknown';
}
