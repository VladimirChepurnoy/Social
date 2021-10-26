/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import React from "react";
import "./friend.scss";
const Friends = (props) => {
  let user = props.user;
  let userlist = user.map((u) => (
    <div key={u.id} className="friends_item">
      <div className="friends_item_img">
        <img src={u.img}></img>
      </div>
      <div className="friends_item_wrapper">
        <div className="friends_item_wrapper_fistname">{u.name}</div>
        <div className="friends_item_wrapper_lastname">{u.lastname}</div>
        <div className="friends_item_wrapper_status">{u.Status}</div>
        <button className="friends_item_wrapper_button">followed</button>
      </div>
    </div>
  ));
  return (
    <div className="friends">
      <div className="friends_search">
        <form>
          <textarea type="text" cols="2" rows="1"></textarea>
        </form>
      </div>
      {userlist}
    </div>
  );
};

export default Friends;
