import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.js';
import NotHome from './pages/NotHome/NotHome.js';
import './App.css';

const App = () => {

  return (
    <Router>
      <Navbar />
      <div className="whole">
        <div>
            <h1>My website</h1>
        </div>
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/nothome" element={<NotHome />} /> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;
