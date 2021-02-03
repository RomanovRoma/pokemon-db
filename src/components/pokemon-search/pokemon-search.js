import React from "react";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const Main = (props) => {
  const [value, setValue] = useState("");
  const history = useHistory();

  const onChange = (event) => {
    setValue(event.target.value);
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
          <label class="col-form-label" for="input-field">
            Pokemon's name
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="pokemon's name"
            id="input-field"
            pokemon={value}
            onChange={onChange}
          />
          <button
            id="search-button"
            type="button"
            class="btn btn-primary"
            onClick={() => props.onPokemonSelected(value)}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
