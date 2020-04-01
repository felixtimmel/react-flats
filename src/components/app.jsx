import React, { Component } from 'react';
import flats from '../../data/flats';
import Flat from './flat';
import Flatlist from './flat_list';
import SimpleMap from './map';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flatslist: flats,
      selectedflat: ""
    };
  }

  select = (index) => {
    this.setState({
      selectedflat: flats[index]
    });
  }

  render() {
    return (
      <div>
        <Flatlist flatslist={this.state.flatslist} selectedflat={this.select} />
        <div className="map-container">
          <SimpleMap selectedflat={this.state.selectedflat} flatslist={this.state.flatslist} />
        </div>
      </div>
    );
  }
}

export default App;
