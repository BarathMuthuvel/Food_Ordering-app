import React from "react";
import { useEffect, useState } from "react";
import RestaurantCard, { withPromotedLable } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchResults, setSearchResults] = useState("");
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9248884&lng=78.118606&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await res.json();

    //Optional Chaining
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRestaurant(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filteredRes = restaurantList.filter((res) => res.info.avgRating < 4.5);

  const internetStatus = useInternetStatus();

  if (internetStatus !== true) {
    return <h1>Youre offline please check your internet🛜</h1>
  }

  const ResturantPromotedComponent = withPromotedLable(RestaurantCard)

  //Conditional Rendering

  /*if(restaurantList.length === 0){
    return <Shimmer />
  }*/

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="searchResults m-4 p-4">
          <input
            type="text"
            data-testid = "searchInput"
            value={searchResults}
            className="border-2 border-black rounded-lg"
            onChange={(e) => {
              setSearchResults(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              let filteredResults = restaurantList.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchResults.toLowerCase())
              );
              setFilterRestaurant(filteredResults);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => setRestaurantList(filteredRes)}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRestaurant.map((res) => {
          return <Link className="textMenu" to={"/resturant/" + res.info.id} key={res.info.id}>
            {res.info.veg ? <ResturantPromotedComponent resData={res} /> : <RestaurantCard resData={res} />}
          </Link>;
        })}
      </div>
    </div>
  );
};

export default Body;
