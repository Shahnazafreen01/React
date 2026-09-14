import React, { useState } from "react";
import "./SignupStyle.jsx";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    // Remove error when user starts correcting the field
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    // First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.firstName)) {
      newErrors.firstName = "Only letters are allowed";
    }

    // Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (!/^[A-Za-z ]+$/.test(formData.lastName)) {
      newErrors.lastName = "Only letters are allowed";
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    // Password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Za-z]/.test(formData.password)) {
      newErrors.password = "Password must contain a letter";
    } else if (!/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must contain a number";
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // Terms
    if (!formData.terms) {
      newErrors.terms = "You must agree to the Terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess("Account created successfully!");

      console.log("Signup Data:", formData);

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      });
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        <h1>Create your account</h1>

        <p className="subtitle">
          Sign up to access the practice dashboard.
        </p>

        <form onSubmit={handleSubmit}>

          {/* First Name + Last Name */}
          <div className="name-row">

            <div className="form-group">
              <label>First name:</label>

              <input
                type="text"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
              />

              {errors.firstName && (
                <span className="error">
                  {errors.firstName}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Last Name:</label>

              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />

              {errors.lastName && (
                <span className="error">
                  {errors.lastName}
                </span>
              )}
            </div>

          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email Address:</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}
          </div>

          {/* Password + Confirm Password */}
          <div className="name-row">

            <div className="form-group">
              <label>Password:</label>

              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />

              {errors.password && (
                <span className="error">
                  {errors.password}
                </span>
              )}
            </div>

            <div className="form-group">
              <label>Confirm Password:</label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              {errors.confirmPassword && (
                <span className="error">
                  {errors.confirmPassword}
                </span>
              )}
            </div>

          </div>

          <p className="password-info">
            Use at least 8 characters, with a letter & number
          </p>

          {/* Terms */}
          <div className="terms-section">

            <label className="terms-label">

              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
              />

              <span>
                I agree to the Terms
              </span>

            </label>

            {errors.terms && (
              <span className="error terms-error">
                {errors.terms}
              </span>
            )}

          </div>

          {/* Button */}
          <button
            type="submit"
            className="create-button"
          >
            Create Account
          </button>

          {/* Success */}
          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

        </form>

        {/* Sign in */}
        <p className="signin-text">
          Already have account?
          <span className="signin-link">
            Sign in
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;