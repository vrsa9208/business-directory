import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BusinessList from "./views/BusinessList/BusinessList";
import BusinessDetails from "./views/BusinessDetails/BusinessDetails";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";

const App = () => {
  return (
    <>
      <CssBaseline />
      <MainLayout>
        <HashRouter>
          <Switch>
            <Route exact path="/">
              <Redirect to="/business" />
            </Route>
            <Route exact path="/business">
              <BusinessList />
            </Route>
            <Route path="/business/:businessId">
              <BusinessDetails />
            </Route>
          </Switch>
        </HashRouter>
      </MainLayout>
    </>
  );
};

export default App;
