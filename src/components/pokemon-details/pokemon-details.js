import React, { Component } from 'react'

import './pokemon-details.css'

export default class PokemonDetails extends Component {

  render() {
    return (
      <div className="pokemon-details card">
        <img
          className="pokemon-image"
          src="https://pokeres.bastionbot.org/images/pokemon/5.png"
        />

        <div className="card-body">
          <h4>Charmeleon</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Base Experience</span>
              <span> 142</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span> 11</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span> 190</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}