
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

const fetchAllPokemons = (pokemonService, dispatch) => () => {
  dispatch(fetchAllPokemonsRequest());
  pokemonService
    .getAllPokemons()
    .then((data) => dispatch(fetchAllPokemonsSuccess(data)))
    .catch((err) => dispatch(fetchAllPokemonsFailure(err)));
};


const fetchPokemonSuccess = (newPokemon) => {
  return {
    type: "FETCH_POKEMON_SUCCESS",
    payload: newPokemon,
  };
};

const fetchPokemonRequest = () => {
  return {
    type: "FETCH_POKEMON_REQUEST",
  };
};

const fetchPokemonFailure = (error) => {
  return {
    type: "FETCH_POKEMON_FAILURE",
    payload: error,
  };
};

const fetchPokemon = (pokemonService, dispatch) => () => {
  dispatch(fetchPokemonRequest())
    if (!pokemonId) {
      return
    }
    pokemonService.getPokemon(pokemonId)
      .then((data) => dispatch(fetchPokemonSuccess(data)))
      .catch((err) => dispatch(fetchPokemonFailure(err)));
};

export {
  fetchAllPokemons,
  fetchPokemon
};