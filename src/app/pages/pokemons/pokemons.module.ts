import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DashbordRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDatailComponent } from './pokemon-datail/pokemon-datail.component';

@NgModule({
  declarations: [PokemonListComponent, PokemonDatailComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule, DashbordRoutingModule],
})
export class DashbordModule {}
