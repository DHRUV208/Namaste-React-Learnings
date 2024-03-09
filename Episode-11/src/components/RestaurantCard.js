import CDN_URL from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating, sla } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg cursor-pointer capitalize bg-gray-100 hover:bg-gray-500"
      
    >
      <img 
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>{costForTwo} </h4>
      <h4>{avgRating} </h4>
      <h4>{sla?.deliveryTime} mins </h4>
    </div>
  );
};

// Higher order component
export const withPromotedLabel = (RestaurantCard) => {

  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-lg ">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;
