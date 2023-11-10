import { Component } from '@angular/core';
import { Pokemon } from '../module/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pokedex';
  logo = '../assets/pokemon-logo-4-1.png';
  imgProfile = '../assets/profile.png'
  links:string[] = ['Home', 'Pokedex', 'Video Game', 'Card Games', 'Eventos'];

  pokemons: Pokemon[] = [
    new Pokemon(1, 'Pikachu', ['Elétrico'], 'Esse é o Pikachu. ', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png'),
    new Pokemon(2, 'Bulbasaur', ['Grama', 'Veneno'], 'Esse é o Bulbasaur. Há uma semente de planta nas costas desde o dia em que este Pokémon nasceu. A semente cresce lentamente.', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png'),
    new Pokemon(3, 'Ivysaur', ['Phantom', 'Voo'], 'Esse é o Ivysaur', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png'),
    new Pokemon(4, 'Dewgong',['Elétrico',' Água'], 'Esse é o Dewgong','https://assets.pokemon.com/assets/cms2/img/pokedex/full/087.png'),
    new Pokemon(5, 'Geodude', ['Pedra',' Fogo'], 'Esse é o Geodude', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/074.png'),
    new Pokemon(6, 'Horsea',  ['Água', 'Elétrico'], 'Esse é o Horsea', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/116.png'),
    new Pokemon(7, 'Voltorb',['Elétrico'], 'Esse é o Voltorb','https://assets.pokemon.com/assets/cms2/img/pokedex/full/100.png'),
    new Pokemon(8, 'Ekans',  ['Veneno'], 'Esse é o Ekans', 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png'),
    new Pokemon(9, 'Vileplume',['Fogo'], 'Esse é o Vileplume','https://assets.pokemon.com/assets/cms2/img/pokedex/full/045.png'), 
    new Pokemon(10, 'Doduo',[' Elétrico'], 'Esse é o Doduo','https://assets.pokemon.com/assets/cms2/img/pokedex/full/084.png'),
    new Pokemon(11, 'Gengar',['Veneno','Phantom'], 'Esse é o Gengar','https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png'),
    new Pokemon(12, 'Jolteon',['Elétrico'], 'Esse é o Jolteon','https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png'),
    new Pokemon(13, 'Charizard ',['Fogo'], 'Esse é o Charizard ','https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'),
    new Pokemon(14, 'Beedrill ',['Veneno', 'Voo'], 'Esse é o Beedrill','https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png'),
    new Pokemon(15, 'Jigglypuff',['Veneno', 'Fada'], 'Esse é o Jigglypuff','https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png'),
 
 
  ];
  selectedPokemon?: Pokemon;

  showDetails(pokemon: Pokemon){

    this.selectedPokemon = pokemon;
  }

  closeModal(){
    this.selectedPokemon = undefined;
  }

  filterValue: string = '';
filteredPokemons(): Pokemon [] {
  if(!this.filterValue){
    return this.pokemons;
  }
  return this.pokemons.filter(Pokemon => Pokemon.name.toLowerCase().includes(this.filterValue.toLowerCase()));
}
}