import  CDN_URL  from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        deliveryTime
    } = resData?.data
  return (
    <div
      className="rest-card"
      style={{
        backgroundColor: "grey",
        hover: "2px solid black",
        cursor: "pointer",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>Rs. {costForTwo/100} for two </h4>
      <h4>{deliveryTime} mins </h4>
    </div>
  );
};



export default RestaurantCard;