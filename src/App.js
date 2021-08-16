import React from "react";
import Business from "./views/Business/Business";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/business" />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;
