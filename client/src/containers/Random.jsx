import React from 'react';
import axios from 'axios';
import ResultAll from './ResultAll.jsx';

class Random extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataRandom : []
    }
    this.shuffle = this.shuffle.bind(this);
    this.renderResult = this.renderResult.bind(this);
}

    shuffle(a) {
        var j = 0;
        var valI = '';
        var valJ = valI;
        var l = a.length - 1;
        while(l > -1) {
		          j = Math.floor(Math.random() * l);
		          valI = a[l];
		          valJ = a[j];
		          a[l] = valJ;
		          a[j] = valI;
                	l = l - 1;
	               }
	      return a;
      }

    componentDidMount() {
        var url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
        axios.get(url).then((response) => {
            this.setState({dataRandom : this.shuffle(response.data.pokemon).slice(0,10)});
            console.log({dataRandom : this.shuffle(response.data.pokemon).slice(0,10)});


     });
    }

    renderResult() {
        return this.state.dataRandom.map((e, i) => {
            return (<ResultAll
                        key={i}
                        name={e.name}
                        img={e.img}
                        evolutionsPro={e.next_evolution ? e.next_evolution.map((element) => {return element.name + " "}) : "Aucune" }
                        evolutionsPre={e.prev_evolution ? e.prev_evolution.map((element) => {return element.name + " "}) : "Aucune" }
                        faiblesses={e.weaknesse ? e.weaknesses.map((element) => {return element + " "}) :  "Aucune" }
                    />)
            })
        }

    render() {

        let resultFive = this.renderResult();

        return (
            <div>
                    <div>{resultFive}</div>
            </div>

        );
    }
}
export default Random;
