import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Places from "../Pages/places";
import Guide from "../Pages/guides";

function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Places} />
          <Route path="/places/:name" component={Guide} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
