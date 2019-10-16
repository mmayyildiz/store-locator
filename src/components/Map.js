import React, { Component } from 'react';
import './Map.css';

class Map extends Component {
  render() {
    let imagePath;
    if (this.props.imagename) {
      imagePath = 'images/' + this.props.imagename;
    } else {
      imagePath = 'images/none.png';
    }
    return (
      <div className="MapBox">
        <img src={imagePath} alt={this.props.location} />
      </div>
    );
  }
}

export default Map;
