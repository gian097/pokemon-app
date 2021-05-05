import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interfaces';
import { PokemonService } from '../services/pokemon.service';


@Component({
  selector: 'app-pokemonlist',
  templateUrl: './pokemonlist.component.html',
  styleUrls: ['./pokemonlist.component.css']
})
export class PokemonlistComponent implements OnInit {
 public pokemons: Pokemon[] = [];
 public page: number = 0;
 public search: string = '';
  constructor(private PokemonService: PokemonService) { }

  ngOnInit(): void {

    this.PokemonService.GetAllPokemons()
      .subscribe(pokemons=>{
        this.pokemons = pokemons;
      });
      
  }

  nextPage(){
this.page += 5;
  }
  prewPage(){
    if (this.page > 0)
    this.page -= 5;
  }

  onSearchPokemon(search:string){
  this.page = 0;
  this.search = search;
  
  }
}
