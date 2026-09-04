import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", password:"", confirm:"" });
  const [agree, setAgree] = useState(true);

  const handleCreate = () => {
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      alert("Saare fields bharo!");
      return;
    }
    if (form.password.length < 8) {
      alert("Password kam se kam 8 characters ka hona chahiye");
      return;
    }
    if (form.password !== form.confirm) {
      alert("Password match nahi ho raha!");
      return;
    }
    if (!agree) {
      alert("Terms agree karo");
      return;
    }

    // Connect - localStorage me save
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find(u => u.email === form.email)) {
      alert("Ye email pehle se hai!");
      return;
    }
    users.push({ ...form });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(form));
    
    alert("Account Created!");
    navigate("/login");
  };

  const inputStyle = {
    border:"1px solid #a7f3d0",
    borderRadius:"10px",
    padding:"10px 12px",
    fontSize:"11px",
    width:"100%",
    outline:"none"
  };

  return (
    <div style={{ minHeight:"100vh", background:"#f1f5f9", display:"flex", justifyContent:"center", alignItems:"center", padding:"20px" }}>
      <div style={{ background:"white", width:"420px", borderRadius:"16px", padding:"24px 28px", boxShadow:"0 10px 30px rgba(0,0,0,0.06)", borderTop:"3px solid #99f6e0" }}>
        
        <h2 style={{ margin:0, fontSize:"18px", fontWeight:"800" }}>Create your account</h2>
        <p style={{ fontSize:"11px", color:"#64748b", margin:"4px 0 18px" }}>Sign up to access the practice dashboard.</p>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
          <div>
            <label style={{ fontSize:"11px", fontWeight:"600" }}>First name:</label>
            <input style={inputStyle} placeholder="Enter First Name" value={form.firstName} onChange={e=> setForm({...form, firstName:e.target.value})} />
          </div>
          <div>
            <label style={{ fontSize:"11px", fontWeight:"600" }}>Last Name:</label>
            <input style={inputStyle} placeholder="Enter Last Name" value={form.lastName} onChange={e=> setForm({...form, lastName:e.target.value})} />
          </div>
        </div>

        <div style={{ marginTop:"12px" }}>
          <label style={{ fontSize:"11px", fontWeight:"600" }}>Email Address:</label>
          <input style={inputStyle} placeholder="Enter your email address" value={form.email} onChange={e=> setForm({...form, email:e.target.value})} />
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginTop:"12px" }}>
          <div>
            <label style={{ fontSize:"11px", fontWeight:"600" }}>Password:</label>
            <input type="password" style={inputStyle} placeholder="Enter First Name" value={form.password} onChange={e=> setForm({...form, password:e.target.value})} />
          </div>
          <div>
            <label style={{ fontSize:"11px", fontWeight:"600" }}>Confirm Password:</label>
            <input type="password" style={inputStyle} placeholder="Enter Last Name" value={form.confirm} onChange={e=> setForm({...form, confirm:e.target.value})} />
          </div>
        </div>

        <p style={{ fontSize:"10px", color:"#475569", margin:"10px 0 8px" }}>Use at least 8 characters, with letter & number</p>

        <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"14px" }}>
          <input type="checkbox" checked={agree} onChange={()=> setAgree(!agree)} style={{ accentColor:"#2dd4bf" }} />
          <span style={{ fontSize:"10px" }}>I agree to the Terms</span>
        </div>

        <button onClick={handleCreate} style={{ width:"100%", background:"#5eead4", border:"none", padding:"10px", borderRadius:"10px", fontSize:"12px", fontWeight:"bold", cursor:"pointer", color:"#0f172a" }}>
          Create Account
        </button>

        <p style={{ fontSize:"11px", textAlign:"center", marginTop:"12px" }}>
          Already have account? <Link to="/login" style={{ color:"#14b8a6", textDecoration:"none", fontWeight:"600" }}>Sign in</Link>
        </p>

      </div>
    </div>
  );
}