const initialState = {
  pokemons: []
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'FETCH_POKEMONS_SUCCESS':
      return {
        pokemons: action.payload
      }
      
    default:
      return state;
  }
}

export default reducer