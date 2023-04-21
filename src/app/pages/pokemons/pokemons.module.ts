import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDatailComponent } from './pokemon-datail/pokemon-datail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonDatailComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule, PokemonsRoutingModule, SharedModule],
})
export class PokemonsModule {}
