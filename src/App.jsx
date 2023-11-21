
import PokemonCard from './components/PokemonCard';
import './App.css';
import { useState } from 'react';

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
    ];
  const [pokemonIndex , setPokemonIndex]=useState(0);
  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);

    }
  }
  const handleClickSuivant = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  return (<div>
    <p>{pokemonIndex}</p>
    <button onClick={handleClickPrecedent}>précédent</button>
    <button onClick={handleClickSuivant}>suivant</button>
    <div className="App">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  </div>);
}

export default App;
