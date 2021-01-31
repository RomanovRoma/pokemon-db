import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage, PokemonPage } from '../pages'

import Header from '../header'
// import PokemonList from '../pokemon-list'
// import PokemonDetails from '../pokemon-details'
import AbilityDetails from '../ability-details'

import './app.css'

const App = () => {
  return (
    <main role="main" className="container">
      <Header />
      <div className="row mb2">
        <Switch>
          <Route path="/pokemon-db/" component={HomePage} exact />
          <Route
            path="/pokemon/:name"
            render={({ match }) => {
              const { name } = match.params;
              return <PokemonPage pokemonName={name} />;
            }}
          />
          <Route
            path="/ability/:ability"
            render={({ match }) => {
              const { ability } = match.params;
              return <AbilityDetails abilityName={ability} />;
            }}
          />
        </Switch>
      </div>
    </main>
  );
}

export default App