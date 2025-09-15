import React, { useEffect, useState, useRef } from 'react';
import ParticlesBackground from './Particles';

// A separate component for the animated skill bar
const SkillBar = ({ name, level }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    // Disconnect the observer when the component unmounts
    return () => observer.disconnect(); 
  }, []);

  return (
    <div 
      ref={domRef} 
      className="bg-gray-800 p-3 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/50"
    >
      <div className="flex justify-between items-center mb-1">
        <span className="text-base font-medium text-gray-300">{name}</span>
        <span className="text-xs font-semibold text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className={`bg-gradient-to-r from-cyan-400 to-fuchsia-400 h-2 rounded-full transition-all duration-700 ease-in-out ${isVisible ? 'w-full' : 'w-0'}`}
          style={{ width: isVisible ? `${level}%` : '0%' }}
        ></div>
      </div>
    </div>
  );
};

const hardSkillsData = [
  { name: 'HTML & CSS', level: 95 },
  { name: 'JavaScript', level: 80 },
  { name: 'PHP', level: 80 },
  { name: 'Python', level: 90 },
  { name: 'C', level: 85 },
  { name: 'React', level: 50 },
  { name: 'Node.js', level: 30 },
];

const softSkillsData = [
  { name: 'Komunikasi', level: 95 },
  { name: 'Manajemen Waktu', level: 90 },
  { name: 'Problem Solving', level: 85 },
  { name: 'Kerja Sama Tim', level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-3xl font-bold mb-10 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="skills-category">
            <h3 className="text-xl font-semibold text-center mb-5 text-cyan-400">Hard Skills</h3>
            <div className="space-y-4">
              {hardSkillsData.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="text-xl font-semibold text-center mt-8 md:mt-0 mb-5 text-cyan-400">Soft Skills</h3>
            <div className="space-y-4">
              {softSkillsData.map((skill, index) => (
                <SkillBar key={index} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;