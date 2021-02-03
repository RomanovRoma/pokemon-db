import React from "react";
import PokemonSearch from "../pokemon-search";
import { withRouter } from "react-router-dom";


const PokemonSearchPage = (props) => {
  return (
    <div className="col-md-6">
      <PokemonSearch
        typeName={props.typeName}
        onPokemonSelected={(pokemonName) => {
          props.history.push(`/pokemon/${pokemonName}`);
        }}
      />
    </div>
  );
};

export default withRouter(PokemonSearchPage);
