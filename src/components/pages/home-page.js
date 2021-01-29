import React from 'react'
import PokemonList from '../pokemon-list/pokemon-list'
import { withRouter } from 'react-router-dom'

const HomePage = ({history}) => {
  return (
    <div className="col-md-6">
      <PokemonList
        onPokemonSelected={(pokemonName) => {
          history.push(`/${pokemonName}`);
        }} />
    </div>
  );
}

export default withRouter(HomePage)