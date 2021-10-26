import React from "react";
import "./profile.scss";
/* eslint-disable react/prop-types */
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileFrinds from "./ProfileFriends/ProfileFriends";
import ProfileGifts from "./ProfileGifts/ProfileGifts";
import ProfileFotos from "./ProfileFotos/ProfileFotos";

import ProfileNews from "./ProfileNews/ProfileNews";
import ProfileNewNewsContainer from "./ProfileNewNews/ProfileNewNewsContainer";

const Profile = (props) => {
  // eslint-disable-next-line no-debugger
  debugger;
  return (
    <div className="profile">
      <ProfileHeader user={props.profile} />
      <div className="profile-row">
        <div className="profile-col">
          <ProfileFrinds friend={props.profile.friend} />
          <ProfileGifts gift={props.profile.gift} />
        </div>
        <div className="profile-col">
          <ProfileFotos foto={props.profile.foto} />
          <ProfileNewNewsContainer />
          <ProfileNews post={props.posts} img={props.profile.img} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
