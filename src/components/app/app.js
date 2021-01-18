import React, { Component } from 'react'

import Header from '../header'
import PokemonList from '../pokemon-list'
import PokemonDetails from '../pokemon-details'

import './app.css'

export default class App extends Component {

  state ={
    selectedPokemon: 5
  }

  onPokemonSelected = (id) => {
    this.setState({
      selectedPokemon: id
    })
  }

  render() {
    return (
      <div>
        <Header />
        <div className="row mb2">
          <div className="col-md-6">
            <PokemonList onItemSelected={this.onPokemonSelected} />
          </div>
          <div className="col-md-6">
            <PokemonDetails pokemonId={this.state.selectedPokemon} />
          </div>
        </div>
      </div>
    );
  }
}