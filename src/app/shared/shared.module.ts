import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component';
import { PokemonIdPipe } from './pokemon-id/pokemon-id.pipe';
import { BgmComponent } from './bgm/bgm.component';
import { LoadingComponent } from './loading/loading.component';
import { OrNoImagePipe } from './or-no-image/or-no-image.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    PokemonTypeComponent,
    PokemonIdPipe,
    BgmComponent,
    LoadingComponent,
    OrNoImagePipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatSliderModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatDialogModule,
  ],
  exports: [
    PokemonTypeComponent,
    BgmComponent,
    PokemonIdPipe,
    LoadingComponent,
    OrNoImagePipe,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
