import React from 'react';
import { Download } from 'lucide-react';

const Header = () => {
  const handleDownloadCV = () => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = '/Sinhle Mkhabela - Curriculum Vitae.pdf';
    link.download = 'Sinhle Mkhabela - Curriculum Vitae.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900 italic">Portfolio</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#skills" className="text-gray-700 hover:text-gray-900 font-medium">Skills</a>
            <a href="#project" className="text-gray-700 hover:text-gray-900 font-medium">Project</a>
            <a href="#certifications" className="text-gray-700 hover:text-gray-900 font-medium">Certifications</a>
            <a href="#contact" className="text-gray-700 hover:text-gray-900 font-medium">Contact Me</a>
          </nav>
          <button 
            onClick={handleDownloadCV}
            className="bg-gray-900 text-white px-4 py-2 rounded-md font-medium hover:bg-gray-800 flex items-center gap-2 transition-colors"
          >
            <Download size={18} />
            Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;