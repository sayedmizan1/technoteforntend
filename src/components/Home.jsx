import React from "react";
import { Link } from "react-router-dom";
import Mainpage from "./main/Mainpage";
const Home = () => {
  return (
    <div>
      <h1>Hello!</h1>

      <Link to="/login">
       
        <button
          style={{
            border: "2px solid white",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </Link>

      <Link to="/signup">
      
        <button
          style={{
            border: "2px solid white",
            margin: "10px",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Signup
        </button>
      </Link>
    </div>
  );
};

export default Home;
