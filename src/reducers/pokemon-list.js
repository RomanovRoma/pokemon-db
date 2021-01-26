const updatePokemonList = (state, action) => {
  if (state === undefined) {
    return {
      pokemons: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_ALL_POKEMONS_REQUEST":
      return {
        pokemons: [],
        loading: true,
        error: null,
      };
    case "FETCH_ALL_POKEMONS_SUCCESS":
      return {
        pokemons: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_ALL_POKEMONS_FAILURE":
      return {
        pokemons: [],
        loading: false,
        error: action.payload,
      };

    default:
      return state.pokemonList;
  }
};

export default updatePokemonList
