import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { PokemonService, Pokemon } from '@sonohara/pokeapi-typescript-angular';

type State = {
  pokemons: Pokemon[];
  pagination: {
    count: number;
    page: number;
  };
};

const initialState: State = {
  pokemons: [],
  pagination: {
    count: 0,
    page: 1,
  },
};

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  readonly state$ = new BehaviorSubject<State>(initialState);
  searchForm = this.fb.group({
    idOrName: '',
  });

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.fetchPokemons(this.state$.value.pagination.page);
  }

  fetchPokemons(page: number, limit = 20) {
    this.pokemonService.getPokemons(limit, limit * (page - 1)).subscribe((response) => {
      forkJoin([
        ...response.results.map((resource) => {
          return this.pokemonService.getPokemonById(resource.name ?? '');
        }),
      ]).subscribe((pokemons) => {
        this.state$.next({
          ...this.state$.value,
          pagination: {
            count: response.count,
            page: page,
          },
          pokemons: [...this.state$.value.pokemons, ...pokemons],
        });
      });
    });
  }

  search() {
    console.log(this.searchForm.value);
  }
}
