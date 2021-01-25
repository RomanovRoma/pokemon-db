import React, { Component } from 'react'
import PokemonService from '../../services/pokemon-service';
import Spinner from '../spinner/spinner';

import './pokemon-list.css'

export default class PokemonList extends Component {

  pokemonService = new PokemonService()

  state = {
    pokemonList: null
  }

  componentDidMount() {
    this.pokemonService
      .getAllPokemons()
      .then((pokemonList) => {
        this.setState({
          pokemonList
        })
      })
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <div
          className="list-group-item"
          key={nameCapitalized}
          onClick={() => this.props.onItemSelected(name)}
        >
          {nameCapitalized}
          <img
            className="pokemon-image"
            src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            alt={nameCapitalized}
          />
        </div>
      );
    })
  }

  render() {

    const { pokemonList } = this.state

    if (!pokemonList) {
      return <Spinner />
    }

    const items = this.renderItems(pokemonList)

    return (
      <div className="item-list list-group">
        {items}
      </div>
    );
  }
}