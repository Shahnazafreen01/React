const styles = {
  navbar: {
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 8.8%",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    background: "transparent",
    border: "none",
    color: "#ffffff",
    fontSize: "17px",
    fontWeight: "700",
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  navButton: {
    background: "transparent",
    border: "1px solid #45d8d0",
    color: "#ffffff",
    borderRadius: "7px",
    padding: "8px 18px",
    fontSize: "12px",
    cursor: "pointer",
  },

  signupButton: {
    backgroundColor: "#45d8d0",
    border: "1px solid #45d8d0",
    color: "#ffffff",
    borderRadius: "7px",
    padding: "8px 18px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },
};

export default styles;