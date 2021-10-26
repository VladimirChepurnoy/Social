/* eslint-disable no-debugger */
import { connect } from "react-redux";
import { followAC, setUserAC, unfollowAC } from "../../redux/user-reducer";
import Friends from "./Friends";

let mapStateToProps = (state) => {
  return {
    user: state.userPage.user,
  };
};
let mapDispathToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUserAC(users));
    },
  };
};
const FriendsContainer = connect(mapStateToProps, mapDispathToProps)(Friends);
export default FriendsContainer;
