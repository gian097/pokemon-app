import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule  } from '@angular/common/http';
import { PokemonModule } from './pokemon/pokemon/pokemon.module';
import { PokemonService } from './pokemon/pokemon/services/pokemon.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PokemonModule

  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
