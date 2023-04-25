import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectChange } from '@angular/material/select';
import { BehaviorSubject, combineLatest, forkJoin, map } from 'rxjs';
import { PokemonService, Pokemon, NamedAPIResource } from '@sonohara/pokeapi-typescript-angular';
import { BgmComponent } from 'src/app/shared/bgm/bgm.component';
import { LoadingService } from 'src/app/shared/loading/loading.service';

type PokemonsState = {
  pokemons: Pokemon[];
};

const PokemonsStateInitial: PokemonsState = {
  pokemons: [],
};

type PokemonListResource = NamedAPIResource & { id: number };

const sorters: Record<number, (a: PokemonListResource, b: PokemonListResource) => number> = {
  0: (a: PokemonListResource, b: PokemonListResource) => a.id - b.id,
  1: (a: PokemonListResource, b: PokemonListResource) => b.id - a.id,
  2: (a: PokemonListResource, b: PokemonListResource) => (a.name ?? '').localeCompare(b.name ?? ''),
  3: (a: PokemonListResource, b: PokemonListResource) => (b.name ?? '').localeCompare(a.name ?? ''),
};

type PaginatorState = {
  page: number;
  perpage: number;
  sorter: (a: PokemonListResource, b: PokemonListResource) => number;
  filter: (p: PokemonListResource) => boolean;
};

const PaginatorStateInitial = {
  page: 1,
  perpage: 20,
  sorter: sorters[0],
  filter: () => true,
};

type SearchForm = {
  idOrName: string;
};

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  readonly pokemons$ = new BehaviorSubject<PokemonsState>(PokemonsStateInitial);
  readonly paginator$ = new BehaviorSubject<PaginatorState>(PaginatorStateInitial);
  readonly state$ = combineLatest({ paginator: this.paginator$, pokemons: this.pokemons$ });
  pokemonResources: PokemonListResource[] = [];
  searchForm = this.fb.group<SearchForm>({
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

  constructor(
    private pokemonService: PokemonService,
    private loadingService: LoadingService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.paginator$.subscribe((paginator) => {
      this.loadingService.start();
      forkJoin([
        ...this.pokemonResources
          .sort(paginator.sorter)
          .filter(paginator.filter)
          .slice(paginator.perpage * (paginator.page - 1), paginator.perpage * paginator.page)
          .map((resource) => {
            return this.pokemonService.getPokemonById(resource.name ?? '');
          }),
      ]).subscribe((pokemons) => {
        this.pokemons$.next({
          pokemons: [...this.pokemons$.value.pokemons, ...pokemons],
        });
        this.loadingService.finish();
      });
    });
  }

  ngOnInit(): void {
    this.loadingService.start();
    this.pokemonService
      .getPokemons(9999, 0)
      .pipe(
        map((response) => {
          return [
            ...response.results.map((resource, index) => {
              return { id: index + 1, ...resource };
            }),
          ];
        })
      )
      .subscribe((resources) => {
        this.pokemonResources = resources;
        this.paginate(1);
      });
    this.snackBar.openFromComponent(BgmComponent);
  }

  paginate(page: number) {
    this.paginator$.next({
      ...this.paginator$.value,
      page: page,
    });
  }

  search() {
    this.pokemons$.next({ pokemons: [] });
    this.paginator$.next({
      ...this.paginator$.value,
      page: 1,
      filter: this.searchForm.value.idOrName
        ? (p) =>
            p.name.includes(this.searchForm.value.idOrName ?? '') ||
            p.id.toLocaleString().includes(this.searchForm.value.idOrName ?? '0')
        : this.paginator$.value.filter,
    });
  }

  shuffle() {
    this.pokemons$.next({ pokemons: [] });
    this.paginator$.next({
      ...this.paginator$.value,
      page: 1,
      sorter: () => Math.random() - 0.5,
    });
  }

  sort(change: MatSelectChange) {
    this.pokemons$.next({ pokemons: [] });
    this.paginator$.next({
      ...this.paginator$.value,
      page: 1,
      sorter: sorters[change.value],
    });
  }
}
