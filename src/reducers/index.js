const initialState = {
  pokemons: [],
  loading: true,
  error: null
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_ALL_POKEMONS_REQUEST':
      return {
        pokemons: [],
        loading: true,
        error: null
      }
    case 'FETCH_ALL_POKEMONS_SUCCESS':
      return {
        pokemons: action.payload,
        loading: false,
        error: null
      }
    case 'FETCH_ALL_POKEMONS_FAILURE':
      return {
        pokemons: [],
        loading: false,
        error: action.payload
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