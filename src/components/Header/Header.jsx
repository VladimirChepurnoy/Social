/* eslint-disable react/prop-types */
import "../CSS/settings.scss";
import "./header.scss";
import logo from "./logo.png";
import React from "react";
const Header = (props) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__search">
        <form>
          <input
            type="search"
            className="header__search-input"
            placeholder="Поиск"
          ></input>
          <button type="submit" className="header__search-button"></button>
        </form>
      </div>
      <div className="header__profile">
        <div className="header__profile-name">{props.user.name}</div>
        <img
          src={props.user.img}
          className="header__profile-img"
          alt="Владимир"
        />
      </div>
    </header>
  );
};

export default Header;
