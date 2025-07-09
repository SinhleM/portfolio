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

  // Function to render detailed description with better formatting
  const renderDetailedDescription = (description) => {
    // Regex to remove common emojis (a broad range).
    // This regex attempts to match Unicode emoji ranges.
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;

    const paragraphs = description.split('\n').filter(line => line.trim() !== '');

    return paragraphs.map((line, index) => {
      let cleanedLine = line.replace(emojiRegex, '').trim(); // Remove emojis from each line

      // Check for headings/sections (e.g., "Key features:", "Tech Stack")
      // This regex can be customized further if you have more specific section patterns.
      if (cleanedLine.match(/^(Key features|User & Admin Roles|Listing Management|Integrated Messaging|Moderation System|Data-Driven Admin Dashboard|Relational Data Modeling|Modern Deployment|Data Ingestion|Data Transformation|Insight Delivery|Performance Optimization|Error Resilience|Tech Stack|Frontend|Charts|API Integration|Icons):/i)) {
          return (
              <h4 key={index} className="text-gray-800 mt-4 mb-2 text-left">
                  {cleanedLine}
              </h4>
          );
      }
      // Check if the line starts with a bullet point (e.g., - or •)
      else if (cleanedLine.startsWith('- ') || cleanedLine.startsWith('• ')) {
        // Render as a list item, removing the bullet character for cleaner display
        const content = cleanedLine.replace(/^(- |• )/, '').trim();
        return (
          <li key={index} className="text-gray-700 mb-1 ml-4 list-disc text-left">
            {content}
          </li>
        );
      } else {
        // Render as a regular paragraph
        return (
          <p key={index} className="text-gray-700 mb-3 leading-relaxed text-left">
            {cleanedLine}
          </p>
        );
      }
    });
  };

  return (
    <div
      className="fixed inset-0 bg-zinc-300 bg-opacity-80 backdrop-blur-xl flex justify-center items-center z-50"
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-3 rounded-full z-10 hover:bg-opacity-60 focus:outline-none transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-40 text-white p-3 rounded-full z-10 hover:bg-opacity-60 focus:outline-none transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="p-8">
          {/* Title aligned center */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">{project.title}</h2>

          {/* Render the detailed description using the new function */}
          <div className="mb-6">
            {renderDetailedDescription(project.detailedDescription)}
          </div>

          {/* Technologies title aligned center */}
          <h3 className="text-2xl font-semibold mb-3 text-gray-900 text-center">Technologies Used</h3>
          <div className="flex flex-wrap gap-2 justify-center">
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
        className="absolute top-4 right-4 text-gray-800 text-3xl font-bold p-2 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 transition-colors"
        aria-label="Close modal"
      >
        &times;
      </button>
    </div>
  );
}

export default ProjectModal;