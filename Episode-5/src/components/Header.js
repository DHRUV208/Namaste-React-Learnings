import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;