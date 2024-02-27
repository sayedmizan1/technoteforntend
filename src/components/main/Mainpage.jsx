import React, { useState } from "react";
import { useHistory,Link } from 'react-router-dom';
import "./Mainpage.css";
const Mainpage = () => {
    
  let history = useHistory();
  const [credentails, setcredentails] = useState({
    username: "",
    password: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3500/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: credentails.username,
        password: credentails.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.sucess) {
      localStorage.setItem("token", json.authToken);
      localStorage.setItem("user", credentails.username);
     
      history.push('/main');
      alert(`welcome ${credentails.username}`);
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
        <section className="container">
          <div className="login-container">
            <div className="circle circle-one"></div>
            <div className="form-container">
              <img
                src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
                alt="illustration"
                className="illustration"
              />
              <h1 className="opacity">LOGIN</h1>
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
                <button className="opacity">SUBMIT</button>
              </form>
              <div className="register-forget opacity">
                <Link to ="/signup">REGISTER</Link>
                <Link to="/">Home</Link>
              </div>
            </div>
            <div className="circle circle-two"></div>
          </div>
          <div className="theme-btn-container"></div>
        </section>
      </body1>
    </>
  );
};

export default Mainpage;
