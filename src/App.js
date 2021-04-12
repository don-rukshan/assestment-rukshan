import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import Routes from "./Routes";
import LoadingPage from "./common/LoadingPage";
import { setIsSigningFlag } from "./redux/actions/app/app.ac";
import { createBrowserHistory } from "history";

/**
 * Function representing App Component
 * @param {Object} props
 */

const history = createBrowserHistory();

const App = (props) => {
  // set isSigningIn flag to false after a 10 seconds timeout to handle any errors which may block user flow
  // useEffect(() => {
  //   setTimeout(() => props.setIsSigningFlag(false), 10000);
  // });

  return props.fetching || props.isSigningIn ? (
    <LoadingPage />
  ) : (
    <Routes history={history} />
  );
};
// const mapStateToProps = ({ userProfile, app }) => ({
//   fetching: userProfile.fetching,
//   isSigningIn: app.isSigningIn,
// });

// const mapDispatchToProps = (dispatch) => ({
//   setIsSigningFlag: (isSigningIn) => dispatch(setIsSigningFlag(isSigningIn)),
// });

export default App;
