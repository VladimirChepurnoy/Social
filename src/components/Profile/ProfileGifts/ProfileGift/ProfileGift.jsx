import React from "react";
import "./profilegift.scss";
/* eslint-disable react/prop-types */
const ProfileGift = (props) => {
  return (
    <a href="11" className="profile__gift-item">
      <img src={props.img} alt="Подарок"></img>
    </a>
  );
};

export default ProfileGift;
