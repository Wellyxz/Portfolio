import React from 'react';
import { SiWireshark, SiBurpsuite, SiMetasploit, SiFigma, SiGithub, } from 'react-icons/si';
import { BiLogoVisualStudio } from 'react-icons/bi';
import ParticlesBackground from './Particles'; // Make sure the path is correct

const toolsData = [
  { name: 'Wireshark', icon: <SiWireshark /> },
  { name: 'Burpsuite', icon: <SiBurpsuite /> },
  { name: 'Metasploit', icon: <SiMetasploit /> },
  { name: 'VS Code', icon: <BiLogoVisualStudio /> },
  { name: 'GitHub', icon: <SiGithub /> },
  { name: 'Figma', icon: <SiFigma /> },
];

const Tools = () => {
  return (
    <section id="tools" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Latar belakang partikel */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-bold mb-16 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">Software</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {toolsData.map((tool, index) => (
            <div
              className="bg-gray-800 p-6 rounded-xl flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl"
              key={index}
            >
              <div className="text-5xl text-cyan-400 mb-4">{tool.icon}</div>
              <p className="text-lg font-medium text-gray-300">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;