import { LOGO_URL } from "../utils/constants";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

  const arr = useState("Login");
  const [btn, setBtn] = arr;

  useEffect(()=>{
    console.log("useEffect called");
  },[btn]);
  const onlineStatus = useOnlineStatus();

    return (
      <div
        className="heading"
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid black",
        }}
      >
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              Online Status: {onlineStatus ? "online" : "offline"}
            </li>
            <li>
              <Link to="/"> Home </Link>
              </li>
            <li>
             <Link to="/about"> About Us </Link>
              </li>
            <li>
              <Link to="/contact"> Contact Us </Link>
              </li>
            <li>
              <Link to="/grocery"> Grocery </Link>
              </li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
             btn === "Login" ? setBtn("Logout") : setBtn("Login")
              console.log(btn);
            }}>{btn}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;