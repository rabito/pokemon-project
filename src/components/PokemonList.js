import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadPokemonList, displayMorePokemon, pokemonListFilterSelector, pokemonListCount, pokemonListTotal } from "../redux/modules/pokemonList";
import PokemonListItem from "./PokemonListItem";
const _ = require('underscore');

const PokemonList = props => {
  let {
    fetchActionCreator,
    displayMore,
    isLoading,
    error,
    pokemonList,
    totalPokemonCount,
    pokemonListTotal
  } = props;

  const [buscar, setBuscar] = useState(false);
  const [pokefind, setPokefind] = useState([]);

  useEffect(() => {
    fetchActionCreator();
  }, [fetchActionCreator]);

  const handleScroll = event => {
    const element = event.target;
    if ((element.scrollHeight - element.scrollTop === element.clientHeight) && totalPokemonCount > pokemonList.length) {
      displayMore();
    }
  };

  let buscador = () => {
    let p = document.getElementById("search").value;
    if (p == "") {
      setBuscar(false);
    } else {
      if (p.length > 2) {
        var out = _.filter(pokemonListTotal, function(item) { 
          return item.name.indexOf(p) != -1; 
        });
        setPokefind(out)
        setBuscar(true);
      } else {
        alert("La busqueda debe contener al menos 3 caracteres");
      }
    }
  }

  if (error) return <p>Error</p>;
  return (
      <div className="border m-5">
        <div className="centerstar">
        <input type="text" name="search" id="search" /><button onClick={buscador}>BUSCAR</button>
        </div>
        <div
          className="row"
          onScroll={handleScroll}
          style={{ height: "500px", overflow: "auto" }}
        >
          {
            buscar
            ? pokefind.map((pokemon,index) => { const { id, name } = pokemon; return ( <PokemonListItem id={id} name={name} key={index} /> ); })
            : pokemonList.map((pokemon,index) => { const { id, name } = pokemon; return ( <PokemonListItem id={id} name={name} key={index} /> ); })
      
          }
        </div>
        {isLoading && (
          <div className="text-center">
            <div
              className="spinner-border"
              style={{ width: "4rem", height: "4rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
        <p className="text-muted ml-3">Mostrando {pokemonList.length} pokemon de {totalPokemonCount}</p>
      </div>
    )
  };

const mapStateToProps = state => ({
  isLoading: state.pokemonListReducer.isLoading,
  error: state.pokemonListReducer.error,
  pokemonList: pokemonListFilterSelector(state),
  totalPokemonCount: pokemonListCount(state),
  pokemonListTotal: pokemonListTotal(state)
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchActionCreator: loadPokemonList,
      displayMore: displayMorePokemon,
    },
    dispatch,
  );
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PokemonList);
