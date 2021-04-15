import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/userLoginSlice";

import sos from "../../../assets/Group 323@3x.png";
import alarm from "../../../assets/alarm.PNG";
import radar from "../../../assets/spiral.png";
import "./styles.css";

const Navbar = ({ currentTab }) => {
  const dispatch = useDispatch();

  const [messageActive, setMessageActive] = useState(false);

  const handleLogout = () => {
    window.location.href = "/login";
    dispatch(logout());
  };

  const handleMessageClick = () => {
    setMessageActive(!messageActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">{currentTab}</div>
      <div className="navbar__right">
        <button
          style={{
            backgroundColor: messageActive ? "#ff124a" : "#ffffff",
            color: messageActive ? "#ffffff" : "#000000",
          }}
          onClick={() => handleMessageClick()}
        >
          {messageActive ? (
            <div>
              <img className="message__active" src={alarm} alt="alarm" />
              <img className="message__radar" src={radar} alt="radar" />
            </div>
          ) : null}
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
