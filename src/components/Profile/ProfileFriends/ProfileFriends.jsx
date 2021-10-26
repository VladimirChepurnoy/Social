/* eslint-disable react/jsx-key */
import React from "react";
import ProfileFriend from "./ProfileFriend/ProfileFriend";
import "./profilefriends.scss";
/* eslint-disable react/prop-types */
const ProfileFrinds = (props) => {
  let friend = props.friend;
  const profilefrienditems = friend.map((frienditem) => (
    <ProfileFriend img={frienditem.img} />
  ));
  return (
    <div className="profile__friend">
      <span className="profile__friend-title">Друзья</span>
      <div className="profile__friend-wrapper">{profilefrienditems}</div>
    </div>
  );
};

export default ProfileFrinds;
