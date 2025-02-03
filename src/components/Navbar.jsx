import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Sulagna</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About Me</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Connect Button (Desktop) */}
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Connect Me
        </button>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-gray-900">
          <a href="#home" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#service" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#project" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
