import React, { Component } from 'react'

import './pokemon-list.css'

export default class PokemonList extends Component {

  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">bulbasaur</li>
        <li className="list-group-item">ivysaur</li>
        <li className="list-group-item">venusaur</li>
        <li className="list-group-item">charmander</li>
        <li className="list-group-item">charmeleon</li>
        <li className="list-group-item">charizard</li>
        <li className="list-group-item">squirtle</li>
        <li className="list-group-item">wartortle</li>
        <li className="list-group-item">blastoise</li>
        <li className="list-group-item">caterpie</li>
        <li className="list-group-item">metapod</li>
        <li className="list-group-item">butterfree</li>
      </ul>
    );
  }
}