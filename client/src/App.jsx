import React, { Component } from 'react';
import MapAll from './containers/MapAll.jsx';
import Random from './containers/Random.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Random/>
------------------------
          <MapAll/>
      </div>
    );
  }
}

export default App;
