import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';
import Flatlist from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatslist: flats
    };
  }

  render() {
    return (
      <div>
        <Flatlist flatslist={this.state.flatslist} />
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
