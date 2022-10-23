import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./Homepage";
import Scenario from "./Scenario";
import Video from "./Video";
import Comparison from "./Comparison";
import Fighters from "./Fighters";
import Fighter from "./Fighter";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/scenario">
        <Scenario />
      </Route>
      <Route exact path="/video">
        <Video />
      </Route>
      <Route exact path="/comparison">
        <Comparison />
      </Route>
      <Route exact path="/fighters">
        <Fighters />
      </Route>
      <Route exact path="/fighter/:fighter-id">
        <Fighter />
      </Route>
    </Switch>
  );
};

export default Navigation;
