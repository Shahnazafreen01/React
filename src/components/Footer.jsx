import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";

import styles from "./FooterStyle";

export default function Footer() {
  const navigate = useNavigate();

  const { toggleTheme } = useTheme();

  const goToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer style={styles.footer}>

      <p style={styles.copyright}>
        © 2025 WebTech Practice. Built for
        learning and growth.
      </p>

      <div style={styles.links}>

        <button
          style={styles.button}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          Home
        </button>

        <button
          style={styles.button}
          onClick={() =>
            goToSection("about")
          }
        >
          About
        </button>

        <button
          style={styles.button}
          onClick={() =>
            goToSection("services")
          }
        >
          Services
        </button>

        <button
          style={styles.button}
          onClick={toggleTheme}
        >
          Theme
        </button>

        <button
          style={styles.button}
          onClick={() =>
            navigate("/login")
          }
        >
          Login
        </button>

        <button
          style={styles.signup}
          onClick={() =>
            navigate("/signup")
          }
        >
          Sign Up
        </button>

      </div>

    </footer>
  );
}