import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export const Rating = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="gold"
      starDimension="25px"
      starSpacing="2px"
      numberOfStars={5}
      name="rating"
    />
  );
};

export default Rating;

/* export  function starRating(place) {
    let rating = [];
    let rounded = place.rating | 0;
    let empty = 5 - rounded;

    for (let i = 0; i < 5; i++) {
      if (i < rounded) {
        rating.push('<i class="fa fa-star "></i>');
      } else if (place.rating - i > 0 && place.rating - i < 1) {
        rating.push('<i class="fa fa-star-half-o "></i>');
      } else if (empty > 0 && empty < rounded) {
        rating.push('<i class="fa fa-star-o "></i>');
      } else {
        rating.push('<i class="fa fa-star-o"></i>');
      }
    }
    return rating.join(" ");
    rating = [];
  }
 export default function addStars(num) {
    let rounded = num | 0;
    let empty = 5 - rounded;
    let rating = [];
    let rate= document.getElementById('rating')
    for (let i = 0; i < 5; i++) {
      let b = rate.append(
        '<i class="fa ' +
          (i < rounded
            ? "fa-star"
            : num - i > 0 && num - i < 1
            ? "fa-star-half-o"
            : empty > 0 && empty < rounded
            ? "fa-star-o"
            : "fa-star-o") +
          '" ></i>'
      );
      rating.push(b);
    }
  } */
