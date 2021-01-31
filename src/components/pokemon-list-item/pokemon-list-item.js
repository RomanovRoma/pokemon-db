import React from 'react'
import './pokemon-list-item.css'

const PokemonListItem = ({ pokemon }) => {
  const { id, name } = pokemon
  return (
    <div className="pokemon-list-item">
      <div className="pokemon-img">
        <img
          className="pokemon-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={name}
        />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-name">
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </div>
      </div>
    </div>
  );
}

export default PokemonListItem