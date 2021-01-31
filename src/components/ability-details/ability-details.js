import React, { Component } from "react";
import PokemonService from "../../services/pokemon-service";
import Spinner from "../spinner/spinner";
import "./ability-details.css";

class AbilityDetails extends Component {
  debugger;
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
        <h4>
          {this.state.ability.name.charAt(0).toUpperCase() +
            this.state.ability.name.slice(1)}
        </h4>
      </div>
    ) : (
      <Spinner />
    );
  }
}

export default AbilityDetails

{/* <div className="pokemon-details card"> */}
  //        <img
  //         className="pokemon-image"
  //         src={`https://pokeres.bastionbot.org/images/pokemon/${this.state.pokemon.id}.png`}
  //         alt={
  //           this.state.pokemon.name.charAt(0).toUpperCase() +
  //           this.state.pokemon.name.slice(1)
  //         }
  //       />

  //       <div className="card-body">
  //         <h4>
  //           {this.state.pokemon.name.charAt(0).toUpperCase() +
  //             this.state.pokemon.name.slice(1)}
  //         </h4>
  //         <ul className="list-group list-group-flush">
  //           <li className="list-group-item">
  //             <span className="term">Base Experience</span>
  //             <span>{this.state.pokemon.experience}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Height</span>
  //             <span>{this.state.pokemon.height}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Weight</span>
  //             <span>{this.state.pokemon.weight}</span>
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Types</span>
  //             {this.state.pokemon.types.map((it, index, array) => {
  //               return (
  //                 <span key={it.type.name}>
  //                   {index !== array.length - 1
  //                     ? `${it.type.name}, `
  //                     : `${it.type.name}`}
  //                 </span>
  //               );
  //             })}
  //           </li>
  //           <li className="list-group-item">
  //             <span className="term">Abilities</span>
  //             {this.state.pokemon.abilities.map((it, type, array) => {
  //               return (
  //                 <li className="list-group-item" key={it.ability.name}>
  //                   <span>{it.ability.name}</span>
  //                 </li>
  //               );
  //             })}
  //           </li>
  //         </ul>
  //       </div>
//       </div>
//     ) : (
//       <Spinner />
//     );