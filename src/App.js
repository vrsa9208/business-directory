import React, { Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import BusinessList from "./views/BusinessList/BusinessList";
import BusinessDetails from "./views/BusinessDetails/BusinessDetails";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";

const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  );
};

export default App;
