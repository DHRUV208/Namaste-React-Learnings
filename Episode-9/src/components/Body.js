import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
// import useAllResData from "../utils/useAllResData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //      variable            function               utility function by react
  // const arr = useState(resList);
  // const list = arr[0];
  // const setList = arr[1];
  const [searchText, setSearchText] = useState("");

  const [filtered, setFiltered] = useState([]);
  
  // const allResData = useAllResData();

//   if (allResData === null)  {
//     return <Shimmer />
//  }
useEffect(()=>{
  fetchData();
}, [])

  const fetchData = async function () {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json();
    console.log("json:", jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setListOfRestaurants(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFiltered(jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  console.log("BODY RENDERED");

  const onlineStatus = useOnlineStatus();
  if( onlineStatus === false) return <h1>Looks like you are offline !!</h1>

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
