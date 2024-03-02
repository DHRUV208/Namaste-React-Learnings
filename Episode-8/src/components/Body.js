import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //      variable            function               utility function by react
  // const arr = useState(resList);
  // const list = arr[0];
  // const setList = arr[1];
  const [searchText, setSearchText] = useState("");

  const [filtered, setFiltered] = useState([]);
  
  useEffect(function () {
    console.log("useEffect Called");
    fetchData();
  }, []);
  const fetchData = async function () {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log("json:", jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltered(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  console.log("BODY RENDERED");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          ></input>
          <button
            onClick={() => {
              // Filter the restaurant card and update the ui
              // searchText

              console.log(searchText);

              const filteredRest = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFiltered(filteredRest);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) =>{ return res.info.avgRating > 4}
            );
            setListOfRestaurants(filteredList);
            console.log("btn clicked");
          }}
        >
          Top affordable restaurants
        </button>
      </div>
      <div className="rest-container">
        {filtered.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
