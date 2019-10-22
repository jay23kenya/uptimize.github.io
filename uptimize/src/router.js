import React from "react";
import {
  Route,
  //   Redirect,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";
import Questionnaire from "./views/Questionnaire/Questionnaire";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/questionnaire" component={Questionnaire} />
      </Switch>
    </Router>
  );
};

export default Routes;
