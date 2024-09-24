// src/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto container px-2 md:px-0">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 text-white md:text-2xl md:font-bold font-semibold">
            <span className='text-orange-400 '>Countries</span> App
          </div>
          <div className="mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:bg-gray-700 p-1 hover:text-white rounded-md"
            >
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          <div className="hidden md:flex space-x-4 md:items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2  rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/country"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              Countries
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="flex flex-col space-y-1 px-4 py-2">
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/country"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              Countries
            </NavLink>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${isActive ? 'bg-gray-700 text-white' : ''}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
