import React from "react";
import Routes from "./Routes";
import { createBrowserHistory } from "history";

import "./App.css";

const history = createBrowserHistory();

const App = () => {
  return <Routes history={history} />;
};

export default App;
