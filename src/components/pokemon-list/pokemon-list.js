import React, { Component } from 'react'
import PokeService from '../../services/poke-service';
import Spinner from '../spinner/spinner';

import './pokemon-list.css'

export default class PokemonList extends Component {

  pokeService = new PokeService()

  state = {
    pokemonList: null
  }

  componentDidMount() {
    this.pokeService
      .getAllPokemons()
      .then((pokemonList) => {
        this.setState({
          pokemonList
        })
      })
  }

  renderItems(arr) {
    return arr.map(({name}) => {
      const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
      return (
        <li
          className="list-group-item"
          key={nameCapitalized}
          onClick={() => this.props.onItemSelected(name)}
        >
          {nameCapitalized}
        </li>
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
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }
}