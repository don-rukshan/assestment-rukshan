import React from "react";
import { useSelector } from "react-redux";
import { selectUserLog } from "../../../redux/userLogSlice";

import "./styles.css";

const UserLogView = () => {
  const userLogData = useSelector(selectUserLog);

  return userLogData?.map((log) => {
    return (
      <div className="logView" key={log.id}>
        <div className="top__leftbox__fixed">{log.date}</div>
        <div className="top__leftbox__fixed">
          {log.alert_view === true ? "On" : "Off"}
        </div>
        <div className="top__leftbox__fixed">{log.time}</div>
        <div className="top__leftbox__fixed">
          <a
            href="#"
            onClick={() =>
              alert(`latitude: ${log.latitude} & longitude: ${log.longitude}`)
            }
          >
            Live Map
          </a>
        </div>
      </div>
    );
  });
};

export default UserLogView;
