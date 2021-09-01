import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import PrivateRoute from "./private.routes";

import Home from "./views/Home"
import Course from "./views/Course/index"
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dash from "./views/Dash";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/courses" component={Course} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/dashboard" exact component={Dash} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;