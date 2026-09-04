import { Link } from 'react-router-dom';
export default function LoginPage(){
  return(
    <div style={{background:"#f8fafc", minHeight:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{background:"white", width:"340px", padding:"28px 22px", borderRadius:"16px", borderTop:"3px solid #7dd3c8", boxShadow:"0 8px 24px rgba(0,0,0,0.06)"}}>
        <h2 style={{textAlign:"center", margin:0, fontSize:"18px"}}>Welcome Back</h2>
        <p style={{textAlign:"center", fontSize:"11px", color:"#64748b"}}>Sign in to continue to your dashboard</p>
        <label style={{fontSize:"11px", fontWeight:"bold"}}>Email Address:</label>
        <input placeholder="Enter your email address" style={{width:"100%", padding:"9px 12px", borderRadius:"8px", border:"1px solid #cbd5e1", marginTop:"4px", fontSize:"11px", boxSizing:"border-box"}}/>
        <label style={{fontSize:"11px", fontWeight:"bold", marginTop:"12px", display:"block"}}>Password:</label>
        <input type="password" placeholder="Enter your password" style={{width:"100%", padding:"9px 12px", borderRadius:"8px", border:"1px solid #cbd5e1", marginTop:"4px", fontSize:"11px", boxSizing:"border-box"}}/>
        <p style={{fontSize:"10px", color:"#64748b"}}>Password must be at least 6 characters long.</p>
        <button style={{width:"100%", background:"#4dc5b8", color:"white", border:"none", padding:"10px", borderRadius:"8px", marginTop:"12px", fontWeight:"bold", cursor:"pointer"}}>Sign In</button>
        <p style={{textAlign:"center", fontSize:"10px", marginTop:"12px"}}>New to WebTech Practice? <Link to="/signup" style={{color:"#4dc5b8", textDecoration:"none"}}>Create an account.</Link></p>
      </div>
    </div>
  )
}