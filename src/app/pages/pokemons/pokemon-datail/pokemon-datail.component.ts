import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Pokemon, PokemonService } from '@sonohara/pokeapi-typescript-angular';

@Component({
  selector: 'app-pokemon-datail',
  templateUrl: './pokemon-datail.component.html',
  styleUrls: ['./pokemon-datail.component.scss'],
})
export class PokemonDatailComponent implements OnInit {
  pokemon$?: Observable<Pokemon>;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap((params) => this.pokemonService.getPokemonById(params.get('name') ?? ''))
    );
  }
}
