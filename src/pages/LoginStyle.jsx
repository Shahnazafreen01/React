const loginStyles = `

* {
  box-sizing: border-box;
}

.login-page {
  min-height: 100vh;
  width: 100%;

  background: #f1f3f5;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Arial, sans-serif;

  padding: 20px;
}


/* Login Card */

.login-card {
  width: 295px;

  background: #fafafe;

  border-radius: 16px;

  border-top: 2px solid #50d0ca;

  padding: 37px 27px 25px;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
}


/* Heading */

.login-card h1 {
  text-align: center;

  font-size: 17px;

  color: #111111;

  margin: 0 0 5px;

  font-weight: 700;
}


/* Subtitle */

.login-subtitle {
  text-align: center;

  font-size: 8px;

  color: #333333;

  margin: 0 0 34px;
}


/* Form Group */

.login-form-group {
  margin-bottom: 17px;
}


/* Label */

.login-form-group label {
  display: block;

  font-size: 8px;

  font-weight: 700;

  color: #111111;

  margin: 0 0 6px 6px;
}


/* Input */

.login-form-group input[type="email"],
.login-form-group input[type="password"] {

  width: 100%;

  height: 27px;

  border: 1px solid #55d1d0;

  border-radius: 7px;

  padding: 0 14px;

  font-size: 7px;

  outline: none;

  background: #f7f8f9;

  color: #333333;
}


/* Input Focus */

.login-form-group input:focus {

  border-color: #45c8c5;

  box-shadow:
    0 0 0 2px rgba(80, 200, 195, 0.10);
}


/* Placeholder */

.login-form-group input::placeholder {

  color: #555555;

  font-size: 7px;
}


/* Password Information */

.password-info {

  font-size: 8px;

  color: #222222;

  margin: 9px 0 0 6px;

  line-height: 1.4;
}


/* Error */

.login-error {

  display: block;

  color: #e53935;

  font-size: 7px;

  margin: 4px 0 0 6px;
}


/* Remember + Forgot */

.login-options {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-top: 18px;

  margin-bottom: 17px;
}


/* Remember Me */

.remember-me {

  display: flex;

  align-items: center;

  gap: 4px;

  font-size: 7px;

  color: #333333;

  cursor: pointer;
}


.remember-me input {

  width: 9px;

  height: 9px;

  margin: 0;

  cursor: pointer;

  accent-color: #4fc9c5;
}


/* Forgot Password */

.forgot-password {

  font-size: 7px;

  color: #4bc8c5;

  text-decoration: none;
}


.forgot-password:hover {

  text-decoration: underline;
}


/* Sign In Button */

.signin-button {

  width: 100%;

  height: 28px;

  border: none;

  border-radius: 7px;

  background: #4fc9c5;

  color: white;

  font-size: 8px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;
}


.signin-button:hover {

  background: #43bdb9;
}


.signin-button:active {

  transform: scale(0.99);
}


/* Signup Text */

.signup-text {

  font-size: 7px;

  color: #222222;

  margin: 16px 0 0 6px;
}


/* Create Account */

.create-account {

  color: #4bc8c5;

  text-decoration: none;

  margin-left: 3px;
}


.create-account:hover {

  text-decoration: underline;
}


/* Responsive */

@media (max-width: 400px) {

  .login-card {

    width: 100%;

    max-width: 295px;

  }

}

`;
const styleTag = document.createElement("style");

styleTag.innerHTML = loginStyles;

document.head.appendChild(styleTag);

export default loginStyles;