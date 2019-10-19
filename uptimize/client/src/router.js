import React from "react";
import {
  Route,
//   Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
