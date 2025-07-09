// src/components/Footer.jsx
import React from 'react';
// Import Lucide icons
import { Phone, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          {/* New div for contact info and GitHub - now on the left */}
          <div className="flex flex-col items-center md:items-start space-y-3 mb-4 md:mb-0"> {/* Added mb for mobile spacing, md:items-start for left align */}
           
            {/* Email */}
            <p className="flex items-center space-x-2 text-gray-400">
              <Mail className="w-5 h-5 text-gray-400" />
              <span>Email:</span>
              <a href="mailto:sinhlemkhabela01@gmail.com" className="hover:text-white transition duration-200">sinhlemkhabela01@gmail.com</a>
            </p>
            {/* Check my GitHub - ENTIRE PHRASE IS NOW THE LINK */}
            <a href="https://github.com/SinhleM" target="_blank" rel="noopener noreferrer"
               className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-200">
              <Github className="w-5 h-5 text-gray-400" />
              <span>Check my GitHub</span>
            </a>
          </div>

          {/* Portfolio text - now on the right */}
          <div className="text-2xl font-bold italic text-white md:text-right">Portfolio</div> {/* Added italic and text-white, md:text-right for right align */}
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sinhle Mkhabela. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;