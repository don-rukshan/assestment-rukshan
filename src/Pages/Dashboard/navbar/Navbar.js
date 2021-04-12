import React, { useState, useEffect } from "react";
import "./styles.css";
import sos from "../../../assets/Group 323@3x.png";

const Navbar = ({ currentTab }) => {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="#">{currentTab}</a>
      </div>
      <div className="navbar__right">
        <button> Message </button>
        <a href="#">
          <img width="70" src={sos} alt="sos" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
