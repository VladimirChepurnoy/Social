/* eslint-disable react/prop-types */
//import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";

// const ProfileContainer = () => {
//   return (
//     <Consumer>
//       {(store) => {
//         let state = store.getState();
//         let profile = state;
//         let posts = state.profilePage.posts;
//         <Profile profile={profile} posts={posts} store={state} />;
//       }}
//     </Consumer>
//   );
// };
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.userPage.user[0],
  };
};
const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
