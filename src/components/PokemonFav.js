import React from "react";
import {Link} from 'react-router-dom';



class PokemonFav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {favoritos: [], render: false};
    }

    
    componentDidMount(){
      let fav = localStorage.getItem('favoritos');
      if (fav) {
          this.setState({favoritos: JSON.parse(fav)});
      }
    }

    removeFavPokemon(pokemon) {
        let _ = require('underscore');
        var arr = _.without(this.state.favoritos, _.findWhere(this.state.favoritos, {
            id: pokemon.id,
            name: pokemon.name
        }));
        localStorage.setItem('favoritos', JSON.stringify(arr))
        this.setState({favoritos: arr});
    }

    componentWillUnmount(){}

    render() {
        return (
            <React.Fragment>
            {this.state.favoritos.map((pokemon,index) => {
                return (
                    <div className="column" key={index}>
                        <div className="card">
                        <div className="centerstar">
                        <span className="fa fa-star checked" onClick={() => this.removeFavPokemon(pokemon)}></span>
                        </div>
                        <Link to={`/pokemon/${pokemon.name}/${pokemon.id}`}>
                        <img
                            className="d-block mx-auto"
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                            alt={pokemon.name}
                        />
                        <p>{pokemon.name}</p>
                        </Link>
                        </div>
                    </div>
                );
            })}
            
            </React.Fragment>
        );
    }
}

export default PokemonFav;
