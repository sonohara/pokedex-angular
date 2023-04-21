import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDatailComponent } from './pokemon-datail/pokemon-datail.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponent,
  },
  {
    path: ':name',
    component: PokemonDatailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashbordRoutingModule {}
