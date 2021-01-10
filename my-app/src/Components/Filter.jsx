import React, { Component } from "react";
import Rating from "./starRating";
import RestaurantList from './RestaurantList';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 5,
    };
  }
  handleChange = (e) => {
    e.persist();
    this.setState((state) => {
      return {
        min: {
          ...state.min,
          [e.target.id]: e.target.value,
        },
        max: {
          ...state.max,
          [e.target.id]: e.target.value,
        },
      };
    });
  };
  filterRestaurants = (restaurants) => {
    return restaurants.filter((resta) => {
      const { min, max } = this.state;

      let rate = resta.rating;
      return rate >= Number(min.min) && rate <= Number(max.max);
    });
  };
  render() {
    const { min, max } = this.state;
    return (
      <div className="restaurantList">
        <div id="options">
          <label for="min">Min:</label>
          <select
            value={this.state.value}
            onChange={this.handleChange}
            className="sort"
            id="min"
          >
            <option value="0">0 stars</option>
            <option value="1">1 stars</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
          <label for="min">Max:</label>
          <select
            class="sort"
            id="max"
            value={this.state.value}
            onChange={this.handleChange}
          >
            <option value="0">0 stars</option>
            <option value="1">1 stars</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5" selected >
              5 stars
            </option>
          </select>
        </div>

        <div id="restaurants">
          
          { this.props.restaurants && this.filterRestaurants(this.props.restaurants)
           

            .map((resta, i) => {
               
              return (
                <div
                key={i}
                 
                >
                 <RestaurantList onIconClick={this.props.onClick} resta={resta} key={resta.place_id} i={i}/>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
