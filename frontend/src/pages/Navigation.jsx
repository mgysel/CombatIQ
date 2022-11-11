import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import Trends from "./Trends";
import Video from "./Video";
import Fighter from "./Fighter";
import HumanBody from "./HumanBody";
import BrowseVideo from "../components/BrowseVideo";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route exact path="/trends">
        <Trends />
      </Route>
      <Route exact path="/video">
        <Video />
      </Route>
      <Route exact path="/fighter/:fighter-id">
        <Fighter />
      </Route>
      <Route exact path="/humanbody">
        <HumanBody />
      </Route>
      <Route exact path="/browsevideo">
        <BrowseVideo />
      </Route>
    </Switch>
  );
};

export default Navigation;
