import React from "react";
import "./profileheader.scss";
/* eslint-disable react/prop-types */
const ProfileHeader = (props) => {
  return (
    <div className="profile__header">
      <div className="profile__back">
        <img src={props.user.BgImg} alt="картинка"></img>
      </div>
      <div className="profile__image">
        <img src={props.user.img} alt="картинка"></img>
      </div>
      <div className="profile__name">
        <span>{props.user.surname}</span>
        <span>{props.user.name}</span>
        <span>{props.user.lastname}</span>
      </div>
    </div>
  );
};

export default ProfileHeader;
