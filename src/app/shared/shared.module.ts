import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { IdPipe } from './id.pipe';

@NgModule({
  declarations: [PokemonTypeComponent, IdPipe],
  imports: [CommonModule],
  exports: [PokemonTypeComponent, IdPipe],
})
export class SharedModule {}
