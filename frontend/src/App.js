import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import  Statistic from "./components/Header";
import Dashboard from "./components/Dashboard";
import About from "./components/aboutus";

import GetStarted from "./components/getstarted";
import AwarenessPage from "./components/awarness";
const App = () => (
  <Router>
    
    
    <Routes>
        
    <Route path="/" element={< Statistic/>} />
        <Route path="/login" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/awarene" element={<AwarenessPage />} />
        <Route path="/dashboard/:householdId" element={<Dashboard />} />
      </Routes>
  </Router>
);

export default App;
