import React, { Component } from "react";
import PokemonService from "../../services/pokemon-service";
import Spinner from "../spinner/spinner";
import "./type-details.css";

class TypeDetails extends Component {
  pokemonService = new PokemonService();

  state = {
    type: null,
  };

  updateType() {
    const { typeName } = this.props;
    if (!typeName) {
      return;
    }

    this.pokemonService.getType(typeName).then((type) => {
      this.setState({
        type,
      });
    });
  }

  componentDidMount() {
    this.updateType();
  }

  componentDidUpdate(prevProps) {
    if (this.props.typeName !== prevProps.typeName) {
      this.updateType();
    }
  }

  render() {
    return this.state.type ? (
      <div className="pokemon-details card">
        <h2>
          {this.state.type.name.charAt(0).toUpperCase() +
            this.state.type.name.slice(1)}
        </h2>
      <ul className="list-group list-group-flush">
       <li className="list-group-item">
         {this.state.type.pokemon.map((it, type, array) => {
          return (
            <li className="list-group-item" key={it.pokemon.name}>
              <span>
                {it.pokemon.name.charAt(0).toUpperCase() +
                  it.pokemon.name.slice(1)}
              </span>
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

export default TypeDetails;

// return this.state.ability ? (
//   <div className="pokemon-details card">
//     <h2>
//       {this.state.ability.name.charAt(0).toUpperCase() +
//         this.state.ability.name.slice(1)}
//     </h2>
//     <ul className="list-group list-group-flush">
//       <li className="list-group-item">
//         {this.state.ability.effect.map((it, type, array) => {
//           return (
//             <li className="list-group-item" key={it.effect}>
//               <h3>Language {it.language.name}:</h3>
//               <span>{it.effect}</span>
//             </li>
//           );
//         })}
//       </li>
//     </ul>
//   </div>
// ) : (
//   <Spinner />
// );
