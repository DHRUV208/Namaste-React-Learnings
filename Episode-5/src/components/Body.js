import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  //      variable            function               utility function by react
  const arr = useState(resList);
  const list = arr[0];
  const setList = arr[1];

    return (
      <div className="body">
        <div className="filter">
        <button className="filter-btn" onClick={()=>{console.log("btn clicked")}}>Top rated restaurant</button>

        </div>
        <div className="rest-container">
          {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
  };

  export default Body;