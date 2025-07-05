import React from 'react';

// Projects component is a placeholder to display portfolio items.
// Although not detailed in the screenshot, it's a standard and requested part of a portfolio.
// It features a grid of project cards with placeholder images and information.
function Projects() {
    const projects = [
        { title: 'Project One', description: 'A brief description of the first project, highlighting the technologies and challenges.', image: 'https://placehold.co/600x400/2d3748/ffffff?text=Project+1' },
        { title: 'Project Two', description: 'A brief description of the second project, highlighting the technologies and challenges.', image: 'https://placehold.co/600x400/4a5568/ffffff?text=Project+2' },
        { title: 'Project Three', description: 'A brief description of the third project, highlighting the technologies and challenges.', image: 'https://placehold.co/600x400/2d3748/ffffff?text=Project+3' },
    ];

    return (
        <section id="project" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
