import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  function logOut() {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://www.nicepng.com/png/full/16-167642_amazon-logo-amazon-logo-white-text.png"
          alt="amazonLogo"
        />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchIn" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header__nav">
        <div onClick={logOut} className="header__option">
          <span className="header__optionLineOne">
            Hello {user ? user.email : ""}
          </span>
          <Link to={user ? "/" : "/login"}>
            <span className="header__optionLineTwo">
              {user ? "Sign out" : "Sign in"}
            </span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__basketCount">
              {basket ? basket.length : 0}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
