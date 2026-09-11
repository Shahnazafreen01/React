const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    transition: "background-color 0.3s",
  },

  /* HERO */

  hero: {
    minHeight: "480px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "70px",
    padding: "55px 9%",
    boxSizing: "border-box",
  },

  heroContent: {
    width: "390px",
  },

  heroTitle: {
    fontSize: "26px",
    lineHeight: "1.18",
    margin: "0 0 18px",
    fontWeight: "700",
  },

  heroText: {
    fontSize: "12px",
    lineHeight: "1.45",
    color: "#30333a",
    margin: "0 0 24px",
  },

  heroButtons: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  signupButton: {
    backgroundColor: "#45d8d0",
    color: "#ffffff",
    border: "none",
    borderRadius: "7px",
    padding: "10px 17px",
    fontSize: "12px",
    fontWeight: "700",
    cursor: "pointer",
  },

  accountButton: {
    backgroundColor: "transparent",
    color: "#30333a",
    border: "1px solid #45d8d0",
    borderRadius: "7px",
    padding: "10px 17px",
    fontSize: "12px",
    cursor: "pointer",
  },

  /* COMMON SECTION */

  section: {
    minHeight: "100vh",
    width: "100%",
    padding: "75px 8%",
    boxSizing: "border-box",
    scrollMarginTop: "60px",
  },

  sectionTitle: {
    textAlign: "center",
    fontSize: "25px",
    margin: "0 0 25px",
    color: "#25262b",
  },

  /* ABOUT */

  aboutContainer: {
    maxWidth: "500px",
    margin: "0 auto",
  },

  aboutDescription: {
    fontSize: "12px",
    lineHeight: "1.45",
    color: "#30333a",
    margin: "0 0 25px",
  },

  aboutList: {
    display: "flex",
    flexDirection: "column",
    gap: "11px",
  },

  aboutItem: {
    minHeight: "42px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
    padding: "8px 15px",
    border: "1px solid #45d8d0",
    borderRadius: "7px",
    backgroundColor: "#fafbfc",
    fontSize: "12px",
    textAlign: "center",
  },

  /* SERVICES */

  servicesSection: {
    paddingTop: "25px",
  },

  serviceGrid: {
    maxWidth: "900px",
    margin: "45px auto 0",
    display: "grid",
    gridTemplateColumns:
      "repeat(3, 1fr)",
    gap: "14px",
  },

  serviceCard: {
    minHeight: "145px",
    padding: "20px 22px",
    backgroundColor: "#fafbfc",
    border: "1px solid #bdeff0",
    borderRadius: "18px",
    boxSizing: "border-box",
    boxShadow:
      "0 3px 5px rgba(50,100,100,0.18)",
  },

  cardTitle: {
    fontSize: "13px",
    margin: "0 0 13px",
    color: "#16181d",
  },

  cardText: {
    fontSize: "12px",
    lineHeight: "1.4",
    margin: 0,
    color: "#17191d",
  },
};

export default styles;