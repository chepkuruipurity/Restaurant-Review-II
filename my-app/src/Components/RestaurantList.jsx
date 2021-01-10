import React from "react";
import { Component } from "react";
import Rating from './starRating';

const RestaurantList =({resta,i,onIconClick})=> {
 
const photos=  typeof resta.photos !== "undefined"
? resta.photos[0].getUrl({ maxWidth: 600, maxHeight: 400 })
: "/images/kosewe.jpg";
 
    return (
      
      <div className="resta-one" key={i}>
        <div id="imgSpace">
          <img
            className="restaImg"
            id="restaImg${i}"
            src={photos}
            
          />
        </div>
        <div id="details">
          <h3 id="resta-name" onClick={onIconClick}className="resta-name name">
            <a className="nameLink" >{resta.name}</a>
          </h3>
          <h3 id="rating" className="rating">
            
            {resta.rating} <Rating rating={resta.rating}/>
          </h3>
        </div>
      </div>
    );
  
  }

  export default RestaurantList;
