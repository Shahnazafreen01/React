import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";

function Slider(){
  const slides = [
    { title: "Complete Auth Flow", desc: "Beautiful dark/light mode with smooth transitions, persisted across all pages and user sessions." },
    { title: "Fully Responsive", desc: "Works perfectly on mobile, tablet and desktop." },
    { title: "Easy to Customize", desc: "Change colors, theme and pages in minutes." }
  ];
  const [cur, setCur] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setCur(p => (p+1)%3), 3000);
    return ()=> clearInterval(t);
  },[]);
  return(
    <div style={{ background:"white", borderRadius:"18px", padding:"40px 25px", width:"360px", textAlign:"center", position:"relative", border:"2px solid #0f1e4e" }}>
      <button onClick={()=> setCur((cur-1+3)%3)} style={{ position:"absolute", left:"12px", top:"50%", background:"#7dd3c8", border:"none", width:"28px", height:"28px", borderRadius:"8px", cursor:"pointer" }}>‹</button>
      <button onClick={()=> setCur((cur+1)%3)} style={{ position:"absolute", right:"12px", top:"50%", background:"#7dd3c8", border:"none", width:"28px", height:"28px", borderRadius:"8px", cursor:"pointer" }}>›</button>
      <h3 style={{fontSize:"15px", margin:0}}>{slides[cur].title}</h3>
      <p style={{fontSize:"11px", color:"#64748b", marginTop:"12px"}}>{slides[cur].desc}</p>
      <div style={{display:"flex", justifyContent:"center", gap:"6px", marginTop:"35px"}}>
        {slides.map((_,i)=><div key={i} onClick={()=>setCur(i)} style={{width: cur===i?"18px":"8px", height:"8px", borderRadius:"10px", background: cur===i?"#2dd4bf":"#e2e8f0", cursor:"pointer"}}/>)}
      </div>
    </div>
  )
}

export default function LandingPage(){
  const navigate = useNavigate();
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return(
    <div style={{background:"#f1f5f9", minHeight:"100vh"}}>
      <Navbar />

    
      <div id="top-section" style={{display:"flex", justifyContent:"space-around", alignItems:"center", padding:"70px 30px", flexWrap:"wrap", gap:"30px"}}>
        <div style={{maxWidth:"380px"}}>
          <h1 style={{fontSize:"28px", fontWeight:"800", lineHeight:"1.2"}}>Launch your Web Tech practice site in minutes</h1>
          <p style={{fontSize:"11px", color:"#475569", marginTop:"12px", lineHeight:"1.5"}}>A clean, modern starter template with Login, Signup, Dashboard, Profile and Logout pages using only HTML/CSS/JS and browser localStorage.</p>
          <div style={{display:"flex", gap:"10px", marginTop:"18px"}}>
            <button onClick={()=> navigate("/signup")} style={{background:"#5eead4", border:"1px solid #5eead4", padding:"7px 14px", borderRadius:"18px", fontSize:"11px", fontWeight:"bold", cursor:"pointer"}}>Sign Up</button>
            <button onClick={()=> navigate("/login")} style={{background:"white", border:"1px solid #cbd5e1", padding:"7px 14px", borderRadius:"18px", fontSize:"11px", cursor:"pointer"}}>I already have an account</button>
          </div>
        </div>
        <Slider />
      </div>

      
      <div id="about-section" style={{padding:"60px 20px", display:"flex", justifyContent:"center"}}>
        <div style={{maxWidth:"500px", width:"100%", textAlign:"center"}}>
          <h2>About This Project</h2>
          <p style={{fontSize:"11px", color:"#475569"}}>This template is designed for students and developers to practice modern web fundamentals.</p>
          <div style={{marginTop:"20px"}}>
            {[...Array(6)].map((_,i)=><div key={i} style={{border:"1px solid #7dd3c8", background:"white", borderRadius:"10px", padding:"12px", fontSize:"11px", marginBottom:"10px"}}>Single-file pages you can open directly in any modern browser</div>)}
          </div>
        </div>
      </div>

    
      <div id="services-section" style={{padding:"10px 20px 60px", display:"flex", justifyContent:"center"}}>
        <div style={{maxWidth:"1000px", width:"100%"}}>
          <h2 style={{textAlign:"center"}}>What's Included</h2>
          <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:"16px", marginTop:"20px"}}>
            {[...Array(6)].map((_,i)=><div key={i} style={{border:"1px solid #ccfbf1", background:"white", borderRadius:"12px", padding:"14px"}}>
              <b style={{fontSize:"11px"}}>Authentication Templates</b>
              <p style={{fontSize:"10px", color:"#475569"}}>Beautiful login and signup forms with real-time validation and localStorage integration.</p>
            </div>)}
          </div>
        </div>
      </div>

    
      <div style={{background:"#0f1e4e", color:"white", padding:"18px 30px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap"}}>
        <p style={{fontSize:"10px", margin:0}}>© 2025 WebTech Practice</p>
        <div style={{display:"flex", gap:"8px"}}>
          <button onClick={()=> scrollTo("about-section")} style={{background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"5px 12px", borderRadius:"8px", fontSize:"10px", cursor:"pointer"}}>About</button>
          <button onClick={()=> scrollTo("services-section")} style={{background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"5px 12px", borderRadius:"8px", fontSize:"10px", cursor:"pointer"}}>Services</button>
          <button onClick={()=> scrollTo("services-section")} style={{background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"5px 12px", borderRadius:"8px", fontSize:"10px", cursor:"pointer"}}>Theme</button>
          <button onClick={()=> navigate("/login")} style={{background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"5px 12px", borderRadius:"8px", fontSize:"10px", cursor:"pointer"}}>Login</button>
          <button onClick={()=> navigate("/signup")} style={{background:"#5eead4", border:"1px solid #5eead4", color:"#0f1e4e", padding:"5px 12px", borderRadius:"8px", fontSize:"10px", fontWeight:"bold", cursor:"pointer"}}>Sign Up</button>
        </div>
      </div>
    </div>
  )
}