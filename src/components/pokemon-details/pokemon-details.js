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
    pokemon: {
      id: '',
      name: '',
      experience: '',
      height: '',
      weight: '',
      types: [],
      abilities: [],
    },
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

  render() {

    const {id, name, experience, height, weight, types, abilities} = this.state.pokemon;

    const numToStr = String(id);
    let newId;
    if (numToStr.length === 1) {
      newId = "00" + numToStr;
    } else if (numToStr.length === 2) {
      newId = "0" + numToStr;
    } else {
      newId = numToStr;
    }

    return this.state.pokemon ? (
      <div className="pokemon-details card">
        <img
          className="pokemon-image"
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${newId}.png`}
          alt={
            name.charAt(0).toUpperCase() +
            name.slice(1)
          }
        />

        <div className="card-body">
          <h3>
            {name.charAt(0).toUpperCase() +
              name.slice(1)}
          </h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Base Experience</span>
              <span>{experience}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Height</span>
              <span>{height}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Weight</span>
              <span>{weight}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Types</span>
              <ul>
                {types.map((it, index, array) => {
                  return (
                    <li className="list-group-item" key={it.type.name}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.props.onTypeSelected(it.type.name)}
                      >
                        {it.type.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
            <li className="list-group-item">
              <span className="term">Abilities</span>
              <ul>
                {abilities.map((it, type, array) => {
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
export default PokemonDetails