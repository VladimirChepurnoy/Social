/* eslint-disable react/jsx-key */
import React from "react";
import "./profilefotos.scss";
import ProfileFoto from "./ProfileFoto/ProfileFoto";
/* eslint-disable react/prop-types */
const ProfileFotos = (props) => {
  const foto = props.foto;

  const fotolist = foto.map((fotoitem) => <ProfileFoto img={fotoitem.img} />);
  return (
    <div className="profile__foto">
      <span className="profile__foto-title">Фото</span>
      <div className="profile__foto-wrapper">{fotolist}</div>
    </div>
  );
};

export default ProfileFotos;
