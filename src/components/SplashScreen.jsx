import React from "react";
import styles from "./SplashScreenStyle";

export default function SplashScreen() {
  return (
    <div style={styles.page}>
      <div style={styles.blueBox}>
        <h1 style={styles.title}>
          WebTech Practice
        </h1>
      </div>
    </div>
  );
}