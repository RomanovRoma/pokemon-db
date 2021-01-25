import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage, PokemonPage } from '../pages'

import Header from '../header'
// import PokemonList from '../pokemon-list'
// import PokemonDetails from '../pokemon-details'

import './app.css'

const App = () => {

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
    return (
      <main role="main" className="container">
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/pokemon" component={PokemonPage} />
        </Switch>
      </main>
    );
    //   <div>
    //     <Header />
    //     <div className="row mb2">
    //       <div className="col-md-6">
    //         {/* <PokemonList onItemSelected={this.onPokemonSelected} /> */}
    //       </div>
    //       <div className="col-md-6">
    //         {/* <PokemonDetails pokemonId={this.state.selectedPokemon} /> */}
    //       </div>
    //     </div>
    //   </div>
    // );
  // }
}

export default App