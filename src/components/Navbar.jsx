import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/themeContext";

const Navbar = () => {
  const { theme } = useTheme();

  const styles = {
    nav: {
      height: "70px",
      backgroundColor: theme.primary,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 7%",
      boxSizing: "border-box",
    },

    logo: {
      color: "white",
      fontSize: "20px",
      fontWeight: "700",
    },

    menu: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },

    button: {
      textDecoration: "none",
      color: "white",
      border: "1px solid rgba(255,255,255,0.25)",
      padding: "10px 20px",
      borderRadius: "10px",
      fontSize: "14px",
      background: "transparent",
    },

    signup: {
      backgroundColor: theme.accent,
      color: "#ffffff",
      border: "none",
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>WebTech Practice</div>

      <div style={styles.menu}>
        <Link to="/about" style={styles.button}>
          About
        </Link>

        <Link to="/get-started" style={styles.button}>
          Get started
        </Link>

        <Link to="/theme" style={styles.button}>
          Theme
        </Link>

        <Link to="/login" style={styles.button}>
          Login
        </Link>

        <Link
          to="/get-started"
          style={{
            ...styles.button,
            ...styles.signup,
          }}
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;