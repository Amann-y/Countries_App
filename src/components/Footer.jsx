// src/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto text-center md:flex md:justify-between md:items-center">
        <p>&copy; {new Date().getFullYear()} <span className='text-orange-400'>Countries</span> App. All rights reserved.</p>
       
        <div className="flex flex-col md:flex-row items-center mt-2 md:mt-0 md:justify-center space-x-4">
        <p>Useful Links :</p>
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <Link to="/about" className="hover:text-orange-600">About</Link>
          <Link to="/contact" className="hover:text-orange-600">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
