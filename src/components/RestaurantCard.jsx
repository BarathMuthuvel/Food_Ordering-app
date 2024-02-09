import React from 'react'

import { CDN_URL } from "../utils/constants";
import PropTypes from "prop-types";

const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img className="rounded-lg w-60" src={CDN_URL + resData.info.cloudinaryImageId} alt="logo" />
      <h3 className="font-bold py-4 text-lg">{resData.info.name}</h3>
      <h4>{resData.info.avgRating} stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

//Higher Order Component
// Input => ResturantCard => ResturantCardPromoted

export const withPromotedLable = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute ml-6 mt-2 p-1 bg-green-400 rounded-lg">Veg</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}




RestaurantCard.propTypes = {
  resData: PropTypes.object.isRequired,
};

RestaurantCard.defaultProps = {
  resData: {},
};

export default RestaurantCard;