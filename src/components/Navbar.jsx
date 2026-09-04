<<<<<<< HEAD
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const btn = { background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"6px 14px", borderRadius:"8px", fontSize:"12px", cursor:"pointer", marginLeft:"8px" };
  const btnP = {...btn, background:"#5eead4", border:"1px solid #5eead4", color:"#0f1e4e", fontWeight:"bold" };

  return (
    <div style={{ background:"#0f1e4e", color:"white", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 30px", position:"sticky", top:0, zIndex:100 }}>
      <b style={{cursor:"pointer"}} onClick={()=> scrollTo("top-section")}>WebTech Practice</b>
      <div>
        <button style={btn} onClick={()=> scrollTo("about-section")}>About</button>
        <button style={btn} onClick={()=> scrollTo("services-section")}>Services</button>
        <button style={btn} onClick={()=> scrollTo("services-section")}>Theme</button>
        <button style={btn} onClick={()=> navigate("/login")}>Login</button>
        <button style={btnP} onClick={()=> navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  );
}
=======
=======
>>>>>>> origin/main
import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        WebTech Practice
      </div>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#theme">Theme</a>
        <a href="#login">Login</a>

        <button className="signup-btn">
          Sign Up
        </button>
      </div>

    </nav>
  );
}

<<<<<<< HEAD
export default Navbar;
>>>>>>> 2d61c4c37dc45e5528f5c32caf9c606a25e696d4
=======
export default Navbar;
>>>>>>> origin/main
