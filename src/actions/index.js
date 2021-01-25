
const fetchPokemonsSuccess = (newPokemons) => {
  return {
    type: 'FETCH_POKEMONS_SUCCESS',
    payload: newPokemons
  }
}

export {
  fetchPokemonsSuccess
}