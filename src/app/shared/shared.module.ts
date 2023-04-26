import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonIdPipe } from './pokemon-id/pokemon-id.pipe';
import { BgmComponent } from './bgm/bgm.component';
import { LoadingComponent } from './loading/loading.component';
import { OrNoImagePipe } from './or-no-image/or-no-image.pipe';

@NgModule({
  declarations: [PokemonTypeComponent, PokemonIdPipe, BgmComponent, LoadingComponent, OrNoImagePipe],
  imports: [CommonModule, MatIconModule, MatSelectModule, MatSliderModule, MatButtonModule, MatProgressSpinnerModule],
  exports: [PokemonTypeComponent, BgmComponent, PokemonIdPipe, LoadingComponent, OrNoImagePipe],
})
export class SharedModule {}
