import React from "react";
import "./pokemon-list-item.css";

const PokemonListItem = ({ pokemon }) => {
  const { id, name } = pokemon;
  const numToStr = String(id);
  let newId;
  if (numToStr.length === 1) {
    newId = "00" + numToStr;
  } else if (numToStr.length === 2) {
    newId = "0" + numToStr;
  } else {
    newId = numToStr;
  }
  return (
    <div className="pokemon-list-item">
      <div className="pokemon-img">
        <img
          className="pokemon-image"
          src={`https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${newId}.png`}
          alt={name}
        />
      </div>
      <div className="pokemon-details">
        <div className="pokemon-name">
          <h2>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
        </div>
      </div>
    </div>
  );
};

export default PokemonListItem;
