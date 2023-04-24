import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDatailComponent } from './pokemon-datail/pokemon-datail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PokemonListComponent, PokemonDatailComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    PokemonsRoutingModule,
    SharedModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatExpansionModule,
  ],
})
export class PokemonsModule {}
