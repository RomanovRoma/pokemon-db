import React, { Component } from 'react'
import { connect } from 'react-redux'

import PokemonListItem from '../pokemon-list-item'
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator";

import { withPokemonService } from '../hoc'
import { fetchAllPokemons } from "../../actions";
import { compose } from '../../utils'
import './pokemon-list.css'

class PokemonList extends Component {

  componentDidMount() {
    this.props.fetchAllPokemons()
  }

  render() {

    const { pokemons, loading, error } = this.props

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    return (
      <ul className="item-list list-group">
        <span className="item-list list-group">Select a pokemon from list</span>
        {pokemons.map((pokemon) => {
          return (
            <li
              className="list-group-item"
              key={pokemon.name}
              onClick={() => this.props.onPokemonSelected(pokemon.name)}
            >
              <PokemonListItem
                pokemon={pokemon}
                // onClick={() => this.props.onPokemonSelected(pokemon.name)}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ pokemonList: {pokemons, loading, error} }) => {
  return { pokemons, loading, error }
}

const mapDispatchToProps = (dispatch, {pokemonService}) => {
  return {
    fetchAllPokemons: fetchAllPokemons(pokemonService, dispatch)
  }
}

export default compose(
  withPokemonService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonList)