import React from "react";

function AuthFlow() {
  return (
    <div className="auth-card">

      <button className="arrow left">
        ‹
      </button>

      <div className="auth-content">

        <h3>Complete Auth Flow</h3>

        <p>
          Build beautiful authentication screens
          with simple validation and responsive design.
        </p>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>

      </div>

      <button className="arrow right">
        ›
      </button>

    </div>
  );
}

export default AuthFlow;