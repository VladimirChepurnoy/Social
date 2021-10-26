/* eslint-disable react/prop-types */
import React from "react";
import "./profilefoto.scss";

const ProfileFoto = (props) => {
  return (
    <div className="profile__foto-item">
      <img src={props.img} alt="картинка"></img>
    </div>
  );
};

export default ProfileFoto;
