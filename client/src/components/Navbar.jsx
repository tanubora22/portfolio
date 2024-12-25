import React, { useState, useEffect } from "react";
import logo from "/tanu.png";
import { NavLink } from "react-router-dom";
import { LuBrainCircuit } from "react-icons/lu";
import { FaHome, FaProjectDiagram, FaTools, FaFileAlt, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 ${
        isScrolled
          ? "bg-transparent bg-opacity-80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-12 w-45 mr-2"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-white">
          <li>
            <NavLink
              to="/"
              className="flex items-center hover:text-yellow-400 transition duration-200"
            >
              <FaHome className="mr-2" size={20} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skillset"
              className="flex items-center hover:text-yellow-400 transition duration-200"
            >
              <LuBrainCircuit className="mr-2" size={20} /> Skillset
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className="flex items-center hover:text-yellow-400 transition duration-200"
            >
              <FaProjectDiagram className="mr-2" size={20} /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="flex items-center hover:text-yellow-400 transition duration-200"
            >
              <FaFileAlt className="mr-2" size={20} /> Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex items-center hover:text-yellow-400 transition duration-200"
            >
              <FaEnvelope className="mr-2" size={20} /> Contact Me
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } bg-gray-800 md:hidden text-white absolute w-full`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li>
            <NavLink
              to="/"
              className="flex items-center hover:text-yellow-400 transition duration-200"
              onClick={closeMenu}
            >
              <FaHome className="mr-2" size={20} /> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skillset"
              className="flex items-center hover:text-yellow-400 transition duration-200"
              onClick={closeMenu}
            >
              <FaTools className="mr-2" size={20} /> Skillset
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/project"
              className="flex items-center hover:text-yellow-400 transition duration-200"
              onClick={closeMenu}
            >
              <FaProjectDiagram className="mr-2" size={20} /> Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className="flex items-center hover:text-yellow-400 transition duration-200"
              onClick={closeMenu}
            >
              <FaFileAlt className="mr-2" size={20} /> Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="flex items-center hover:text-yellow-400 transition duration-200"
              onClick={closeMenu}
            >
              <FaEnvelope className="mr-2" size={20} /> Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
