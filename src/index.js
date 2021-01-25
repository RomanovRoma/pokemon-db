import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from "./components/app";
import ErrorBoundry from './components/error-boundry'
import PokemonService from './services/pokemon-service'
import { PokemonServiceProvider } from './components/pokemon-service-context'
import store from './store'

const pokemonService = new PokemonService()



ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <PokemonServiceProvider value={pokemonService}>
        <Router>
          <App />
        </Router>
      </PokemonServiceProvider>
    </ErrorBoundry>
  </Provider>
  , document.getElementById("root"));