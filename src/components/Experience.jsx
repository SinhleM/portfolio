// src/components/Projects.jsx
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Google',
      position: 'Lead Software Engineer at Google',
      period: 'Nov 2019 - Present',
      description: 'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google\'s core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
      logo: 'G',
      bgColor: 'bg-blue-500'
    },
    {
      company: 'YouTube',
      position: 'Software Engineer at YouTube',
      period: 'Jan 2017 - Oct 2019',
      description: 'At YouTube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant\'s dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.',
      logo: '▶',
      bgColor: 'bg-red-500'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">My <span className="font-bold">Experience</span></h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-8">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${exp.bgColor} rounded flex items-center justify-center text-white font-bold text-xl`}>
                  {exp.logo}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;