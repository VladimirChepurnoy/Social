/* eslint-disable react/jsx-key */
/* eslint-disable no-debugger */
import React from "react";
import ProfileNew from "./ProfileNew/ProfileNew";

import "./profilenews.scss";
/* eslint-disable react/prop-types */

const ProfileNews = (props) => {
  let post = props.post;
  const postlist = post.map((postitem) => (
    <ProfileNew
      message={postitem.message}
      img={postitem.img}
      like={postitem.likesCount}
    />
  ));
  return <div className="profile__news profile-col ">{postlist}</div>;
};

export default ProfileNews;
