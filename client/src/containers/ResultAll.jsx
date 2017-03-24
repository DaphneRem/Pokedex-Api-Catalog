import React, { Component } from 'react';
import axios from 'axios';

import pokemons from '../data/data.js';



class ResultAll extends Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     evolutions : []
    }
// }
//     componentDidMount() {
//       var url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
//         axios.get(url).then((response) => {
//             this.setState({evolutions : response.data.pokemon.next_evolution});
//             console.log({evolutions : response.data.pokemon.next_evolution});
//         });
//     }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         colorStands : "green",
    //         colorBikes : "white",
    //         showComponent: false
    //     }
    //     this.miniModal = this.miniModal.bind(this);
    // }
    //
    //     componentWillMount() { // se lance juste avant que le render() soit lancé
    //         if ((this.props.availableStands === 0) && (this.props.availableBikes === 0)) {
    //             return this.setState({colorStands : "red", colorBikes : "red"});
    //         }
    //         if (this.props.availableStands === 0) {
    //             return this.setState({ colorStands : "red" }); // devient rouge quand aucun stand n'est disponible
    //         }
    //         if (this.props.availableBikes === 0) { // devient rouge quand aucun vélo n'est disponible
    //                 return this.setState({ colorBikes : "red" });
    //         }
    //     };
    //     miniModal() {
    //         console.log(this.state.display);
    //         this.setState({ showComponent: !this.state.showComponent,});
    //     };
    //

  render() {

    return (
        <div className="ResultAll">
            <h1>{this.props.name}</h1>
            <img src={this.props.img}/>
            <p> Prochaines evolutions : {this.props.evolutionsPro}</p>
            <p> Prochaines précédentes : {this.props.evolutionsPre}</p>

            <p> faiblesses : {this.props.faiblesses}</p>
        </div>
    );
  }
}

export default ResultAll;
