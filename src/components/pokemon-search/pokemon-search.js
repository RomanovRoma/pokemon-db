import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const PokemonSearch = (props) => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    setValue(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        history.push(`/pokemon/${value}`);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <div>
      <div>
        <div>
          <label className="col-form-label">
            Pokemon's name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="pokemon's name"
            pokemon={value}
            onChange={onChange}
          />
          <button
            id="search-button"
            type="button"
            className="btn btn-primary"
            onClick={() => props.onPokemonSelected(value)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonSearch;
