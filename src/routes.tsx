import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./views/Home"
import Contact from "./views/Contact/index"
import SignIn from "./views/SignIn";
import SignUp from "./views/SignUp";
import Dash from "./views/Dash";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={Dash} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;