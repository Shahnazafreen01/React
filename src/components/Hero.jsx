import React from "react";

function Hero() {
  return (
    <div className="hero-content">

      <h1>
        Launch your Web Tech
        <br />
        practice site in minutes
      </h1>

      <p>
        A clean, modern responsive website template designed
        for practicing web development and authentication flows.
      </p>

      <div className="hero-buttons">

        <button className="primary-btn">
          Sign Up
        </button>

        <button className="secondary-btn">
          I already have an account
        </button>

      </div>

    </div>
  );
}

export default Hero;