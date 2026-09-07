import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme/themeContext";

const Footer = () => {
  const { theme } = useTheme();

  const styles = {
    footer: {
      backgroundColor: theme.footer,
      color: "white",
      minHeight: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 7%",
      boxSizing: "border-box",
    },

    links: {
      display: "flex",
      gap: "25px",
    },

    link: {
      color: "white",
      textDecoration: "none",
    },
  };

  return (
    <footer style={styles.footer}>
      <p>© 2026 WebTech Practice. Built for learning and practice.</p>

      <div style={styles.links}>
        <Link to="/about" style={styles.link}>
          About
        </Link>

        <Link to="/get-started" style={styles.link}>
          Get Started
        </Link>

        <Link to="/theme" style={styles.link}>
          Theme
        </Link>

        <Link to="/login" style={styles.link}>
          Login
        </Link>

        <Link to="/get-started" style={styles.link}>
          Sign Up
        </Link>
      </div>
    </footer>
  );
};

export default Footer;