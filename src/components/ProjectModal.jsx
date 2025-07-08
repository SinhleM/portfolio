import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import Lucide icons

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <div
      className="fixed inset-0  bg-opacity-80 backdrop-blur-xl flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto relative rounded-xl" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Carousel with navigation buttons */}
        <div className="relative h-[60vh] overflow-hidden rounded-t-lg">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - view ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out my-4 mx-auto block max-w-[calc(100%-2rem)]"
          />
          {/* Navigation Arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={goToPreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-3 rounded-full z-10 hover:bg-opacity-60 focus:outline-none transition-colors duration-200" // Reduced opacity
                aria-label="Previous image"
              >
                <ChevronLeft size={24} /> {/* Lucide Left Arrow Icon */}
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-3 rounded-full z-10 hover:bg-opacity-60 focus:outline-none transition-colors duration-200" // Reduced opacity
                aria-label="Next image"
              >
                <ChevronRight size={24} /> {/* Lucide Right Arrow Icon */}
              </button>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-700 mb-6">{project.detailedDescription}</p>

          <h3 className="text-2xl font-semibold mb-3">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span key={index} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold"
      >
        &times;
      </button>
    </div>
  );
}

export default ProjectModal;