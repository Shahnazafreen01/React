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