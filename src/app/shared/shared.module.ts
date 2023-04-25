import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { IdPipe } from './id.pipe';
import { BgmComponent } from './bgm/bgm.component';

@NgModule({
  declarations: [PokemonTypeComponent, IdPipe, BgmComponent],
  imports: [CommonModule, MatIconModule, MatSelectModule, MatSliderModule, MatButtonModule],
  exports: [PokemonTypeComponent, BgmComponent, IdPipe],
})
export class SharedModule {}
