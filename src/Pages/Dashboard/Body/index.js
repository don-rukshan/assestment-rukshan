import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../../redux/api/profile.api";
import { selectUserList, staff } from "../../../redux/userListSlice";
import { selectUserLogin } from "../../../redux/userLoginSlice";

import map from "../../../assets/80-cool-grey@3x.png";
import zoomIn from "../../../assets/Group 572@3x.png";
import zoomOut from "../../../assets/Group 571@3x.png";
import arrow from "../../../assets/Path 86@3x.png";

import "./styles.css";

const Body = () => {
  const dispatch = useDispatch();
  const userLoginData = useSelector(selectUserLogin);
  const userListData = useSelector(selectUserList);

  useEffect(() => {
    initUserList();
  }, [userLoginData]);

  const initUserList = () => {
    getUserList(userLoginData.token).then((res) => {
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

  console.log(userListData);
  return (
    <div className="__container">
      <div className="left__box">
        <div className="top__row">
          <div className="top__leftbox">Staff</div>
          <div className="top__rightbox">Employee</div>
        </div>
        <div className="bottom__row">Dashboard</div>
      </div>

      <div className="right__box">
        <div className="top__row">
          <button className="map__btn">Reset Map</button>
          <img style={{ width: "100%", height: "100%" }} src={map} alt="map" />
          <img className="zoom__in" src={zoomIn} alt="zoomIn" />
          <img className="zoom__out" src={zoomOut} alt="zoomOut" />
          <img className="__arrow" src={arrow} alt="arrow" />
        </div>
        <div className="bottom__row"></div>
      </div>
    </div>
  );
};

export default Body;
