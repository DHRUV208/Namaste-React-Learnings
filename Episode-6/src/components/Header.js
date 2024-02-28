import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
const Header = () => {

  const arr = useState("Login");
  const [btn, setBtn] = arr;

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
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