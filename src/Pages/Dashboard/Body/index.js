import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserList } from "../../../redux/api/profile.api";
import { selectUserList, staff } from "../../../redux/userListSlice";
import { selectUserLogin } from "../../../redux/userLoginSlice";

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
    <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          background: "white",
          margin: "21px",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "55px",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              padding: "15px",
              height: "55px",
              width: "100%",
              background: "green",
            }}
          ></div>
          <div
            style={{
              display: "flex",
              flex: 1,
              flexDirection: "row",
              padding: "15px",
              height: "55px",
              width: "100%",
              background: "yellow",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            background: "blue",
          }}
        >
          {" "}
          Dashboard
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "row",
          background: "white",
          margin: "21px 21px 21px 0",
          borderRadius: "6px",
          // background: "red",
        }}
      ></div>
    </div>
  );
};

export default Body;
