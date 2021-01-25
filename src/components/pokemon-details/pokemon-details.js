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

    const { id, name, experience, height, weight, types, abilities } = this.state.pokemon;
    const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    return (
      <div className="pokemon-details card">
        <img
          className="pokemon-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt={nameCapitalized}
        />

        <div className="card-body">
          <h4>{nameCapitalized}</h4>
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
                    {index !== array.length - 1
                      ? `${it.type.name}, `
                      : `${it.type.name}`}
                  </span>
                );
              })}
            </li>
            <li className="list-group-item">
              <span className="term">Abilities</span>
                {abilities.map((it, type, array) => {
                  return (
                    <li className="list-group-item" key={it.ability.name}>
                      <span>{it.ability.name}</span>
                    </li>
                  );
                })}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}