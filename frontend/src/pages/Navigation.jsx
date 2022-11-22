import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Trends from "./Trends";
import Video from "./Video";
import Fighter from "./Fighter";
import Training from "./Training";
import NewFight from "./NewFight";
import BrowseVideo from "../components/video/BrowseVideo";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route exact path="/trends">
        <Trends />
      </Route>
      <Route exact path="/fight">
        <NewFight />
      </Route>
      <Route exact path="/fighter/:fighter-id">
        <Fighter />
      </Route>
      <Route exact path="/browsevideo">
        <BrowseVideo />
      </Route>
      <Route exact path="/training">
        <Training />
      </Route>
    </Switch>
  );
};

export default Navigation;
