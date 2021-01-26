import updatePokemonList from './pokemon-list'
import updatePokemonDetails from './pokemon-details'

const reducer = (state, action) => {

  return {
    pokemonList: updatePokemonList(state, action),
    pokemonDetails: updatePokemonDetails(state, action)
  }
}

export default reducer