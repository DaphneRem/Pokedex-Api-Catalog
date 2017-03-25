import React, { Component } from 'react';
import axios from 'axios';

import pokemons from '../data/data.js';



class ResultAll extends Component {

    constructor(props) {
        super(props);

    }

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
