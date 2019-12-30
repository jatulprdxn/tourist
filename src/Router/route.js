import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Places from "../Pages/places";
import Guide from "../Pages/guides";
import GuidesProfile from "../Pages/guidesprofile";

function Routes(props) {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Places} />
          <Route exact path="/places/:name" component={Guide} />
          <Route exact path="/places/:name/:guidename" component={GuidesProfile} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
