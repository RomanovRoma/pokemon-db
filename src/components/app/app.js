import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { HomePage, PokemonPage } from '../pages'

import Header from '../header'
import AbilityDetails from '../ability-details'
import TypeDetails from "../type-details";

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
          <Route
            path="/type/:type"
            render={({ match }) => {
              const { type } = match.params;
              return <TypeDetails typeName={type} />;
            }}
          />
        </Switch>
      </div>
    </main>
  );
}

export default App