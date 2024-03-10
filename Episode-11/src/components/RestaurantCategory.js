import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);
    const [arrow, setArrow] = useState("down arrow");
    const handleClick = ()=> {
        console.log("clicked");
        setShowItems(!showItems)
        if (!showItems)  setArrow("up arrow");
        else setArrow("down arrow");

    }
  console.log(data);
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{arrow} </span>
        </div>
        {/* Accordian Body */}
       { showItems &&  <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
