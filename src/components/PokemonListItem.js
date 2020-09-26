import React from "react";
import {Link} from 'react-router-dom';


const PokemonListItem = ({ id, name }) => {


  const addFavorito = () => {
    let _ = require('underscore');
    let arreglofav = localStorage.getItem('favoritos');
    if (arreglofav) {
      var arregloStorage = JSON.parse(arreglofav)
      var respuesta = _.where(arregloStorage, {id: id, name: name});
      if (respuesta.length == 0) {
        let obj = {
          id: id,
          name: name
        }
        arregloStorage.push(obj);
        localStorage.setItem('favoritos', JSON.stringify(arregloStorage));
        alert("Agregado en favoritos :)");
      } else {
        alert("Ya existe en favoritos");
      }
    } else {
      let obj = {
        id: id,
        name: name
      }
      let arr = [];
      arr.push(obj);
      localStorage.setItem('favoritos', JSON.stringify(arr));
    }
  };

  return (
    <>
      
      <div className="column">
        <div className="card">
          <div className="centerstar">
          <span className="fa fa-star" onClick={addFavorito}></span>
          </div>
          <Link to={`/pokemon/${name}/${id}`}>
          <img
            className="d-block mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt={name}
          />
          <p>{name}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PokemonListItem;
