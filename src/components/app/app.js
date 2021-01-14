import React from 'react'

import Header from '../header'
import PokemonList from '../pokemon-list'
import PokemonDetails from '../pokemon-details'

import './app.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className="row mb2">
        <div className="col-md-6">
          <PokemonList />
        </div>
        <div className="col-md-6">
          <PokemonDetails />
        </div>
      </div>
    </div>
  )
}

export default App