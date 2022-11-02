import React from "react";
import { Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import DataVis from "./DataVis";
import Video from "./Video";
import Fighter from "./Fighter";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Profile />
      </Route>
      <Route exact path="/video">
        <Video />
      </Route>
      <Route exact path="/datavis">
        <DataVis />
      </Route>
      <Route exact path="/fighter/:fighter-id">
        <Fighter />
      </Route>
    </Switch>
  );
};

export default Navigation;
