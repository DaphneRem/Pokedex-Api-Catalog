import React from 'react';
import { Link } from 'react-router';
import MapAll from './MapAll';
import Random from './Random';
import Search from './Search';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">

        <Random/>
        <div>----------------------------------</div>
        <MapAll/>
        <div>----------------------------------</div>
        <Search/>
        <footer>
          <p>
            This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
          </p>
        </footer>
      </div>
    );
  }
}

//le routeur React s'assurera d'imbriquer les composants dans le composant Layout
