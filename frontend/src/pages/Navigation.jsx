import React, { useState, useContext, useEffect, useRef } from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Training from "./Training.jsx";
import Fight from "./Fight.jsx";
import Trends from "./Trends.jsx";
import Landing from "./Landing.jsx";
import EditProfile from "./EditProfile.jsx";
import { StoreContext } from "../helpers/context";

const Navigation = () => {
  const context = React.useContext(StoreContext);
  const loggedIn = context.loggedIn[0];
  console.log("LOGGED IN")
  console.log(loggedIn)

  return (
    <Switch>
      <Route exact path="/">
        { loggedIn ?
          <Profile />
          :
          <Landing />
         }
      </Route>
      <Route exact path="/fights">
        <Fight />
      </Route>
      <Route exact path="/training">
        <Training />
      </Route>
      <Route exact path="/trends">
        <Trends />
      </Route>
      <Route exact path="/edit-profile">
        <EditProfile />
      </Route>
    </Switch>
  );
};

export default Navigation;
