import React, { Component } from "react";

import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import CurrentLocation from "./CurrentLocation";
import userMarker from "../images/user.png";
import Rating from "./starRating";
import "./restaurantList.css";
import Filter from "./Filter";

const style = {
       width: " 60%",
  height: "30rem",
  backgroundColor: "gainsboro",
};

class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      places: [],
    };

    this.mapRef = React.createRef();
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  displayInfoWindow = (props) => {
    return (
      <div id="infoWindow" className="infoWindow">
        <div>
          <img
            className="infoImg"
            id="infoImg"
            src={props.photos}
          />
        </div>
        <div className="details">
          <h3 className="name">{props.name}</h3>
          <h2 className="rating" id="rating">
            {props.rating}
            <Rating rating={props.rating} />
          </h2>
          <div id="restaurantDetails">
            <p id="address${i}" className="address">
              {props.formatted_address}
            </p>
          </div>
          <div>
            <a href="#restaurant-info" id="link" className="link">
              <h3>See Reviews</h3>
            </a>
          </div>
        </div>
      </div>
    );
  };
  onMarkerMounted=()=>{}
  displayMarkers = () => {
    return this.state.places.map((resta, i) => {
      const coords = resta.geometry.location;
      const photos=  typeof resta.photos !== "undefined"
? resta.photos[0].getUrl({ maxWidth: 600, maxHeight: 400 })
: "/images/kosewe.jpg";
console.log(coords);
      return (
     
        <Marker
        
        ref={this.onMarkerMounted}

          key={resta.place_id}
          id={resta.place_id}
          position={{ lat: coords.lat, lng: coords.lng }}
        
          name={resta.name}
          rating={resta.rating}
          photos={photos}
          formatted_address={resta.formatted_address}
          onClick={this.onMarkerClick}
          icon={userMarker}
        />
      );
    });
  };
  onMapReady = (props, map) => this.getNearbyRestaurants(map, map.center);

  getNearbyRestaurants = (map, position) => {
    const { google } = this.props;
    const service = new google.maps.places.PlacesService(map);

    let request = {
      location: position,

      keyword: "restaurant",
      radius: 1000,
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK)
        this.setState({ places: results });
    });
  };

 
  render() {
    console.log(this.state.places,this.props.restaurants);
    return (
      <div className="mapArea">
      <div id="map">
       
          
            <CurrentLocation  centerAroundCurrentLocation
            google={this.props.google}
            ref={this.mapRef}
            style={style}
            onReady={this.onMapReady} >
              <Marker name={"Current Location"} icon={userMarker} />
              {this.displayMarkers(this.state.places)}

              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
              >
                {this.displayInfoWindow(this.state.selectedPlace)}
              </InfoWindow>
            </CurrentLocation>
            </div>

<div id="restaurantList">

  <Filter  restaurants={this.state.places} onClick={this.onMarkerClick}/>
   
 
</div>
</div>
       
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDVx8OUfG3OK3ixZtcR52hqrYjOusTWF4g",
})(MapContainer);
