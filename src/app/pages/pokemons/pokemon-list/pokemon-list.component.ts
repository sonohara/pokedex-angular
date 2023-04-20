import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { PokemonService, ResourceList, Pokemon } from '@sonohara/pokeapi-typescript-angular';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pageList?: ResourceList;
  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((response) => {
      this.pageList = response;
      forkJoin([
        ...response.results.map((resource) => {
          return this.pokemonService.getPokemonById(resource.name ?? '');
        }),
      ]).subscribe((pokemons) => {
        this.pokemons = pokemons;
      });
    });
  }
}
