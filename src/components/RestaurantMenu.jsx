import React from 'react'

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {

  const [activeIndex, setActiveIndex] = useState(null);

  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId);


  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (categorie) => categorie.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center my-4">
      <h1 className="font-bold text-2xl my-3">{name}</h1>
      <div className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</div>
      <div>
        {
          categories.map((c, index) => (<RestaurantCategory key={c.card.card.title} data={c?.card?.card} showCategory={index === activeIndex ? true : false} setActiveIndex={() => setActiveIndex(index)} />))
        }
      </div>

    </div>
  );
}

export default RestaurantMenu;
