import React, { useState } from "react";

import { useHistory,Link } from "react-router-dom";
import "./Mainpage.css";
const MainpageSignup = () => {
  const [credentails, setcredentails] = useState({
    username: "",
    roles: "",
    password: "",
  });
  let history = useHistory();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3500/users/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentails.username,
        roles: credentails.roles,
        password: credentails.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.sucess) {
      localStorage.setItem("token", json.authtoken);
      history.push("/");
      alert("account create successfully");
    } else {
      alert("invalid ");
    }
  };
  const onChange = (e) => {
    setcredentails({ ...credentails, [e.target.name]: e.target.value });
  };
  return (
    <>
      <body1>
        <section class="container">
          <div class="login-container">
            <div class="circle circle-one"></div>
            <div class="form-container">
              <img
                src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
                alt="illustration"
                class="illustration"
              />
              <h1 class="opacity">LOGIN</h1>
              <form onSubmit={handlesubmit}>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={credentails.username}
                  onChange={onChange}
                  name="username"
                  aria-describedby="emailHelp"
                  placeholder="Enter Username"
                />
                <input
                  type="password"
                  className="form-control"
                  value={credentails.password}
                  onChange={onChange}
                  id="password"
                  name="password"
                  placeholder="Password"
                />
                <input
                  type="text"
                  className="form-control"
                  value={credentails.roles}
                  onChange={onChange}
                  id="roles"
                  name="roles"
                  placeholder="roles"
                />
                <button class="opacity">SUBMIT</button>
              </form>
              <div class="register-forget opacity">
                <Link  to="/">Home</Link>
                <a href="">FORGOT PASSWORD</a>
              </div>
            </div>
            <div class="circle circle-two"></div>
          </div>
          <div class="theme-btn-container"></div>
        </section>
      </body1>
    </>
  );
};

export default MainpageSignup;
