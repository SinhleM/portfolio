import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Make sure to import the new modal component

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'FNB Fraud Detection Pipeline',
            description: 'A responsive e-commerce site with full CRUD operations.',
            // --- UPDATED IMAGES HERE ---
            images: [
                './FFD.png', 
                './FF4.png',
                './FFD2.png'
            ],
            // --- END UPDATED IMAGES ---
            detailedDescription: 'Developed a full-featured, responsive e-commerce platform from scratch. The application allows for complete CRUD (Create, Read, Update, Delete) operations on products and includes secure user authentication. A major focus was placed on creating a seamless user experience and implementing secure transaction processing with Stripe integration. The modern UI was built using Tailwind CSS.',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Auth0']
        },
        {
            title: 'Project Two: Task Management',
            description: 'A collaborative task manager with real-time updates.',
            images: [

                './TT1.png', 
                './TT2.png',
                './TT3.png'
            ],
            detailedDescription: 'Built a dynamic and collaborative task management application. This project features real-time updates using WebSockets, enabling teams to work together seamlessly. Key features include group assignments, deadline tracking, and a notification system. The backend is powered by Firebase for real-time data synchronization, and the frontend is built with Vue.js.',
            technologies: ['Vue.js', 'Firebase', 'Socket.io', 'PostgreSQL', 'Sass', 'Webpack']
        },
        {
            title: 'Project Three: Portfolio Redesign',
            description: 'A modern overhaul of my personal portfolio.',
            images: [
                './GAD1.png', 
                './GAD2.png',
                './GAD3.png'
            ],
            detailedDescription: 'This project involved a complete redesign and rebuild of my personal portfolio to showcase my skills in modern web development. The focus was on creating a visually appealing, highly responsive UI/UX and ensuring optimal performance. I utilized Next.js for server-side rendering, GraphQL with Apollo Client for data fetching, and Framer Motion for smooth animations.',
            technologies: ['Next.js', 'GraphQL', 'Apollo Client', 'Tailwind CSS', 'Vercel', 'Framer Motion']
        },
    ];

    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };

    const handleCloseModal = () => {
      setSelectedProject(null);
    };

    return (
        <section id="project" className="pt-16 pb-32 bg-zinc-50 text-white">
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${selectedProject ? 'blur-sm' : ''}`}>
                <h2 className="text-4xl md:text-5xl text-center mb-16 antialiased">
                    <span className="font-medium text-black leading-tight">My</span> <span className="text-black font-semibold">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            onClick={() => handleProjectClick(project)}
                            className={`
                                bg-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 relative group block cursor-pointer
                                ${index === 0 || index === 2 ? 'lg:-translate-y-8 hover:lg:-translate-y-10' : ''}
                                ${index === 1 ? 'lg:translate-y-8 hover:lg:translate-y-6' : ''}
                                md:translate-y-0
                            `}
                        >
                            <img src={project.images[0]} alt={project.title} className="w-full h-64 object-cover" />
                            <div className="p-6 pb-24">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-gray-700 text-center">{project.description}</p>
                                <div className="border-b border-gray-500 w-2/3 mx-auto mt-4"></div>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full overflow-hidden h-20 bg-gray-100 flex">
                                <div className="animate-tech-scroll flex-grow pl-6 pt-3">
                                    {[...project.technologies, ...project.technologies].map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="text-sm font-medium bg-black text-white px-3 py-1 rounded-full whitespace-nowrap"
                                            style={{ marginRight: '0.75rem' }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        </section>
    );
}

export default Projects;