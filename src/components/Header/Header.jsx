import { Link } from "react-router-dom";
import logo from "../../assets/logo_view.webp";

import "./header.css"

const Header = ({ children }) => {
    return (
      <div className="header_container">
        <div className="main_logo_container">
          <Link to="/" aria_label="Back to home">
            <img src={logo} alt="HRNet logo" className="main_logo" />
          </Link>
        </div>
        <h1>{children}</h1>
      </div>
    );
  };

  export default Header