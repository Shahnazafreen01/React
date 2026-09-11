const styles = {
  slider: {
    width: "100%",
    maxWidth: "445px",
    height: "265px",
    backgroundColor: "#ffffff",
    border: "2px solid #9aa0aa",
    borderRadius: "18px",
    overflow: "hidden",
    position: "relative",
    boxSizing: "border-box",
    boxShadow: "0 2px 3px rgba(0,0,0,0.18)",
  },

  track: {
    display: "flex",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
  },

  slide: {
    minWidth: "100%",
    height: "100%",
    boxSizing: "border-box",
    padding: "60px 75px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  title: {
    fontSize: "18px",
    margin: "0 0 15px",
    color: "#25262b",
  },

  text: {
    maxWidth: "270px",
    fontSize: "12px",
    lineHeight: "1.45",
    color: "#30333a",
    margin: 0,
  },

  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "38px",
    height: "38px",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#45d8d0",
    color: "#07336a",
    fontSize: "28px",
    cursor: "pointer",
    zIndex: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  leftArrow: {
    left: "10px",
  },

  rightArrow: {
    right: "10px",
  },

  dots: {
    position: "absolute",
    bottom: "13px",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    gap: "9px",
    zIndex: 5,
  },

  dot: {
    width: "20px",
    height: "10px",
    padding: 0,
    border: "none",
    borderRadius: "10px",
    backgroundColor: "#edf0f2",
    cursor: "pointer",
  },

  activeDot: {
    backgroundColor: "#45d8d0",
  },
};

export default styles;