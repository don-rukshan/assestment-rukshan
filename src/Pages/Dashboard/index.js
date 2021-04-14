import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Body from "./Body";

import "./styles.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Monitor");

  return (
    <div className="container">
      <Navbar currentTab={activeTab} />
      <Body />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
