import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        WebTech Practice
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#theme">Theme</a>
        <a href="#login">Login</a>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navbar;