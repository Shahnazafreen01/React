import React from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";

import { useTheme } from "../context/ThemeContext";

import styles from "./HomeStyle";

export default function Home() {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const isDark = theme === "dark";

  const pageStyle = {
    ...styles.page,
    backgroundColor: isDark
      ? "#111827"
      : "#f0f2f4",
    color: isDark
      ? "#ffffff"
      : "#24252a",
  };

  const sectionStyle = {
    ...styles.section,
    backgroundColor: isDark
      ? "#111827"
      : "#f0f2f4",
  };

  return (
    <div style={pageStyle}>

      <Navbar />

      {/* ================= HERO ================= */}

      <section style={styles.hero}>

        <div style={styles.heroContent}>

          <h1 style={styles.heroTitle}>
            Launch your Web Tech
            <br />
            practice site in minutes
          </h1>

          <p style={styles.heroText}>
            A clean, modern starter template with
            Login, Signup, Dashboard, Profile and
            Logout pages using only HTML/CSS/JS and
            browser localStorage. Perfect for learning
            and practicing web development fundamentals.
          </p>

          <div style={styles.heroButtons}>

            <button
              style={styles.signupButton}
              onClick={() =>
                navigate("/signup")
              }
            >
              Sign Up
            </button>

            <button
              style={styles.accountButton}
              onClick={() =>
                navigate("/login")
              }
            >
              I already have an account
            </button>

          </div>

        </div>

        <Slider />

      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        style={sectionStyle}
      >

        <div style={styles.aboutContainer}>

          <h2 style={styles.sectionTitle}>
            About This Project
          </h2>

          <p style={styles.aboutDescription}>
            This comprehensive template is designed
            for students and developers to practice
            modern web fundamentals—responsive layouts,
            accessible forms, client-side state
            management, and component architecture—
            without any frameworks or complex build
            processes.
          </p>

          <div style={styles.aboutList}>

            <div style={styles.aboutItem}>
              Single-file pages you can open directly
              in any modern browser
            </div>

            <div style={styles.aboutItem}>
              Single-file pages you can open directly
              in any modern browser
            </div>

            <div style={styles.aboutItem}>
              Single-file pages you can open directly
              in any modern browser
            </div>

            <div style={styles.aboutItem}>
              Single-file pages you can open directly
              in any modern browser
            </div>

            <div style={styles.aboutItem}>
              Single-file pages you can open directly
              in any modern browser
            </div>

            <div style={styles.aboutItem}>
              Single-file pages you can open directly
              in any modern browser
            </div>

          </div>

        </div>

      </section>

      {/* ================= SERVICES ================= */}

      <section
        id="services"
        style={{
          ...sectionStyle,
          ...styles.servicesSection,
        }}
      >

        <h2 style={styles.sectionTitle}>
          What's Included
        </h2>

        <div style={styles.serviceGrid}>

          <ServiceCard />

          <ServiceCard />

          <ServiceCard />

          <ServiceCard />

          <ServiceCard />

          <ServiceCard />

        </div>

      </section>

      <Footer />

    </div>
  );
}

function ServiceCard() {
  return (
    <div style={styles.serviceCard}>

      <h3 style={styles.cardTitle}>
        Authentication Templates
      </h3>

      <p style={styles.cardText}>
        Beautiful login and signup forms with
        real-time validation, error handling,
        and seamless localStorage integration.
      </p>

    </div>
  );
}