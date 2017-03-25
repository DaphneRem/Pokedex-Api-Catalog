import React from 'react';
import axios from 'axios';
import ResultAll from './ResultAll.jsx';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            query : '', // on initialise query à rien, si rien n'est passé il nous affiche tout le data
            showComponent : false,
            recherche : []
    }
    this.handleChange = this.handleChange.bind(this); // On initie les this de chaques fonctions pour qu'ils correspondent au this à l'intérieur de chaque fonction
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.renderResult = this.renderResult.bind(this);
}

    componentDidMount() {
      var url = `https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json`;
        axios.get(url).then((response) => {
            this.setState({recherche : response.data.pokemon}); // this.setState : permet de return le resultat et de l'utiliser en global
        });
    }

    handleChange(event) { // quand input va changer : change la valeur de this.state.query
        this.setState({query : event.target.value});
    }
    handleKeyPress(event) {
        if (event.key === 'Enter') {
            this.setState({
                showComponent : !this.state.showList
            });
        }
        console.log(this.state.showList);
    }
// sous certaine conditions je renvoie du html
    renderResult() {
        return this.state.recherche.map((e, i) => {
            if (e.name.toLowerCase().includes(this.state.query.toLowerCase())) {
            return (<ResultAll
                        key={i}
                        name={e.name}
                        img={e.img}
                        evolutionsPro={e.next_evolution ? e.next_evolution.map((element) => {return element.name + " "}) : "Aucune" }
                        evolutionsPre={e.prev_evolution ? e.prev_evolution.map((element) => {return element.name + " "}) : "Aucune" }
                        faiblesses={e.weaknesse ? e.weaknesses.map((element) => {return element + " "}) :  "Aucune" }
                    />);
            }
        });
    }

    render() {

        let result = this.renderResult();

        return (
            <div className="containerInput">

                <div className="myInput">
                    <input type="text" value={this.state.query} onChange={this.handleChange} placeholder="saisissez votre recherche" onKeyPress={this.handleKeyPress} />
                </div>
                <div className="list">
                    {this.state.showComponent ? result : null}
                </div>
            </div>

        );
    }
}
export default Search;
