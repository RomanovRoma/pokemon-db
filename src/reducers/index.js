import updatePokemonList from './pokemon-list'

const reducer = (state, action) => {

  return {
    pokemonList: updatePokemonList(state, action)
  }
}

export default reducer