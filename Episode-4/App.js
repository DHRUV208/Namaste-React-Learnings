import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div
      classname="heading"
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
      }}
    >
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxnONLgBgcbMG675cs09vPk5I7-rwwmWVAw&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

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
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")} </h4>
      <h4>Rs. {costForTwo/100} for two </h4>
      <h4>{deliveryTime} mins </h4>
    </div>
  );
};

const resList = [
    {
        data: {
            id: "32",
            name: "KFC",
            cuisines: ["Burgers", "Biryani", "American"],
            costForTwo: 40000,
            cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
            deliveryTime: 36,

        }

    }, 
    
]

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
