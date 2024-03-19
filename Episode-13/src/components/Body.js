import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
// import useAllResData from "../utils/useAllResData";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  //      variable            function               utility function by react
  // const arr = useState(resList);
  // const list = arr[0];
  // const setList = arr[1];
  const [searchText, setSearchText] = useState("");

  const [filtered, setFiltered] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // const allResData = useAllResData();

  //   if (allResData === null)  {
  //     return <Shimmer />
  //  }
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async function () {
    const data = await fetch(RESTAURANT_API);
    const jsonData = await data.json();
    console.log(
      "json:",
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFiltered(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  console.log("BODY RENDERED");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Looks like you are offline !!</h1>;

  const { setUserInfo, loggedInUser } = useContext(UserContext);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black "
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            value={searchText}
          ></input>
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
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
        <div className="m-4 p-4 flex items-center">
          <button
            className=" px-4 py-2 border-solid border-black border-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setListOfRestaurants(filteredList);
              console.log("btn clicked");
            }}
          >
            Top affordable restaurants
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>Username: </label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={() => setUserInfo(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filtered.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant.info.avgRating > 4 ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;