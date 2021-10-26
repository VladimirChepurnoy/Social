/* eslint-disable react/jsx-key */
import React from "react";
import "./profilegifts.scss";

import ProfileGift from "./ProfileGift/ProfileGift";
/* eslint-disable react/prop-types */
const ProfileGifts = (props) => {
  const gift = props.gift;

  const fotolist = gift.map((giftitem) => <ProfileGift img={giftitem.img} />);
  return (
    <div className="profile__gift">
      <div className="profile__gift-title">Подарки</div>
      <div className="profile__gift-wrapper">{fotolist}</div>
    </div>
  );
};

export default ProfileGifts;
