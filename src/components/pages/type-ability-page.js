import React from "react";
import TypeDetails from "../type-details";
import { withRouter } from "react-router-dom";

const TypeAbilityPage = (props) => {
  return (
    <div className="col-md-6">
      <TypeDetails
        typeName={props.typeName}
        onPokemonSelected={(pokemonName) => {
          props.history.push(`/pokemon/${pokemonName}`);
        }}
      />
    </div>
  );
};

export default withRouter(TypeAbilityPage);
