const signupStyles = `
  * {
    box-sizing: border-box;
  }

  .signup-page {
    min-height: 100vh;
    width: 100%;
    background: #f1f3f5;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Arial, sans-serif;
  }

  .signup-card {
    width: 430px;
    background: #ffffff;

    padding: 28px 30px 24px;

    border-radius: 18px;

    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);

    border-top: 3px solid #53c9c5;
  }

  .signup-card h1 {
    font-size: 22px;
    color: #111827;

    margin: 0 0 6px;

    font-weight: 700;
  }

  .subtitle {
    font-size: 11px;
    color: #333333;

    margin: 0 0 22px;
  }

  .name-row {
    display: grid;
    grid-template-columns: 1fr 1fr;

    gap: 10px;
  }

  .form-group {
    margin-bottom: 13px;
  }

  .form-group label {
    display: block;

    font-size: 10px;
    font-weight: 600;

    color: #222222;

    margin-bottom: 5px;
  }

  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="password"] {
    width: 100%;

    height: 34px;

    border: 1px solid #b8d8d8;

    border-radius: 7px;

    padding: 0 10px;

    font-size: 10px;

    outline: none;

    color: #333333;

    background: #ffffff;
  }

  .form-group input:focus {
    border-color: #50c8c3;

    box-shadow: 0 0 0 2px rgba(80, 200, 195, 0.12);
  }

  .form-group input::placeholder {
    color: #777777;
    font-size: 9px;
  }

  .error {
    display: block;

    color: #e53935;

    font-size: 9px;

    margin-top: 3px;
  }

  .password-info {
    font-size: 9px;

    color: #555555;

    margin: -4px 0 13px;
  }

  .terms-section {
    margin-bottom: 17px;
  }

  .terms-label {
    display: flex;

    align-items: center;

    gap: 5px;

    font-size: 9px;

    color: #555555;

    cursor: pointer;
  }

  .terms-label input {
    width: 11px;
    height: 11px;

    cursor: pointer;
  }

  .terms-error {
    margin-left: 16px;
  }

  .create-button {
    width: 100%;

    height: 36px;

    border: none;

    border-radius: 7px;

    background: #4fc8c3;

    color: white;

    font-size: 10px;

    cursor: pointer;

    transition: 0.2s;
  }

  .create-button:hover {
    background: #3db9b4;
  }

  .create-button:active {
    transform: scale(0.99);
  }

  .success-message {
    text-align: center;

    color: #219653;

    font-size: 10px;

    margin: 10px 0 0;
  }

  .signin-text {
    text-align: left;

    font-size: 9px;

    color: #555555;

    margin: 17px 0 0;
  }

  .signin-link {
    color: #4fc8c3;

    margin-left: 3px;

    cursor: pointer;

    font-weight: 500;
  }

  @media (max-width: 500px) {

    .signup-card {
      width: 92%;

      padding: 24px 20px;
    }

    .name-row {
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`;

// Add styles to page
const styleTag = document.createElement("style");
styleTag.innerHTML = signupStyles;
document.head.appendChild(styleTag);

export default signupStyles;