import React from "react";


class PokemonDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', id: '', pokemon: '', render: false};
    }

    
    componentDidMount(){
      let search = window.location.pathname.split('/');
      this.setState({name: search[2], id: search[3]});
      fetch(`https://pokeapi.co/api/v2/pokemon/${search[2]}/`)
        .then(async response => {
            const data = await response.json();
            this.setState({pokemon: data, render: true});     
        })
        .catch(error => {
            console.log('Error al obtener el pokemon', error);
        });
    }

    componentWillUnmount(){}

    render() {
        let abilidades = [];
        if (this.state.render) {
          abilidades = this.state.pokemon.abilities;
        }
        return (
            <React.Fragment>
            <br/>
            <br/>
            <div className="center">
              <img
                className="d-block mx-auto"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.id}.png`}
              />
              <p><b>Nombre: </b>{this.state.name}</p>
              <p><b>Altura: </b>{this.state.pokemon.height / 10} m</p>
              <p><b>Peso: </b>{this.state.pokemon.weight / 10} kg</p>
              {abilidades.map((ability, index) => {
                  return <p key={index}><b>Habilidad {index+1}: </b>{ability.ability.name}</p>
              })}
            </div>

            </React.Fragment>
        );
    }
}

export default PokemonDetail;
