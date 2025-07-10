import React, { useState } from 'react';

const Certifications = () => {
  // State to manage the full certificate image modal
  const [showFullCertModal, setShowFullCertModal] = useState(false);
  const [selectedCertImage, setSelectedCertImage] = useState('');
  const [selectedCertTitle, setSelectedCertTitle] = useState('');

  // Function to open the full certificate image modal
  const openFullCertModal = (imageSrc, title) => {
    setSelectedCertImage(imageSrc);
    setSelectedCertTitle(title);
    setShowFullCertModal(true);
  };

  // Function to close the full certificate image modal
  const closeFullCertModal = () => {
    setShowFullCertModal(false);
    setSelectedCertImage('');
    setSelectedCertTitle('');
  };

  // Define your certifications data here
  const certifications = [
    {
      title: 'Programming with JavaScript',
      issuer: 'Meta',
      date: 'Issued: April 2025',
      description: 'Shows I understand core programming concepts using JavaScript and can build interactive, logic-driven web features while adapting to modern development practices.',
      image: '/Meta.webp',
      fullImage: '/JS Meta Coursera_page-0001.jpg'
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services',
      date: 'Issued: June 2025',
      description: 'This certifies my foundational knowledge of AWS Cloud, including core services, security, pricing models, and how responsibilities are shared between AWS and users.',
      image: '/AWS logo.png',
      fullImage: '/AWS Coursera_page-0001.jpg'
    },
    {
      title: 'Tailwind CSS',
      issuer: 'Scrimba',
      date: 'Issued: April 2025',
      description: 'Shows I can build clean, responsive UIs with Tailwind CSS, including visualizations, and adapt to modern frontend design and development workflows.',
      image: '/ScrimbaL.webp',
      fullImage: '/Scrima Tailwind Coursera_page-0001.jpg'
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl antialiased">
            <span className="font-normal">My</span> <span className="font-bold">Certifications</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white p-6 border border-gray-300 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center"
            >
              {cert.image && (
                <img
                  src={cert.image}
                  alt={`${cert.title} badge`}
                  className="w-20 h-20 mb-2 object-contain rounded-full border border-gray-200"
                />
              )}
              <div className="w-16 h-px bg-gray-300 mb-4"></div>

              <h3 className="text-xl font-bold mb-1 text-gray-800">{cert.title}</h3>
              <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
              <p className="text-gray-500 text-xs mb-4">{cert.date}</p>
              <p className="text-gray-700 text-base leading-relaxed mb-4">{cert.description}</p>

              {/* View Certificate button for images */}
              {cert.fullImage ? (
                <button
                  onClick={() => openFullCertModal(cert.fullImage, cert.title)}
                  className="mt-auto inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition duration-200"
                >
                  View Certificate
                </button>
              ) : cert.link ? (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-700 transition duration-200"
                >
                  View External Credential
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      {/* Full Certificate Image Modal with Blurred Background */}
      {showFullCertModal && (
        <div
          className="fixed inset-0 bg-opacity-80 backdrop-blur-xl flex justify-center items-center z-50 p-4"
          onClick={closeFullCertModal}
        >
          <div
            className="relative w-full h-full max-w-5xl max-h-[95vh] flex justify-center items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeFullCertModal}
              className="absolute top-4 right-4 text-white text-4xl font-bold p-2 rounded-full bg-black bg-opacity-70 hover:bg-opacity-100 transition-colors z-10"
              aria-label="Close modal"
            >
              &times;
            </button>
            <img
              src={selectedCertImage}
              alt={selectedCertTitle}
              className="w-full h-full object-contain"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/FF0000/FFFFFF?text=Image+Not+Found"; }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;