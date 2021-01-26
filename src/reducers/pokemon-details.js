const updatePokemonDetails = (state, action) => {
  if (state === undefined) {
    return {
      pokemon: {},
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_POKEMON_REQUEST":
      return {
        pokemon: {},
        loading: true,
        error: null,
      };
    case "FETCH_POKEMON_SUCCESS":
      return {
        pokemon: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_POKEMON_FAILURE":
      return {
        pokemon: {},
        loading: false,
        error: action.payload,
      };

    default:
      return state.pokemonDetails;
  }
};

export default updatePokemonDetails
