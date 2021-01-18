import React, { Component } from 'react'
import PokeService from '../../services/poke-service';

import './pokemon-details.css'

export default class PokemonDetails extends Component {
  pokeService = new PokeService();

  state = {
    pokemon: null,
  };

  updatePokemon() {
    const { pokemonId } = this.props;
    if (!pokemonId) {
      return;
    }

    this.pokeService.getPokemon(pokemonId).then((pokemon) => {
      this.setState({
        pokemon,
      });
    });
  }

  componentDidMount() {
    this.updatePokemon();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokemonId !== prevProps.pokemonId) {
      this.updatePokemon();
    }
  }

  render() {
    if (!this.state.pokemon) {
      return <span>Select a pokemon from list</span>;
    }

    const { id, name, experience, height, weight, types } = this.state.pokemon;

    return (
      <div className="pokemon-details card">
        <img
          className="pokemon-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={name}
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Base Experience</span>
              <span>{experience}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span>{weight}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Types</span>
              {types.map((it, index, array) => {
                return (
                  <span key={it.type.name}>
                    {index !== array.length - 1 ? `${it.type.name}, ` : `${it.type.name}` }
                  </span>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}