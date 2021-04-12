import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Dashboard from "./Pages/Dashboard";
// import Protected from "./common/Protected/Protected";
import Login from "./Pages/Login";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

class Routes extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
          {/* <Protected
            path="/dashboard"
            Component={Dashboard}
            loggedIn={this.props.loggedIn}
            basicProfile={this.props.basicProfile}
          /> */}
          <Route path="*">
            <Redirect to="/login" />
          </Route>
        </Switch>
      </Router>
    );
  }
}
// const mapStateToProps = ({ userProfile }) => ({
//   loggedIn: userProfile.loggedIn,
//   basicProfile:
//     userProfile.loggedIn && userProfile.userProfile
//       ? {
//           name: userProfile.userProfile.name,
//           email: userProfile.userProfile.email,
//         }
//       : {},
// });

export default Routes;
