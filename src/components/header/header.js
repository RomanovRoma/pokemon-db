import React from 'react'
import { Link } from 'react-router-dom'
import PokemonSearchPage from '../pages/pokemon-search-page'
import './header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <Link to="/pokemon-db/">
        <div className="logo" href="#">
          Pokemon DB
        </div>
        <div>Click on the link "Pokemon DB" to get a list of Pokemon</div>
      </Link>
      <PokemonSearchPage />
    </div>
  );
}

export default Header