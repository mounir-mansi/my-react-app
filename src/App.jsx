import PokemonCard from './components/PokemonCard';
import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';

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

  const [pokemonIndex, setPokemonIndex] = useState(0);
  useEffect(
    () => {
      console.log("hello pokemon trainer :)");
    },
    []
  );
  
  return (
    <div>
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <div className="App">
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
    </div>
  );
  }

export default App;
