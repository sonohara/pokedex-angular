import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, switchMap, tap } from 'rxjs';
import {
  Pokemon,
  PokemonService,
  PokemonSpecies,
  EvolutionService,
  PokemonEvolutionChain,
} from '@sonohara/pokeapi-typescript-angular';
import { LoadingService } from 'src/app/shared/loading/loading.service';
import { MatChipSelectionChange } from '@angular/material/chips';

type PokemonDetail = Omit<Pokemon, 'species' | 'evolution_chain'> & {
  species: PokemonSpecies;
  evolution_chain: PokemonEvolutionChain;
};

type State = {
  pokemon: PokemonDetail | null;
  paginate: {
    prev: string;
    next: string;
  };
};

const initialState: State = {
  pokemon: null,
  paginate: {
    prev: '',
    next: '',
  },
};

@Component({
  selector: 'app-pokemon-datail',
  templateUrl: './pokemon-datail.component.html',
  styleUrls: ['./pokemon-datail.component.scss'],
})
export class PokemonDatailComponent implements OnInit {
  state$ = new BehaviorSubject<State>(initialState);

  constructor(
    private route: ActivatedRoute,
    private loadingService: LoadingService,
    private pokemonService: PokemonService,
    private evolutionService: EvolutionService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        tap(() => this.loadingService.start()),
        switchMap((params) => this.pokemonService.getPokemonById(params.get('name') ?? ''))
      )
      .subscribe((pokemon) => {
        this.pokemonService.getPokemons(9999).subscribe((pokemons) => {
          for (let i = 0; i < pokemons.results.length; i++) {
            if (pokemons.results[i].name === pokemon.name) {
              const prev = pokemons.results[i - 1 < 0 ? pokemons.results.length - 1 : i - 1].name;
              const next = pokemons.results[i + 1 >= pokemons.results.length ? 0 : i + 1].name;
              this.state$.next({
                ...this.state$.value,
                ...{ paginate: { next, prev } },
              });
              break;
            }
          }
        });
        this.pokemonService.getPokemonSpeciesById(pokemon.species.name).subscribe((species) => {
          this.evolutionService
            .getEvolutionChainById(Number(species.evolution_chain.url.split('/').at(-2)))
            .subscribe((evolution) => {
              this.state$.next({
                ...this.state$.value,
                pokemon: { ...pokemon, species: species, evolution_chain: evolution },
              });
              this.loadingService.finish();
            });
        });
      });
  }

  selected_flavor_version = 'red';
  selectFlavorText(event: MatChipSelectionChange) {
    this.selected_flavor_version = event.source.value;
  }
}
