import React from "react";
/* eslint-disable react/prop-types */
const Messageheader = (props) => {
  return (
    <div className="Messages__header">
      <div className="Messages__header-img">
        <img src={props.img} alt="Картинка"></img>
      </div>
      <a href="11" className="Messages__header-name">
        {props.name}
      </a>
    </div>
  );
};
export default Messageheader;
