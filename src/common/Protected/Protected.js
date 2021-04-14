import React from "react";
import { PropTypes } from "prop-types";
import { Route, Redirect } from "react-router-dom";

const Protected = ({ Component, loggedIn }) => (
  <Route render={() => <SubComp loggedIn={loggedIn} Component={Component} />} />
);

export const SubComp = ({ loggedIn, Component }) =>
  loggedIn === true ? <Component /> : <Redirect to="/login" />;

Protected.propTypes = {
  Component: PropTypes.object.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default Protected;
