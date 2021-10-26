import React from "react";
import { NavLink } from "react-router-dom";

import "./dialoguser.scss";
/* eslint-disable react/prop-types */
const DialogUser = (props) => {
  return (
    <NavLink className="dialog-item" to={"/Dialogs/" + props.id}>
      <div className="dialog-item__img">
        <img src={props.img} alt="Картинка"></img>
      </div>
      <div className="dialog-item__name">{props.name}</div>
    </NavLink>
  );
};
export default DialogUser;
