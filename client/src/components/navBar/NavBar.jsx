import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="navLeft">
        <h1>ECHO</h1>
      </div>
      <div className="navRight">
        <button className="navBtn">Sign-in</button>
      </div>
    </div>
  );
};

export default NavBar;
