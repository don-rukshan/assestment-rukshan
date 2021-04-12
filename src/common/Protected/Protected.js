import React from "react";
import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";

/**
 * Returns a component or Redirect user based on loggedIn status
 */
const Protected = ({
  Component,
  loggedIn,
  isFirstLogin,
  basicProfile,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) => (
      <SubComp
        loggedIn={loggedIn}
        props={{ ...props, isFirstLogin, basicProfile }}
        Component={Component}
      />
    )}
  />
);

/**
 * Selects the and returns the sub component based on the loggedIn status
 */
export const SubComp = ({ loggedIn, props, Component }) =>
  loggedIn === true ? <Component {...props} /> : <Redirect to="/login" />;

Protected.propTypes = {
  Component: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Protected;
