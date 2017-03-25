import React, { Component } from 'react';
import MapAll from './containers/MapAll.jsx';
import Random from './containers/Random.jsx';
import Search from './containers/Search.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
          <Random/>
------------------------
          <MapAll/>
------------------------
          <Search/>
      </div>
    );
  }
}

export default App;
