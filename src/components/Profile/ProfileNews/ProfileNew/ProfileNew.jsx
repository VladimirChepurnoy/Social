import React from "react";
import "./profilenew.scss";
/* eslint-disable react/prop-types */
const ProfileNew = (props) => {
  return (
    <div className="profile__news-item">
      <div className="profile__news-item__header profile-row">
        <div className="profile__news-item__header-img">
          <img src={props.img} alt="Картинка"></img>
        </div>
        <div className="profile__news-item__header-wrapper profile-col">
          <a href="11" className="profile__news-item__header-link">
            Владимир Чепурной
          </a>
          <span className="profile__news-item__header-date">08.08.2021</span>
        </div>
      </div>
      <div className="profile__news-item__content">{props.message}</div>
      <div className="profile__news-item__footer">
        <div className="profile__news-item__footer__wrapper">
          <button className="profile__news-item__footer__wrapper-btn btn-reset">
            <div className="profile__news-item__footer__wrapper-btn-icon like"></div>
            <div className="profile__news-item__footer__wrapper-btn-count">
              {props.like}
            </div>
          </button>
          <button className="profile__news-item__footer__wrapper-btn  btn-reset">
            <div className="profile__news-item__footer__wrapper-btn-icon comment"></div>
            <div className="profile__news-item__footer__wrapper-btn-count"></div>
          </button>
          <button className="profile__news-item__footer__wrapper-btn  btn-reset">
            <div className="profile__news-item__footer__wrapper-btn-icon share"></div>
            <div className="profile__news-item__footer__wrapper-btn-count"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileNew;
