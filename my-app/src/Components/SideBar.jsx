import React from "react";
import { Component } from "react";
import "./restaurantList.css";
import RestaurantList from "./RestaurantList";
import Filter from "./Filter";

export default class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="restaurantList">
        <Filter />

        <div id="restaurants">
          <RestaurantList restaurants={this.props.restaurants} />
        </div>
      </div>
    );
  }
}
