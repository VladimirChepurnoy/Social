import React from "react";
import "./profilefriend.scss";
/* eslint-disable react/prop-types */
const ProfileFriend = (props) => {
  return (
    <div className="profile__friend-item">
      <a href="11" className="profile__friend-img">
        <img src={props.img} alt="картинка"></img>
      </a>
      <a href="11" className="profile__friend-text">
        ФИО
      </a>
    </div>
  );
};

export default ProfileFriend;
