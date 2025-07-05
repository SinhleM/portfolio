import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">Personal</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-gray-900 font-medium">About Me</a>
            <a href="#skills" className="text-gray-700 hover:text-gray-900 font-medium">Skills</a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 font-medium">Project</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact Me</a>
          </nav>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800">
            Resume ⬇
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;