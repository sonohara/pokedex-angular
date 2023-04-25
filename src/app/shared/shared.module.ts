import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { IdPipe } from './id.pipe';
import { BgmComponent } from './bgm/bgm.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [PokemonTypeComponent, IdPipe, BgmComponent, LoadingComponent],
  imports: [CommonModule, MatIconModule, MatSelectModule, MatSliderModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [PokemonTypeComponent, BgmComponent, IdPipe, LoadingComponent],
})
export class SharedModule {}
