import React from 'react';
import { Link } from 'react-router';

export default class PokemonPreview extends React.Component {
  render() {
    return (
      <Link to={`/pokemon/${this.props.id}`}>
      <h1>{this.props.name}</h1>
          <img src={this.props.img}/>
          <p> Prochaines evolutions : {this.props.evolutionsPro}</p>
          <p> Prochaines précédentes : {this.props.evolutionsPre}</p>

          <p> faiblesses : {this.props.faiblesses}</p>
      </Link>
    );
  }
}
