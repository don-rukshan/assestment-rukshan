import React, { useState, useEffect } from "react";
import Navbar from "./navbar/Navbar.js";
import Sidebar from "./Sidebar/Sidebar.js";
import "./styles.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Monitor");

  return (
    <div className="container">
      <Navbar currentTab={activeTab} />
      <h1>Dashboard</h1>
      <Sidebar />
    </div>
  );
};

export default Dashboard;
