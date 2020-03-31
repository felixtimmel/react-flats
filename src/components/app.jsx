import React, { Component } from 'react';
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <Flat />
        </div>
        <div className="map-container">

        </div>
      </div>
    );
  }
}

export default App;
