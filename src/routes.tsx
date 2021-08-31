import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "./views/Home"
import Contact from "./views/Contact/index"
import SignIn from "./views/SignIn";
import SingUp from "./views/SingUp";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path="/singin" component={SignIn} />
            <Route path="/singup" component={SingUp} />
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;