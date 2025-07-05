// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">Personal</div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">About</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">Skills</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">Projects</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Evren Shah. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;