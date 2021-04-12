import React, { useEffect, useState } from "react";
// import { signInUser } from "../../../redux/api/profile.api";
import { useHistory } from "react-router-dom";
import bg from "../../assets/bg.jpg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/login");
    }
  }, []);

  const handleLogin = () => {
    console.log(username, password);
    // signInUser(username, password).then(() => {
    window.location.href = "/dashboard";
    // });
    localStorage.setItem("user-info", JSON.stringify(username));
    history.push("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 2,
          maxHeight: "100%",
          overflow: "hidden",
        }}
      >
        <img style={{ width: "100%" }} src={bg} alt="bg" />
      </div>

      <div
        style={{
          display: "flex",
          flex: 2,
          flexDirection: "column",
          height: "100%",
          justifyContent: "flex-start",
          alignItems: "center",
          background: "whitesmoke",
        }}
      >
        <div
          style={{
            color: "rgba(0,0,0,0.4)",
            fontSize: "27px",
            fontWeight: "400",
            marginTop: "28%",
            marginBottom: "21px",
          }}
        >
          Login to continue
        </div>

        <div>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
            style={{
              height: "45px",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "6px",
              padding: "2px",
              paddingLeft: "6px",
              width: "300px",
            }}
          />
          <div style={{ marginTop: 10 }} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            style={{
              height: "45px",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "6px",
              padding: "2px",
              paddingLeft: "6px",
              width: "300px",
            }}
          />
          <div style={{ marginTop: 20 }} />
          <button
            onClick={() => handleLogin()}
            className="btn btn-primary"
            style={{
              height: "35px",
              border: "1px solid rgba(0,0,0,0.1)",
              borderRadius: "6px",
              padding: "2px",
              paddingLeft: "6px",
              width: "308px",
              textAlign: "center",
              background: "#ff124a",
              color: "white",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
