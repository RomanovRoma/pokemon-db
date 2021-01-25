import React, { Component } from 'react'
import Spinner from '../spinner/spinner';
import { connect } from 'react-redux'
import PokemonListItem from '../pokemon-list-item'

import { withPokemonService } from '../hoc'
import { fetchAllPokemonsSuccess } from '../../actions'
import { compose } from '../../utils'

import './pokemon-list.css'

class PokemonList extends Component {

  // pokemonService = new PokemonService()

  // state = {
  //   pokemonList: null
  // }

  componentDidMount() {
    const { pokemonService, fetchAllPokemonsSuccess } = this.props
    pokemonService.getAllPokemons()
      .then((data) => fetchAllPokemonsSuccess(data))

    // this.pokemonService
    //   .getAllPokemons()
    //   .then((pokemonList) => {
    //     this.setState({
    //       pokemonList
    //     })
    //   })
  }

  // renderItems(arr) {
  //   return arr.map(({id, name}) => {
  //     const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
  //     return (
  //       <div
  //         className="list-group-item"
  //         key={nameCapitalized}
  //         onClick={() => this.props.onItemSelected(name)}
  //       >
  //         {nameCapitalized}
  //         <img
  //           className="pokemon-image"
  //           src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
  //           alt={nameCapitalized}
  //         />
  //       </div>
  //     );
  //   })
  // }

  render() {

    // const { pokemonList } = this.state

    // if (!pokemonList) {
    //   return <Spinner />
    // }

    // const items = this.renderItems(pokemonList)
    const { pokemons } = this.props
    return (
      <ul className="pokemon-list">
        {
          pokemons.map((pokemon) => {
            return (
              <li key={pokemon.name}><PokemonListItem pokemon={pokemon}/></li>
            )
          })
        }
      </ul>
      // <div className="item-list list-group">
      //   {items}
      // </div>
    );
  }
}

const mapStateToProps = ({ pokemons }) => {
  return { pokemons }
}

const mapDispatchToProps = {
  fetchAllPokemonsSuccess
}

export default compose(
  withPokemonService(),
  connect(mapStateToProps, mapDispatchToProps)
)(PokemonList)