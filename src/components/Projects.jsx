import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Project One: E-commerce Platform',
            description: 'Developed a responsive e-commerce site with full CRUD operations for products and user authentication, focusing on user experience and secure transactions.',
            image: 'https://picsum.photos/seed/project1/600/400',
            technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS', 'Auth0']
        },
        {
            title: 'Project Two: Task Management ',
            description: 'Built a collaborative task manager with real-time updates using WebSockets, offering features like group assignments and deadline tracking.',
            image: 'https://picsum.photos/seed/project2/600/400',
            technologies: ['Vue.js', 'Firebase', 'Socket.io', 'PostgreSQL', 'Sass', 'Webpack']
        },
        {
            title: 'Project Three: Portfolio Redesign',
            description: 'A complete overhaul of my personal portfolio, focusing on modern UI/UX, responsive design, and performance optimization for a seamless Browse experience.',
            image: 'https://picsum.photos/seed/project3/600/400',
            technologies: ['Next.js', 'GraphQL', 'Apollo Client', 'Tailwind CSS', 'Vercel', 'Framer Motion']
        },
        // Add more projects here if you wish!
    ];

    return (
        <section id="project" className="pt-16 pb-32 bg-black text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl text-center mb-16 antialiased">
                    <span className="font-normal">My</span> <span className="font-bold">Projects</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            href="#"
                            key={index}
                            className={`
                                bg-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative group block
                                ${
                                    (index === 0 || index === 2) ? 'lg:-translate-y-8' : ''
                                }
                                ${
                                    index === 1 ? 'lg:translate-y-8' : ''
                                }
                                ${
                                    'md:translate-y-0 translate-y-0'
                                }
                            `}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
                            <div className="p-6 pb-24">
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                                <p className="text-gray-700 text-center">{project.description}</p>

                                <div className="border-b border-gray-500 w-2/3 mx-auto mt-4"></div>
                            </div>

                            {/* Technologies Scroll - Removed 'items-center' and added 'pt-3' to inner div */}
                            <div className="absolute bottom-0 left-0 w-full overflow-hidden h-20 bg-gray-100 flex"> {/* Removed items-center */}
                                {/* Added pt-3 (padding-top) to push content down slightly from the top */}
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
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;