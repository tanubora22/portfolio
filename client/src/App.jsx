import React, { useState, useEffect } from "react";
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home';
import Skill from './pages/Skillset';
import Project from './pages/Projects';
import Contact from './pages/Contact';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/PreLoader";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";  // Keep custom styles as needed.
import "./style.css"; // Keep custom styles as needed.

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);  // You can adjust this time based on the preloader duration

    return () => clearTimeout(timer);  // Clear timer when the component unmounts
  }, []);

  return (
    <>
      {/* Preloader Section */}
      <Preloader load={load} />

      {/* Main Wrapper: Adding dynamic scrolling classes */}
      <div className={`App ${load ? "overflow-hidden" : "overflow-auto"} transition-all duration-300`}>
        {/* Navbar */}
        <Navbar />

        {/* ScrollToTop Component */}
        <ScrollToTop />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skillset" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redirects to homepage for any unmatched routes */}
          
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
