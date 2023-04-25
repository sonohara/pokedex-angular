import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, forkJoin } from 'rxjs';
import { PokemonService, Pokemon, NamedAPIResource } from '@sonohara/pokeapi-typescript-angular';
import { BgmComponent } from 'src/app/shared/bgm/bgm.component';
import { MatSelectChange } from '@angular/material/select';

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
  sorts = [
    {
      value: 0,
      label: 'Lowest Number (First)',
    },
    {
      value: 1,
      label: 'Highest Number (First)',
    },
    {
      value: 2,
      label: 'A-Z',
    },
    {
      value: 3,
      label: 'Z-A',
    },
  ];
  selectedSort = this.sorts[0].value;

  constructor(private pokemonService: PokemonService, private fb: FormBuilder, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchPokemons(this.state$.value.pagination.page);
    this.snackBar.openFromComponent(BgmComponent);
  }

  fetchPokemons(page: number, limit = 20, sorter = sorters[0]) {
    this.pokemonService.getPokemons(9999, 0).subscribe((response) => {
      forkJoin([
        ...response.results
          .map((resource, i) => {
            return { id: i, ...resource };
          })
          .sort(sorter)
          .slice(limit * (page - 1), limit * page)
          .map((resource) => {
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

  sort(change: MatSelectChange) {
    console.log(this.selectedSort);
    this.state$.next({
      ...this.state$.value,
      pokemons: [],
    });
    this.fetchPokemons(1, 20, sorters[change.value]);
  }
}

type PokemonListResource = NamedAPIResource & { id: number };

const sorters: Record<number, (a: PokemonListResource, b: PokemonListResource) => number> = {
  0: (a: PokemonListResource, b: PokemonListResource) => a.id - b.id,
  1: (a: PokemonListResource, b: PokemonListResource) => b.id - a.id,
  2: (a: PokemonListResource, b: PokemonListResource) => (a.name ?? '').localeCompare(b.name ?? ''),
  3: (a: PokemonListResource, b: PokemonListResource) => (b.name ?? '').localeCompare(a.name ?? ''),
};
