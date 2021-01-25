const initialState = {
  pokemons: [],
  loading: true
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ALL_POKEMONS_SUCCESS':
      return {
        pokemons: action.payload,
        loading: false
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