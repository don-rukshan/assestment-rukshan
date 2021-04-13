import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { signInUser } from "../../redux/api/profile.api";
import { login } from "../../redux/userLoginSlice";
import bg from "../../assets/bg.jpg";

import "./styles.css";

const LoginPage = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalidUser, setInvalidUser] = useState(false);

  const history = useHistory();

  const initLoginUser = () => {
    signInUser(username, password)
      .then((res) => {
        setInvalidUser(false);
        dispatch(login(res.data));
        console.log(res);
        localStorage.setItem("user-info", JSON.stringify(username));
        history.push("/dashboard");
      })
      .catch(() => {
        setInvalidUser(true);
        setTimeout(() => setInvalidUser(false), 2000);
      });
  };

  return (
    <div className="outer__container">
      <div className="left__side">
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
          <button onClick={() => initLoginUser()} className="btn btn-primary">
            Login
          </button>
        </div>
      </div>

      {!invalidUser || (
        <div className="error__msg">
          Invalid Credentials
          <button onClick={() => setInvalidUser(false)}>X</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
