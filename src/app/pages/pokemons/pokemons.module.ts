import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { DashbordRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonListComponent],
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule, DashbordRoutingModule],
})
export class DashbordModule {}
