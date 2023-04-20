import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pokemons',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [PagesRoutingModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
