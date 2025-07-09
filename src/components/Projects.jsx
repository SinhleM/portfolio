import React, { useState } from 'react';
import ProjectModal from './ProjectModal'; // Make sure to import the new modal component

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    const projects = [
        {
            title: 'FNB Fraud Detection Pipeline',
            description: 'Replicates an ETL fraud detection system with Python, FastAPI, and React.',
            images: [
                './FFDM1.png',
                './FFD - Copy.png',
                './FF4.png',
                './FFD.png',
                './FFD2.png'
            ],
            detailedDescription: `
This project replicates a real-world fraud analytics pipeline built from scratch. It begins with Python scripts that simulate users and transactions, apply rule-based fraud detection logic, and enrich the data with risk signals. The pipeline (run_pipeline.py) orchestrates the full ETL flow — from raw generation to fraud flagging — before storing clean, structured records in PostgreSQL. The FastAPI backend then serves this data to a modern React dashboard where risk scores (computed via calculateRiskScore.js) and visual trends offer real-time insights into user behavior, fraud patterns, and system-wide activity.

This project showcases core Data Engineering skills:

- Pipeline orchestration (run_pipeline.py)
- Rule-based data transformation (detect_fraud.py)
- Scalable relational data modeling (PostgreSQL)
- Backend data APIs (FastAPI + Pydantic)
- Frontend data consumption and visualization (React + Tailwind + Recharts)
- Custom fraud scoring logic (JS risk engine)
- Clear directory structure for maintainability`,
            technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Tailwind CSS', 'ETL', 'SQL']
        },
        {
            title: 'TailTrade - Fullstack E-commerce Application',
            description: 'TailTrade is a full-stack ecommerce platform for pet trading and supplies, featuring user role management, dynamic listings, admin moderation, and a structured multi-database backend.',
            images: [
                './TT3.png',
                './TT2.png',
                './TT1.png'
            ],
            detailedDescription: `TailTrade is a full-stack ecommerce web application for buying and selling pets and pet-related items. Designed with React on the frontend and a PHP + MySQL backend (using XAMPP), it supports a structured, user-friendly marketplace experience. The platform includes secure login with strong password enforcement, distinct user and admin roles, and dynamic listing functionality. Admin users can manage reported content, view items marked as sold, and moderate user activity through a centralized dashboard.

Listings include images, descriptions, and real-time status updates (e.g., sold or active), while users can engage in listing-specific private messaging. The application features a custom-built moderation system, allowing flagged listings to be reviewed and removed as needed. All of this is powered by a well-normalized MySQL schema that separates data into clearly defined tables for users, listings, messages, images, transactions, and reports — promoting data consistency, integrity, and performance.

Though not a traditional data engineering project, TailTrade incorporates foundational data engineering concepts such as relational schema design, CRUD operations for entity control, and user-level access enforcement. The frontend consumes backend data dynamically via Axios, and communication between the React interface (hosted on Netlify) and the backend API (proxied through Render) mirrors real-world fullstack integration practices. Optional deployment with AWS RDS further emphasizes a readiness for scalable, production-grade environments.`,
            technologies: ['React', 'PHP', 'MySQL', 'XAMPP', 'Netlify', 'Render', 'AWS RDS', 'SQL']
        },
        {
            title: 'GitHub Activity Dashboard',
            description: 'An interactive GitHub analytics dashboard that ingests and visualizes coding activity using React, Recharts, and a proxy-connected API.',
            images: [
                './GADD.png',
                './GAD1.png',
                './GAD3.png'
            ],
            detailedDescription: `The GitHub Activity Tracker is a sleek, fullstack web application that visualizes a developer’s GitHub contribution patterns with clarity and purpose. Built using React, Tailwind CSS, and Recharts, the project aggregates data like total commits, stars, forks, and language usage across repositories. Although it's primarily a frontend application, it was intentionally structured with a data engineering mindset. A local proxy bridges the frontend and backend, simulating an API layer for data fetching, and reflecting real-world ETL flows.

Raw data from the GitHub API is "ingested" via the /api/github-activity endpoint, then transformed within the application—aggregating and formatting key metrics to generate clean, chart-friendly data models. These models power dynamic visualizations, including commit activity charts and language distribution donuts, offering a meaningful snapshot of a developer’s portfolio. Performance is optimized using useMemo() to avoid unnecessary re-computation during state updates, mirroring the kind of caching and compute-efficiency often implemented in data pipelines.

Overall, this project demonstrates how thoughtful frontend design can still incorporate data-driven thinking: transforming scattered API responses into structured insights and presenting them through responsive, accessible visuals. It serves as a strong example of my ability to balance clean user interfaces with behind-the-scenes data transformation—skills essential to modern data engineering.`,
            technologies: ['React', 'Tailwind CSS', 'Recharts', 'JavaScript', 'API Integration', 'Lucide React', 'GitHub API']
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
                            <img src={project.images[0]} alt={project.title} className="w-full h-64 object-contain" />
                            <div className="p-6 pb-24">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">{project.title}</h3>
                                <p className="text-gray-700 text-center">{project.description}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full overflow-hidden h-20 bg-gray-100 flex flex-col justify-end">
                                <div className="border-b border-gray-500 w-2/3 mx-auto mt-4 mb-3"></div>
                                <div className="animate-tech-scroll flex-grow-0 flex-shrink-0 pl-6 pt-3 pb-3">
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
