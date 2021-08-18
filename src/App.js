import React from "react";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
import CssBaseline from "@material-ui/core/CssBaseline";
import BusinessList from "./views/BusinessList/BusinessList";
import BusinessDetails from "./views/BusinessDetails/BusinessDetails";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import MainLayout from "./components/MainLayout/MainLayout";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const store = configureStore();

const App = () => {
  return (
    <>
      <Provider store={store}>
        <CssBaseline />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
        </MuiPickersUtilsProvider>
      </Provider>
    </>
  );
};

export default App;
