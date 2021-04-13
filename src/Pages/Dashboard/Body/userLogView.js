import React from "react";
import { selectUserLog } from "../../../redux/userLogSlice";
import { useSelector } from "react-redux";

import "./styles.css";

const UserLogView = () => {
  const userLogData = useSelector(selectUserLog);

  return userLogData.length > 0
    ? userLogData.map((log) => {
        return (
          <ul className="logView" key={log.id}>
            <div className="top__leftbox__fixed">{log.date}</div>
            <div className="top__leftbox__fixed">
              {log.alert_view === true ? "On" : "Off"}
            </div>
            <div className="top__leftbox__fixed">{log.time}</div>
            <div className="top__leftbox__fixed">
              <a
                href="#"
                onClick={() =>
                  alert(
                    `latitude: ${log.latitude} & longitude: ${log.longitude}`
                  )
                }
              >
                Live Map
              </a>
            </div>
          </ul>
        );
      })
    : null;
};

export default UserLogView;
