import React from "react";
import { Routes, Route } from "react-router-dom";

import Splash from "./pages/Splash";
import Home from "./pages/Home";
import About from "./pages/About";
import GetStarted from "./pages/GetStarted";
import Theme from "./pages/Theme";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;