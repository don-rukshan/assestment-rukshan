import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userLoginSlice";

import sos from "../../../assets/Group 323@3x.png";
import "./styles.css";

const Navbar = ({ currentTab }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.location.href = "/login";
    dispatch(logout());
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">{currentTab}</div>
      <div className="navbar__right">
        <button
          style={{ cursor: "pointer" }}
          onClick={() => console.log("message clicked")}
        >
          Message
        </button>
        <img
          width="70"
          onClick={() => handleLogout()}
          onMouseOver={() => console.log("Press to Logout")}
          src={sos}
          alt="sos"
        />
      </div>
    </nav>
  );
};

export default Navbar;
