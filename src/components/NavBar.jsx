import PropTypes from "prop-types";

function NavBar({ pokemonList, setPokemonIndex }) {
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <div>
      {pokemonList.map((pokemon, index) => (
        <button key={pokemon.name} onClick={() => handlePokemonClick(index)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
NavBar.propTypes = {
    pokemonList: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ),
    setPokemonIndex: PropTypes.func.isRequired
  };
  

export default NavBar;
