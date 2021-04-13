import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList, getUserLogs } from "../../../redux/api/profile.api";
import { staff } from "../../../redux/userListSlice";
import { selectUserLogin } from "../../../redux/userLoginSlice";
import { logs } from "../../../redux/userLogSlice";
import UserListView from "./userListView";
import UserLogView from "./userLogView";

import map from "../../../assets/80-cool-grey@3x.png";
import zoomIn from "../../../assets/Group 572@3x.png";
import zoomOut from "../../../assets/Group 571@3x.png";
import arrow from "../../../assets/Path 86@3x.png";
import bag from "../../../assets/Group 618.png";

import "./styles.css";

const Body = () => {
  const dispatch = useDispatch();
  const userLoginData = useSelector(selectUserLogin);

  const [currentUser, setCurrentUsers] = useState(1);
  const [logUser, setLogUser] = useState("Select A User");

  const ref = useRef();

  useEffect(() => {
    initUserList();
  }, [userLoginData]);

  useEffect(() => {
    initUserLogs();
  }, [currentUser]);

  useEffect(() => {
    console.log(ref.current.clientHeight);
  });

  const initUserList = async () => {
    await getUserList(userLoginData.token).then((res) => {
      for (let i = 1; i <= res.data.length; i++) {
        dispatch(
          staff(
            res.data.map((staff) => ({
              user_id: i++,
              name: staff.name,
            }))
          )
        );
      }
    });
  };

  const initUserLogs = async () => {
    await getUserLogs(userLoginData.token, currentUser).then((res) => {
      setLogUser(res.data.user);
      console.log(res.data.logs);
      dispatch(logs(res.data.logs));
    });
  };

  return (
    <div className="__container">
      <div className="left__box">
        <div className="top__row">
          <div className="top__leftbox">Staff</div>
          <div className="top__rightbox">Employee</div>
        </div>
        <div className="bottom__row">
          <UserListView
            setMonitorUser={(setMonitorUser) => setCurrentUsers(setMonitorUser)}
          />
        </div>
      </div>

      <div className="right__box">
        <div className="top__row">
          <button className="map__btn">Reset Map</button>
          <img className="zoom__in" src={zoomIn} alt="zoomIn" />
          <img className="zoom__out" src={zoomOut} alt="zoomOut" />
          <img className="__arrow" src={arrow} alt="arrow" />
          <img
            ref={ref}
            style={{ width: "100%", height: "100%" }}
            src={map}
            alt="map"
          />
        </div>

        <div className="bottom__row">
          <div className="top__row">
            <div className="top__leftbox__fixed">{`History  ( ${logUser} )`}</div>
            <div className="top__activebox">All</div>
            <div className="top__rightbox">Location</div>
            <div className="top__rightbox">Message</div>
            <div className="top__rightbox">Alert</div>
            <div className="top__rightbox__icon">
              <img src={bag} alt="bag" />
            </div>
          </div>
          <div className="bottom__row">
            <div className="top__leftbox__fixed">Date</div>
            <div className="top__leftbox__fixed">Alert View</div>
            <div className="top__leftbox__fixed">Time</div>
            <div className="top__leftbox__fixed">Location</div>
          </div>
          <div
            className="top__leftbox__fixed"
            style={{ overflowY: "scroll", maxHeight: "60%" }}
          >
            <UserLogView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
