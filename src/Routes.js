import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";
import { selectUserLogin } from "./redux/userLoginSlice";
import Protected from "./common/Protected";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

const history = createBrowserHistory();

const Routes = () => {
  const userLoginData = useSelector(selectUserLogin);
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Protected
          path="/dashboard"
          Component={Dashboard}
          loggedIn={!!userLoginData}
        />
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
