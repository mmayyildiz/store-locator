import React, { Component } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Map from "../components/Map";
import mapChooser from "../mapChooser";
import axios from "axios";

class StoreLocator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMap: "none.png",
      shops: [],
    };
    this.chooseMap = this.chooseMap.bind(this);
  }

  // async func so that I can use await here rather than a promise or a callback
  async componentDidMount() {
    let response = await axios.get("http://localhost:3000/data/shops.json");
    this.setState({
      shops: response.data.shops,
    });
  }
  chooseMap(e) {
    this.setState({ currentMap: mapChooser(e.target.value) });
  }

  render() {
    let storeButtons = this.state.shops.map((shop, id) => {
      return (
        <Button
          handleClick={this.chooseMap}
          key={id}
          location={shop.location}
        />
      );
    });

    return (
      <div>
        <Header />
        <div>{storeButtons}</div>
        <Map imagename={this.state.currentMap} location={this.props.location} />
      </div>
    );
  }
}

export default StoreLocator;
