import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import FirstPage from './pages/FirstPage.jsx';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import SignupPage from './pages/SignupPage.jsx';

function Main(){
  const [showFirst, setShowFirst] = useState(true);
  const navigate = useNavigate();
  useEffect(()=>{
    const t = setTimeout(()=>{ setShowFirst(false); navigate("/home"); }, 3000);
    return ()=> clearTimeout(t);
  },[navigate]);

  if(showFirst) return <FirstPage/>;

  return(
    <Routes>
      <Route path="/home" element={<LandingPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignupPage/>} />
      <Route path="/" element={<LandingPage/>} />
    </Routes>
  )
}

export default function App(){
  return(
    <BrowserRouter>
      <Main/>
    </BrowserRouter>
  )
}