import React from "react";
import "./nav.scss";

import user from "./user.png";
import news from "./news.png";
import massage from "./massages.png";
import friend from "./friends.png";
import community from "./community.png";
import image from "./images.png";
import album from "./album.png";
import video from "./video.png";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__bar">
        <li className="nav__bar-item">
          <NavLink to="/Profile" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={user} alt="Профиль"></img>
            </div>
            <span>Моя страница</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="11" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={news} alt="Новости"></img>
            </div>
            <span>Новости</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="/Dialogs" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={massage} alt="Сообщения"></img>
            </div>
            <span>Сообщения</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="/Friends" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={friend} alt="Друзья"></img>
            </div>
            <span>Друзья</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="11" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={community} alt="Сообщество"></img>
            </div>
            <span>Сообщество</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="11" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={image} alt="Фотографии"></img>
            </div>
            <span>Фотографии</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="11" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={album} alt="Музыка"></img>
            </div>
            <span>Музыка</span>
          </NavLink>
        </li>
        <li className="nav__bar-item">
          <NavLink to="11" className="nav__bar-link">
            <div className="nav__bar-link-img">
              <img src={video} alt="Видео"></img>
            </div>
            <span>Видео</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
