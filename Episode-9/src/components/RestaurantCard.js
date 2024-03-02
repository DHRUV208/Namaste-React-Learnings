import  CDN_URL  from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        costForTwo,
        cloudinaryImageId,
        avgRating,
        sla
    } = resData?.info
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
      <h4>{costForTwo}  </h4>
      <h4>{avgRating}  </h4>
      <h4>{sla?.deliveryTime} mins </h4>
    </div>
  );
};



export default RestaurantCard;