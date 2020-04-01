import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './marker';

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 48.8534,
      lng: 2.3488
    },
    zoom: 12
  };

  markers = this.props.flatslist.map(flat => <Marker lat={flat.lat} lng={flat.lng} key={flat.name} />);

  render() {
    if (this.props.selectedflat === "") {
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyD09yqeu6JdDIjAqBQAHDl9XAx2Zh_0xKE" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            {this.markers}
          </GoogleMapReact>
        </div>
      );
    } return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyD09yqeu6JdDIjAqBQAHDl9XAx2Zh_0xKE" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={this.props.selectedflat.lat} lng={this.props.selectedflat.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
