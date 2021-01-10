import React, { Component } from "react";
import MapContainer from "./Map";

import RestaurantList from "./RestaurantList";
import "./restaurantList.css";
import Filter from "./Filter";
const style = {
  width: "35%",
  height: "30rem",
  marginRight: "3rem",
  backgroundColor: "white",
  overflow: "auto",
  display: "flex",
  flexWrap: "wrap",
};

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
     
    };
  }
  changeState = (data) => {
    this.setState({ rest });
  };
  render() {
    console.log(this.state.restaurants);
    return (
      <div className="mapArea">
        <div id="map">
          <MapContainer
            restaurants={this.state.restaurants}
            places={this.state.restaurants}
          />
        </div>

        <div id="restaurantList">
          <Filter restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
}
