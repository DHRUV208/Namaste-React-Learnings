import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const arr = useState("Login");
  const [btn, setBtn] = arr;

  const data = useContext(UserContext);
  console.log("data from context", data);
  useEffect(() => {
    console.log("useEffect called");
  }, [btn]);
  const onlineStatus = useOnlineStatus();


  // We are subscribing to the store using a selector
  // Selector is a hook inside react
  const cartItem = useSelector((store) => store.cart.items)


  return (
    <div className="flex justify-between bg-pink-200 shadow-lg mb-2 sm:bg-yellow-200 lg:bg-green-300">
      <div className="logo-container">
        <img className="w-25" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus ? "online" : "offline"}</li>
          <li className="px-4">
            <Link to="/"> Home </Link>
          </li>
          <li className="px-4">
            <Link to="/about"> About Us </Link>
          </li>
          <li className="px-4">
            <Link to="/contact"> Contact Us </Link>
          </li>
          <li className="px-4">
            <Link to="/grocery"> Grocery </Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart" >Cart ({cartItem.length} items )</Link>
            </li>
          <li className="px-4 font-bold">{data.loggedInUser}</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setBtn("Logout") : setBtn("Login");
              console.log(btn);
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
