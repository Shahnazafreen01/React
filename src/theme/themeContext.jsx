import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const themes = {
  light: {
    background: "#ffffff",
    text: "#151515",
    secondaryText: "#666666",
    primary: "#0f2d72",
    accent: "#36d9ca",
    card: "#ffffff",
    border: "#d8eeee",
    footer: "#0f2d72",
  },

  dark: {
    background: "#101522",
    text: "#ffffff",
    secondaryText: "#c5c5c5",
    primary: "#071b4d",
    accent: "#36d9ca",
    card: "#1b2333",
    border: "#38445b",
    footer: "#071b4d",
  },
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const theme = themes[mode];

  const toggleTheme = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};