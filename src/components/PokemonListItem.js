import React from "react";

const PokemonListItem = ({ id, name }) => {
  return (
    <>
      <div className="column">
        <div className="card">
          <img
            className="d-block mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
          <p>{name}</p>
        </div>
      </div>
    </>
  );
};

export default PokemonListItem;
