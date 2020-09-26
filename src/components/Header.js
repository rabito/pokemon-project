import React from "react";
import pokemon from '../pokemon.png';

class Header extends React.Component {
    constructor(props) {
        super(props); 
    }

    componentDidMount(){}

    componentWillUnmount(){}

    menu = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav2") {
            x.className += " responsive";
        } else {
            x.className = "topnav2";
        }
    }

    render() {
        return (
            <React.Fragment>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="topnav1">
                <img className="pokemon-img" src={pokemon} />
                <p style={{float:"right"}}><small><strong>Raúl Batres</strong></small></p>
            </div>
            <div className="topnav2" id="myTopnav">
                <a href="#home" className="active">POKEMONS</a>
                <a href="#news">FAVORITOS</a>
                <a href="#" className="icon" onClick={this.menu}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>
            </React.Fragment>
        );
    }
}

export default Header;