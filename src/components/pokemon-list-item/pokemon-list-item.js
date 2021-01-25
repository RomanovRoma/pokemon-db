import React from 'react'
import './pokemon-list-item.css'

const PokemonListItem = ({ pokemon }) => {
  const { id, name } = pokemon
  return (
    <span>{name}</span>
  )
}

export default PokemonListItem