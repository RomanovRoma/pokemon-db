import React, { Component } from "react";
import PokemonService from "../../services/pokemon-service";
import Spinner from "../spinner/spinner";
import "./ability-details.css";

class AbilityDetails extends Component {
  pokemonService = new PokemonService();

  state = {
    ability: null,
  };

  updateAbility() {
    const { abilityName } = this.props;
    if (!abilityName) {
      return;
    }

    this.pokemonService.getAbility(abilityName).then((ability) => {
      this.setState({
        ability,
      });
    });
  }

  componentDidMount() {
    this.updateAbility();
  }

  componentDidUpdate(prevProps) {
    if (this.props.abilityName !== prevProps.abilityName) {
      this.updateAbility();
    }
  }

  render() {
    return this.state.ability ? (
      <div className="pokemon-details card">
        <h2>
          <span>Description of ability:</span>
          <div>
            {this.state.ability.name.charAt(0).toUpperCase() +
              this.state.ability.name.slice(1)}
          </div>
        </h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {this.state.ability.effect.map((it, type, array) => {
              return (
                <li className="list-group-item" key={it.effect}>
                  <h3>Language ({it.language.name}):</h3>
                  <span>{it.effect}</span>
                </li>
              );
            })}
          </li>
        </ul>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default AbilityDetails