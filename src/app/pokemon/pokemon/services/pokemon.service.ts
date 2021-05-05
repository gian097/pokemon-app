import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { feachAllPokemonsResponse,Pokemon } from '../../interfaces/pokemon.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = 'https://pokeapi.co/api/v2';

  constructor(private http:HttpClient) {  }

  GetAllPokemons():Observable<Pokemon[]>{

    return this.http.get<feachAllPokemonsResponse>(`${this.url}/pokemon?limit=1500`)
      .pipe(
        map(this.TranformSmallPokemonintoPokemon)
      )

  }
  private TranformSmallPokemonintoPokemon(resp:feachAllPokemonsResponse):Pokemon[] {
      
      const pokemonlist:Pokemon[] = resp.results.map(poke =>{

        const urlArr=poke.url.split('/');
        const id = urlArr[6];
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ id }.png`;
        return{
          id,
          pic,
          name:poke.name,
        }
      })
  return pokemonlist;
  }
}
