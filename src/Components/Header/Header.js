import siteLogo from "../../assets/site-logo.svg";
import "../Header/Header.scss";

import { Link } from "react-router-dom";
import { Search } from "../Header/Search/Search";
import { Cart } from "../Header/Cart/Cart";

export const Header = () => {
  return (
    <div className="site-header">
      <div className="header-site-logo-wrapper">
        <Link to={"/"}>
          <img src={siteLogo} alt="site-logo" />
        </Link>
      </div>
      <Search />
      <Cart />
    </div>
  );
};
