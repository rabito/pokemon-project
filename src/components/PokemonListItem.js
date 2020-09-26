import React from "react";
import {Link} from 'react-router-dom';

const PokemonListItem = ({ id, name }) => {
  return (
    <>
      <Link to={`/pokemon/${name}/${id}`}>
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
      </Link>
    </>
  );
};

export default PokemonListItem;
