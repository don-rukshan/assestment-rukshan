import React, { useEffect, useState } from "react";
import { signInUser } from "../../redux/api/profile.api";
import { useHistory } from "react-router-dom";
import bg from "../../assets/bg.jpg";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);

  const history = useHistory();

  const handleLogin = () => {
    console.log(username, password);
    signInUser(username, password)
      .then((res) => {
        console.log("Adoooooooooooo", res);
        setInvalidUser(false);
        localStorage.setItem("user-info", JSON.stringify(username));
        history.push("/dashboard");
      })
      .catch(() => {
        setInvalidUser(true);
        setTimeout(() => setInvalidUser(false), 2000);
      });
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

      {!invalidUser || (
        <div
          style={{
            height: "25px",
            padding: "15px",
            position: "absolute",
            right: 14,
            top: 14,
            background: "pink",
            textAlign: "center",
            borderRadius: "14px",
          }}
        >
          Invalid User
          <button
            style={{
              background: "none",
              border: "1px solid rgba(0,0,0,0.15)",
              height: "25px",
              width: "25px",
              textAlign: "center",
              borderRadius: "12px",
              marginLeft: "8px",
              cursor: "pointer",
            }}
            onClick={() => setInvalidUser(false)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
