import React from "react";
import { useNavigate } from "react-router-dom";

import { useTheme } from "../context/ThemeContext";
import styles from "./NavbarStyle";

export default function Navbar() {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useTheme();

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
    <nav
      style={{
        ...styles.navbar,
        backgroundColor:
          theme === "light"
            ? "#102d78"
            : "#071633",
      }}
    >
      <button
        style={styles.logo}
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        WebTech Practice
      </button>

      <div style={styles.navLinks}>

        <button
          style={styles.navButton}
          onClick={() => goToSection("about")}
        >
          About
        </button>

        <button
          style={styles.navButton}
          onClick={() => goToSection("services")}
        >
          Services
        </button>

        <button
          style={styles.navButton}
          onClick={toggleTheme}
        >
          Theme
        </button>

        <button
          style={styles.navButton}
          onClick={() => navigate("/login")}
        >
          Login
        </button>

        <button
          style={styles.signupButton}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>

      </div>
    </nav>
  );
}