import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { withPokemonService } from '../hoc'
// import { fetchPokemon } from '../../actions'
// import { compose } from '../../utils'
import PokemonService from "../../services/pokemon-service";

// import ErrorIndicator from '../error-indicator/error-indicator'
import Spinner from '../spinner/spinner'
import './pokemon-details.css'

class PokemonDetails extends Component {
  pokemonService = new PokemonService();

  state = {
    pokemon: null,
  };

  updatePokemon() {
    const { pokemonName } = this.props;
    if (!pokemonName) {
      return;
    }

    this.pokemonService.getPokemon(pokemonName).then((pokemon) => {
      this.setState({
        pokemon,
      });
    });
  }

  componentDidMount() {
    this.updatePokemon();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pokemonName !== prevProps.pokemonName) {
      this.updatePokemon();
    }
  }

  // componentDidMount() {
  //   this.props.fetchPokemon();
  // }

  // componentDidUpdate(prevProps) {
  //   if (this.props.pokemonId !== prevProps.pokemonId) {
  //     this.updatePokemon();
  //   }
  // }

  render() {
    // const { pokemon, loading, error } = this.props;

    // if (loading) {
    //   return <Spinner />;
    // }

    // if (error) {
    //   return <ErrorIndicator />;
    // }

    // if (!pokemon) {
    //   return <span>Select a pokemon from list</span>;
    // }

    // const {
    //   id,
    //   name,
    //   experience,
    //   height,
    //   weight,
    //   types,
    //   abilities,
    // } = this.state.pokemon;

    // const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);

    return this.state.pokemon ? (
      <div className="pokemon-details card">
        <img
          className="pokemon-image"
          src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemon.id}.png`}
          alt={
            this.state.pokemon.name.charAt(0).toUpperCase() +
            this.state.pokemon.name.slice(1)
          }
        />

        <div className="card-body">
          <h4>
            {this.state.pokemon.name.charAt(0).toUpperCase() +
              this.state.pokemon.name.slice(1)}
          </h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Base Experience</span>
              <span>{this.state.pokemon.experience}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>{this.state.pokemon.height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span>{this.state.pokemon.weight}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Types</span>
              {this.state.pokemon.types.map((it, index, array) => {
                return (
                  <span key={it.type.name}>
                    {index !== array.length - 1
                      ? `${it.type.name}, `
                      : `${it.type.name}`}
                  </span>
                );
              })}
            </li>
            <li className="list-group-item">
              <span className="term">Abilities</span>
              <ul>
                {this.state.pokemon.abilities.map((it, type, array) => {
                  return (
                    <li className="list-group-item" key={it.ability.name}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() =>
                          this.props.onAbilitySelected(it.ability.name)
                        }
                      >
                        {it.ability.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    ) : (
      <Spinner />
    );
  }
}

// const mapStateToProps = ({ pokemonDetails: { pokemon, loading, error } }) => {
//   return { pokemon, loading, error };
// };

// const mapDispatchToProps = (dispatch, { pokemonService }) => {
//   return {
//     fetchPokemon: fetchPokemon(pokemonService, dispatch),
//   };
// };
// export default compose(
//   withPokemonService(),
//   connect(mapStateToProps, mapDispatchToProps)
// )(PokemonDetails);
export default PokemonDetails