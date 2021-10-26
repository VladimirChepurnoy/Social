/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
import "./App.scss";
import "./components/CSS/settings.scss";
import React from "react";

import Nav from "./components/nav/Nav";

import { BrowserRouter, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";

function App() {
  return (
    <BrowserRouter>
      <div className=" App-wrapper  ">
        <HeaderContainer />
        <div className="container">
          <Nav />
          <Route path="/Dialogs" render={() => <DialogsContainer />} />
          <Route path="/Profile" render={() => <ProfileContainer />} />
          <Route path="/Friends" render={() => <FriendsContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
