import React from 'react';
import axios from 'axios';
import PokemonPreview from './PokemonPreview';

class MapAll extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showList : false,
            data : []
    }
    this.modal = this.modal.bind(this);
    this.renderResult = this.renderResult.bind(this);
}

    componentDidMount() {
      var url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
        axios.get(url).then((response) => {
            this.setState({data : response.data.pokemon});
        });
    }

    modal() {
            this.setState({ showList: !this.state.showList,});
            console.log({ showList: !this.state.showList,})
        };

    renderResult() {
        return this.state.data.map((e, i) => {
            return (<PokemonPreview
                        key={i}
                        name={e.name}
                        img={e.img}
                        evolutionsPro={e.next_evolution ? e.next_evolution.map((element) => {return element.name + " "}) : "Aucune" }
                        evolutionsPre={e.prev_evolution ? e.prev_evolution.map((element) => {return element.name + " "}) : "Aucune" }
                        faiblesses={e.weaknesses.map((element) => {return element + " "})}
                    />)
            })
        }

    render() {

        let resultAll = this.renderResult();

        return (
            <div className="mapAll">
                <button className="btn" onClick={this.modal}>Voir tous les pokémons</button>
                    <div>{this.state.showList ? resultAll : null }</div>
            </div>

        );
    }
}
export default MapAll;
