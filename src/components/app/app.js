import React from 'react'
import { withPokemonService } from '../hoc'

import Header from '../header'
// import PokemonList from '../pokemon-list'
// import PokemonDetails from '../pokemon-details'

import './app.css'

const App = ({pokemonService}) => {

  // state ={
  //   selectedPokemon: null,
  //   selectedAbility: 5
  // }

  // onPokemonSelected = (id) => {
  //   this.setState({
  //     selectedPokemon: id
  //   })
  // }

  // render() {
    console.log(pokemonService.getAllPokemons())
    return (
      <div>
        <Header />
        <div className="row mb2">
          <div className="col-md-6">
            {/* <PokemonList onItemSelected={this.onPokemonSelected} /> */}
          </div>
          <div className="col-md-6">
            {/* <PokemonDetails pokemonId={this.state.selectedPokemon} /> */}
          </div>
        </div>
      </div>
    );
  // }
}

export default withPokemonService()(App)