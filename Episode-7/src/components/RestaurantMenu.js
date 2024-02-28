import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {MENU_API} from "../utils/constants";
import {useParams} from "react-router-dom";
const RestaurantMenu = () => {
  const  [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch( MENU_API + resId );
    const jsonData = await data.json();
    console.log("1234567898989888 ========>>>>>",jsonData.data);
    setResInfo(jsonData.data);
  };
  if (resInfo === null)  {
    return <Shimmer />
 }
 
  const   {itemCards}   = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
    console.log("itemCards", itemCards);
  const {name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[0]?.card?.card?.info;
    console.log("items--->", name);
  
  return  (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>
      
      <ul>
        {itemCards.map((item)=>{
          return  <li key={item.card.info.id}>{item.card.info.name} - {"Rs. "} {item.card.info.price/100}</li>
        })} 
       </ul>
    </div>
  );
};

export default RestaurantMenu;
