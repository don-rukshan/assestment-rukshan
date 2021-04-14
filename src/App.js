import React from "react";
import "./App.css";
import Routes from "./Routes";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

const App = () => {
  return <Routes history={history} />;
};

export default App;
