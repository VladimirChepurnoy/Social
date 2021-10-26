/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import "./profilenewNews.scss";
/* eslint-disable react/prop-types */
import musicicon from "./headphones.png";
import videoicon from "./video-icon.png";
import fotoicon from "./camera.png";

const ProfileNewNews = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatenewposttext(text);
  };
  return (
    <div className="profile__newnews">
      <div className="profile__newnews-img">
        <img src={props.img} alt="картинка"></img>
      </div>
      <textarea
        className="profile__newnews-text"
        suppressContentEditableWarning="true"
        ref={newPostElement}
        onChange={onPostChange}
        value={props.newPostText}
      ></textarea>
      <div className="profile__newnews-icon profile-col">
        <a href="11" alt="Фотография" className="profile__newnews-icon-link">
          <img src={fotoicon} alt="11"></img>
        </a>
        <a href="11" alt="Видеозапись" className="profile__newnews-icon-link">
          <img src={videoicon} alt="11"></img>
        </a>
        <a href="11" alt="Музыка" className="profile__newnews-icon-link">
          <img src={musicicon} alt="11"></img>
        </a>
        <div className="profile__newnews-wrapper">
          <button onClick={addPost} className="btn-reset profile__newnews-btn">
            Отправить
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNewNews;
