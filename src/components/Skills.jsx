// src/components/Skills.jsx
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Git', icon: '🔧' },
    { name: 'Javascript', icon: 'JS', dark: true },
    { name: 'Sass/Scss', icon: '🎨' },
    { name: 'Nest.Js', icon: '🐺' },
    { name: 'Storybook', icon: '📚' },
    { name: 'Nest.Js', icon: '🐺' },
    { name: 'Git', icon: '🔧' },
    { name: 'Storybook', icon: '📚' },
    { name: 'Socket.io', icon: '⚡' },
    { name: 'Sass/Scss', icon: '🎨' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">My <span className="font-bold">Skills</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 border-gray-200 flex flex-col items-center justify-center h-32 ${skill.dark ? 'bg-gray-900 text-white' : 'bg-white'}`}>
              <div className="text-2xl mb-2">
                {skill.icon === 'JS' ? (
                  <span className="text-2xl font-bold">JS</span>
                ) : skill.icon === '🔧' ? (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                ) : (
                  <span>{skill.icon}</span>
                )}
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