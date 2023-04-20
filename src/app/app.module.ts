import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiModule } from '@sonohara/pokeapi-typescript-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    PagesModule,
    ApiModule,
    // make sure to import the HttpClientModule in the AppModule only,
    // see https://github.com/angular/angular/issues/20575
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
