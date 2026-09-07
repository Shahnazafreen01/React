import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const styles = {
    container: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#102d70",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      padding: 0,
    },

    title: {
      color: "white",
      fontSize: "64px",
      fontWeight: "400",
      fontFamily: "Arial, sans-serif",
      letterSpacing: "1px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>WebTech Practice</h1>
    </div>
  );
};

export default Splash;