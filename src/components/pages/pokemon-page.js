import React from 'react'
import PokemonDetails from '../pokemon-details'
import { withRouter } from "react-router-dom";

const PokemonPage = (props) => {

  return (
    <div className="col-md-6">
        <PokemonDetails
          pokemonName={props.pokemonName}
          onAbilitySelected={(abilityName) => {
            props.history.push(`/ability/${abilityName}`)
          }}
        />
    </div>
  );
}

export default withRouter(PokemonPage)
