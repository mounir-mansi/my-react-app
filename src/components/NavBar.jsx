
function NavBar({ pokemonIndex, setPokemonIndex, totalPokemon }) {
  const handleClickPrecedent = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);
    }
  };

  const handleClickSuivant = () => {
    if (pokemonIndex < totalPokemon - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  };

  return (
    <div>
        <p>{pokemonIndex}</p>
      <button onClick={handleClickPrecedent}>précédent</button>
      <button onClick={handleClickSuivant}>suivant</button>
    </div>
  );
}

export default NavBar;
