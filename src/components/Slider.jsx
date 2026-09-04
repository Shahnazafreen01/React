import { useState, useEffect } from 'react';

export default function Slider(){
  const slides = [
    { title: "Complete Auth Flow", desc: "Beautiful dark/light mode with smooth transitions, persisted across all pages and user sessions." },
    { title: "Fully Responsive", desc: "Works perfectly on mobile, tablet and desktop with clean modern design." },
    { title: "Easy to Customize", desc: "Change colors, theme and pages in minutes without any complex setup." }
  ];
  const [cur, setCur] = useState(0);
  useEffect(()=>{
    const t = setInterval(()=> setCur(p => (p+1)%3), 3000);
    return ()=> clearInterval(t);
  },[]);

  return(
    <div style={{ background:"white", borderRadius:"18px", padding:"40px 25px", width:"380px", textAlign:"center", position:"relative", boxShadow:"0 10px 30px rgba(0,0,0,0.08)", border:"2px solid #0f1e4e" }}>
      <button onClick={()=> setCur((cur-1+3)%3)} style={{ position:"absolute", left:"12px", top:"50%", background:"#7dd3c8", border:"none", width:"28px", height:"28px", borderRadius:"8px", cursor:"pointer" }}>‹</button>
      <button onClick={()=> setCur((cur+1)%3)} style={{ position:"absolute", right:"12px", top:"50%", background:"#7dd3c8", border:"none", width:"28px", height:"28px", borderRadius:"8px", cursor:"pointer" }}>›</button>
      <h3 style={{fontSize:"15px", margin:0}}>{slides[cur].title}</h3>
      <p style={{fontSize:"11px", color:"#64748b", marginTop:"12px", lineHeight:"1.4"}}>{slides[cur].desc}</p>
      <div style={{display:"flex", justifyContent:"center", gap:"6px", marginTop:"35px"}}>
        {slides.map((_,i)=><div key={i} onClick={()=>setCur(i)} style={{width: cur===i?"18px":"8px", height:"8px", borderRadius:"10px", background: cur===i?"#2dd4bf":"#e2e8f0", cursor:"pointer", transition:"0.3s"}}/>)}
      </div>
    </div>
  )
}