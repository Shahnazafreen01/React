import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginStyle";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div style={styles.page}>

      <form
        style={styles.box}
        onSubmit={handleLogin}
      >

        <h2 style={styles.title}>
          Login
        </h2>

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          type="submit"
          style={styles.button}
        >
          Login
        </button>

        <button
          type="button"
          style={styles.linkButton}
          onClick={() => navigate("/signup")}
        >
          Create an account
        </button>

      </form>

    </div>
  );
}