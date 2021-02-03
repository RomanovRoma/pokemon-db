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
        <input
          id="input-field"
          type="text"
          pokemon={value}
          onChange={onChange}
        />
        <button
          id="search-button"
          type="button"
          onClick={() => props.onPokemonSelected(value)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Main.propTypes = {};

export default Main;
