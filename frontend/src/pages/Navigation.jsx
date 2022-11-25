import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Training from "./Training.jsx";
import Fight from "./Fight.jsx";
import BrowseVideo from "../components/video/BrowseVideo";
import Trends from "./Trends.jsx"
import Landing from "./Landing.jsx"

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Landing />
      </Route>
      <Route exact path="/home">
        <Profile />
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
      <Route exact path="/auth">
        <Trends />
      </Route>
    </Switch>
  );
};

export default Navigation;
