
const fetchAllPokemonsSuccess = (newPokemons) => {
  return {
    type: 'FETCH_ALL_POKEMONS_SUCCESS',
    payload: newPokemons
  }
}

const fetchAllPokemonsRequest = () => {
  return {
    type: 'FETCH_ALL_POKEMONS_REQUEST'
  };
}

const fetchAllPokemonsFailure = (error) => {
  return {
    type: "FETCH_ALL_POKEMONS_FAILURE",
    payload: error
  };
}

const fetchPokemonSuccess = (newPokemon) => {
  return {
    type: 'FETCH_POKEMON_SUCCESS',
    payload: newPokemon
  }
}

export {
  fetchAllPokemonsSuccess,
  fetchAllPokemonsRequest,
  fetchAllPokemonsFailure,
  fetchPokemonSuccess,
};