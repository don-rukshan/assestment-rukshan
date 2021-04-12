import React, { useState } from "react";
import { signInUser } from "../../redux/api/profile.api";
import { useHistory } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import "./styles.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);

  const history = useHistory();

  const handleLogin = () => {
    console.log(username, password);
    signInUser(username, password)
      .then((res) => {
        console.log("Response", res);
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
    <div className="container">
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

      <div className="right__side">
        <div className="right__text">Login to continue</div>

        <div className="form_input">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
          <div style={{ marginTop: 10 }} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
          <div style={{ marginTop: 20 }} />

          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </div>

      {!invalidUser || (
        <div className="error_msg">
          Invalid User
          <button onClick={() => setInvalidUser(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
