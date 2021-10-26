import React from "react";
import "./Message.scss";
/* eslint-disable react/prop-types */
const Message = (props) => {
  return (
    <div className="message">
      <div className="message__img">
        <img src={props.img} alt="Картинка"></img>
      </div>
      <div className="message__wrapper">
        <a href="11" className="message__name">
          {props.name}
        </a>
        <div className="message__text">{props.message}</div>
      </div>
    </div>
  );
};

export default Message;
