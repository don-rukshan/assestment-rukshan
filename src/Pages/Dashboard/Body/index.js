import React, { useState, useEffect } from "react";

const Body = () => {
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
