/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
//import React from "react";
import { connect } from "react-redux";

import Header from "./Header";
// const HeaderContainer = (props) => {
//   // eslint-disable-next-line no-debugger

//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let user = store.getState().userPage.user[0];
//         <Header logo={props.logo} user={user} />;
//       }}
//     </StoreContext.Consumer>
//   );
// };
const mapStateToProps = (state) => {
  return {
    user: state.userPage.user[0],
  };
};
const mapDispatchToProps = (state) => {
  return {};
};
const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
