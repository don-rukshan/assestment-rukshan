import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList, getUserLogs } from "../../../api/profile.api";
import { staff } from "../../../redux/userListSlice";
import { logs } from "../../../redux/userLogSlice";
import { selectUserLogin } from "../../../redux/userLoginSlice";
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

  const [currentUser, setCurrentUser] = useState(1);
  const [logUser, setLogUser] = useState("Select A User");
  const [arrowClick, setArrowClick] = useState(false);

  useEffect(() => {
    initUserList();
  }, [userLoginData]);

  useEffect(() => {
    initUserLogs();
  }, [currentUser]);

  const initUserList = async () => {
    await getUserList(userLoginData.token)
      .then((res) => {
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
      })
      .catch((e) => console.log("Get Userlist Error", e));
  };

  const initUserLogs = async () => {
    await getUserLogs(userLoginData.token, currentUser)
      .then((res) => {
        setLogUser(res.data.user);
        console.log(res.data.logs);
        dispatch(logs(res.data.logs));
      })
      .catch((e) => {
        console.log("Get Userlogs Error", e);
        alert("Session Timeout !!\nStatus Code 429 (Too Many Requests)");
        setTimeout((window.location.href = "/login"), 3000);
      });
  };

  const handleUpArrow = () => {
    setArrowClick(!arrowClick);
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
            setMonitorUser={(setMonitorUser) => setCurrentUser(setMonitorUser)}
          />
        </div>
      </div>

      <div className="right__box">
        {!arrowClick ? (
          <div
            className="top__row maprow"
            style={{ height: arrowClick ? "10%" : null }}
          >
            <button className="map__btn">Reset Map</button>
            <img className="zoom__in" src={zoomIn} alt="zoomIn" />
            <img className="zoom__out" src={zoomOut} alt="zoomOut" />
            <img
              className="__arrow"
              src={arrow}
              onClick={() => handleUpArrow()}
              alt="arrow_up"
            />
            <img className="map__img" src={map} alt="map" />
          </div>
        ) : (
          <div
            className="top__row maprow"
            style={{ height: arrowClick ? "10%" : null }}
            onClick={() => handleUpArrow()}
          >
            <img className="map__img" src={map} alt="map" />
            <p className="arrow__down">
              Live Location Map Here
              <img className="arrow__down__icon" src={arrow} alt="arrow_down" />
            </p>
          </div>
        )}

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
            style={{ overflowY: "auto", maxHeight: "60%" }}
          >
            <UserLogView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
