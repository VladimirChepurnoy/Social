/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import React from "react";
import { connect } from "react-redux";

/* eslint-disable react/prop-types */
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import ProfileNewNews from "./ProfileNewNews";

// const ProfileNewNewsContainer = (props) => {
//   // eslint-disable-next-line no-debugger

//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };
//   let onPostChange = (text) => {
//     let action = updateNewPostTextActionCreator(text);

//     props.store.dispatch(action);
//   };
//   return (
//     <ProfileNewNews
//       img={props.img}
//       updatenewposttext={onPostChange}
//       addPost={addPost}
//       newPostText={state.profilePage.newPostText}
//     />
//   );
// };
const mapStateToProps = (state) => {
  return {
    img: state.userPage.user[0].img,
    newPostText: state.profilePage.NewPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    updatenewposttext: (text) => {
      debugger;
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};
const ProfileNewNewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileNewNews);

export default ProfileNewNewsContainer;
