import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    // Agar user dusre page pe hai to pehle home pe lao, fir scroll karo
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ background:"#0f1e4e", color:"white", display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 30px", position:"sticky", top:0, zIndex:100 }}>
      
      <b style={{cursor:"pointer"}} onClick={()=> scrollTo("top-section")}>WebTech Practice</b>
      
      <div style={{display:"flex", alignItems:"center"}}>
        <button type="button" onClick={()=> scrollTo("about-section")} style={{ background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"6px 14px", borderRadius:"8px", fontSize:"12px", cursor:"pointer", marginLeft:"8px" }}>About</button>
        
        <button type="button" onClick={()=> scrollTo("services-section")} style={{ background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"6px 14px", borderRadius:"8px", fontSize:"12px", cursor:"pointer", marginLeft:"8px" }}>Services</button>
        
        <button type="button" onClick={()=> scrollTo("services-section")} style={{ background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"6px 14px", borderRadius:"8px", fontSize:"12px", cursor:"pointer", marginLeft:"8px" }}>Theme</button>
        
        <button type="button" onClick={()=> navigate("/login")} style={{ background:"transparent", border:"1px solid #5a6fb5", color:"white", padding:"6px 14px", borderRadius:"8px", fontSize:"12px", cursor:"pointer", marginLeft:"8px" }}>Login</button>
        
        {/* YE SIGN UP BUTTON AB 100% KAAM KAREGA */}
        <button type="button" onClick={()=> navigate("/signup")} style={{ background:"#5eead4", border:"1px solid #5eead4", color:"#0f1e4e", padding:"6px 14px", borderRadius:"8px", fontSize:"12px", fontWeight:"bold", cursor:"pointer", marginLeft:"8px" }}>Sign Up</button>
      </div>
    </div>
  );
}