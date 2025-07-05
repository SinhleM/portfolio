// src/components/Skills.jsx
import React from 'react';
// Importing specific icons from lucide-react
import {
  Database, // For MySQL
  Cloud,    // For AWS
  Workflow, // For Apache Airflow / CI/CD
  Box,      // For Docker / Kubernetes (generic box/container)
  Zap,      // For Apache Kafka (representing speed/streams)
  GitFork,  // For CI/CD (alternative) / Github (alternative)
  Github,   // For Github
  Atom,     // For React (alternative)
  Code,     // For Python (generic code icon)
  Settings  // For Git (generic tool icon)
} from 'lucide-react';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'Code' },
    { name: 'MySQL', icon: 'Database', dark: true },
    { name: 'AWS', icon: 'Cloud' },
    { name: 'Apache Airflow', icon: 'Workflow' },
    { name: 'Docker', icon: 'Box', dark: true },
    { name: 'Apache Kafka', icon: 'Zap' },
    { name: 'CI/CD', icon: 'GitFork' }, // This border will be black
    { name: 'Kubernetes', icon: 'Box' },
    { name: 'Github', icon: 'Github', dark: true },
    { name: 'React', icon: 'Atom' }
  ];

  // Helper function to render icons based on their name
  const renderSkillIcon = (iconName) => {
    const iconClasses = "w-8 h-8"; // Consistent size for all icons
    switch (iconName) {
      case 'Code': return <Code className={iconClasses} />;
      case 'Database': return <Database className={iconClasses} />;
      case 'Cloud': return <Cloud className={iconClasses} />;
      case 'Workflow': return <Workflow className={iconClasses} />;
      case 'Box': return <Box className={iconClasses} />;
      case 'Zap': return <Zap className={iconClasses} />;
      case 'GitFork': return <GitFork className={iconClasses} />;
      case 'Github': return <Github className={iconClasses} />;
      case 'Atom': return <Atom className={iconClasses} />;
      case 'Settings': return <Settings className={iconClasses} />;
      default: return <span>{iconName}</span>; // Fallback for any unmapped icons
    }
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-gray-900 antialiased">
            <span className="font-normal">My</span> <span className="font-bold">Skills</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              // Conditionally apply border-black based on skill name
              className={`p-6 border-2 flex flex-col items-center justify-center h-32 shadow-md hover:shadow-xl transition-shadow duration-300 bg-white text-gray-900
                ${['Python', 'CI/CD', 'Apache Airflow'].includes(skill.name) ? 'border-black' : 'border-gray-200'}
              `}
            >
              <div className="text-2xl mb-2">
                {renderSkillIcon(skill.icon)}
              </div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;