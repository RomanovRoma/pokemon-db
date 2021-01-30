import React from 'react'
import PokemonDetails from '../pokemon-details'

const PokemonPage = (props, {history}) => {
  return (
    <div className="col-md-6">
      <PokemonDetails
        pokemonName={props.pokemonName}
        onAbilitySelected={(abilityName) => {
          history.push(`/${abilityName}`)
        }}
      />
    </div>
  );
}

export default PokemonPage