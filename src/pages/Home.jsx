import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTheme } from "../theme/themeContext";

const Home = () => {
  const { theme } = useTheme();

  const features = [
    {
      title: "Authentication Templates",
      text: "Beautiful sign in and sign up forms with responsive layouts and reusable components.",
    },
    {
      title: "Administration Templates",
      text: "Dashboard and admin layouts with responsive interfaces for your projects.",
    },
    {
      title: "Authentication Templates",
      text: "Creative login and registration pages with modern responsive designs.",
    },
    {
      title: "Authentication Templates",
      text: "Simple pages that help you practice responsive web development.",
    },
    {
      title: "Authentication Templates",
      text: "Modern UI components with clean layouts and reusable elements.",
    },
    {
      title: "Authentication Templates",
      text: "Practice different web designs and improve your development skills.",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: theme.background,
      color: theme.text,
      fontFamily: "Arial, sans-serif",
    },

    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "50px",
      padding: "70px 9%",
      boxSizing: "border-box",
    },

    heroLeft: {
      width: "45%",
    },

    heading: {
      fontSize: "38px",
      lineHeight: "1.2",
      marginBottom: "20px",
    },

    paragraph: {
      color: theme.secondaryText,
      lineHeight: "1.6",
      fontSize: "15px",
      marginBottom: "30px",
    },

    primaryButton: {
      display: "inline-block",
      textDecoration: "none",
      backgroundColor: theme.accent,
      color: "white",
      padding: "13px 25px",
      borderRadius: "7px",
      marginRight: "12px",
      fontWeight: "600",
    },

    secondaryButton: {
      display: "inline-block",
      textDecoration: "none",
      color: theme.text,
      border: `1px solid ${theme.border}`,
      padding: "12px 22px",
      borderRadius: "7px",
    },

    slider: {
      width: "48%",
      minHeight: "250px",
      border: `2px solid ${theme.border}`,
      borderRadius: "22px",
      padding: "35px",
      boxSizing: "border-box",
      boxShadow: "0 5px 20px rgba(0,0,0,0.08)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      position: "relative",
    },

    sliderTitle: {
      textAlign: "center",
      fontSize: "20px",
      marginBottom: "15px",
    },

    sliderText: {
      textAlign: "center",
      color: theme.secondaryText,
      lineHeight: "1.5",
    },

    arrow: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "38px",
      height: "38px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: theme.accent,
      color: "white",
      fontSize: "20px",
      cursor: "pointer",
    },

    about: {
      padding: "30px 20%",
      textAlign: "center",
    },

    sectionTitle: {
      fontSize: "28px",
      marginBottom: "25px",
    },

    aboutText: {
      color: theme.secondaryText,
      lineHeight: "1.7",
    },

    list: {
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginTop: "25px",
    },

    listItem: {
      border: `1px solid ${theme.border}`,
      borderRadius: "4px",
      padding: "15px",
      color: theme.secondaryText,
      backgroundColor: theme.card,
    },

    included: {
      padding: "50px 7%",
    },

    includedTitle: {
      textAlign: "center",
      fontSize: "28px",
      marginBottom: "35px",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px",
    },

    card: {
      backgroundColor: theme.card,
      border: `1px solid ${theme.border}`,
      borderRadius: "16px",
      padding: "25px",
      minHeight: "130px",
      boxSizing: "border-box",
    },

    cardTitle: {
      fontSize: "16px",
      marginBottom: "10px",
    },

    cardText: {
      color: theme.secondaryText,
      lineHeight: "1.5",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <Navbar />

    
      <section style={styles.hero}>
        <div style={styles.heroLeft}>
          <h1 style={styles.heading}>
            Launch your Web Tech
            <br />
            practice site in minutes
          </h1>

          <p style={styles.paragraph}>
            A clean, modern practice platform using Login, Signup,
            Dashboard, Profile and Layout pages using HTML/CSS and
            JavaScript. Perfect for learning and practicing web
            development fundamentals.
          </p>

          <Link to="/get-started" style={styles.primaryButton}>
            Sign Up
          </Link>

          <Link to="/get-started" style={styles.secondaryButton}>
            Launch tour on screen
          </Link>
        </div>

        
        <div style={styles.slider}>
          <button
            style={{
              ...styles.arrow,
              left: "12px",
            }}
          >
            ‹
          </button>

          <h2 style={styles.sliderTitle}>Complete Auth Flow</h2>

          <p style={styles.sliderText}>
            Build polished practice sites with reusable navigation,
            forms and pages all working together.
          </p>

          <button
            style={{
              ...styles.arrow,
              right: "12px",
            }}
          >
            ›
          </button>

          <div
            style={{
              textAlign: "center",
              marginTop: "25px",
              color: theme.accent,
            }}
          >
            ● ○ ○
          </div>
        </div>
      </section>

      
      <section style={styles.about}>
        <h2 style={styles.sectionTitle}>About This Project</h2>

        <p style={styles.aboutText}>
          This experimental site template is designed for students and
          developers to practice modern web development concepts such as
          navigation, responsive layouts, authentication forms, theme
          management and reusable components.
        </p>

        <div style={styles.list}>
          <div style={styles.listItem}>
            Single-file pages with clean layouts
          </div>

          <div style={styles.listItem}>
            Easy-to-use pages for your practice site
          </div>

          <div style={styles.listItem}>
            Responsive layouts for different screen sizes
          </div>

          <div style={styles.listItem}>
            Login and signup practice pages
          </div>

          <div style={styles.listItem}>
            Reusable React components
          </div>

          <div style={styles.listItem}>
            Theme switching functionality
          </div>
        </div>
      </section>

    
      <section style={styles.included}>
        <h2 style={styles.includedTitle}>What's Included</h2>

        <div style={styles.grid}>
          {features.map((feature, index) => (
            <div style={styles.card} key={index}>
              <h3 style={styles.cardTitle}>{feature.title}</h3>

              <p style={styles.cardText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;