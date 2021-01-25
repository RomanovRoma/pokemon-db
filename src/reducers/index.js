const initialState = {
  pokemons: [],
  pokemon: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ALL_POKEMONS_SUCCESS':
      return {
        pokemons: action.payload
      }
    case 'FETCH_POKEMON_SUCCESS':
      return {
        pokemon: action.payload
      }

    default:
      return state;
  }
}

export default reducer