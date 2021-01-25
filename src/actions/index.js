
const fetchAllPokemonsSuccess = (newPokemons) => {
  return {
    type: 'FETCH_ALL_POKEMONS_SUCCESS',
    payload: newPokemons
  }
}

const fetchPokemonSuccess = (newPokemon) => {
  return {
    type: 'FETCH_POKEMON_SUCCESS',
    payload: newPokemon
  }
}

export {
  fetchAllPokemonsSuccess,
  fetchPokemonSuccess
}