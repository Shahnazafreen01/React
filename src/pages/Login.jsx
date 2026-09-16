import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginStyle.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Login Data:", {
        email,
        password,
        rememberMe,
      });

      alert("Login successful!");

      // Clear form
      setEmail("");
      setPassword("");
      setRememberMe(false);
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        {/* Heading */}
        <h1>Welcome Back</h1>

        <p className="login-subtitle">
          Sign in to continue to your dashboard
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="login-form-group">

            <label>Email Address:</label>

            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({
                  ...errors,
                  email: "",
                });
              }}
            />

            {errors.email && (
              <span className="login-error">
                {errors.email}
              </span>
            )}

          </div>

          {/* Password */}
          <div className="login-form-group">

            <label>Password:</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({
                  ...errors,
                  password: "",
                });
              }}
            />

            <p className="password-info">
              Password must be at least 6 characters long.
            </p>

            {errors.password && (
              <span className="login-error">
                {errors.password}
              </span>
            )}

          </div>

          {/* Remember + Forgot */}
          <div className="login-options">

            <label className="remember-me">

              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) =>
                  setRememberMe(e.target.checked)
                }
              />

              <span>
                Remember me for 30 days
              </span>

            </label>

            <a
              href="#forgot"
              className="forgot-password"
            >
              Forgot password?
            </a>

          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="signin-button"
          >
            Sign in
          </button>

        </form>

        {/* Signup */}
        <p className="signup-text">
          New to WebTech Practice?

          <Link
            to="/signup"
            className="create-account"
          >
            Create an account
          </Link>
        </p>

      </div>

    </div>
  );
};

export default Login;