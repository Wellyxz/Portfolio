import React from 'react';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-xl">
     <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="logo">
       <a href="#hero" className="flex items-center space-x-2 text-3xl font-extrabold transition-colors duration-300">
        {/* Ikon Perak Berkilau */}
        <FaCode className="text-cyan-400 drop-shadow-[0_0_8px_#cbd5e1] hover:text-white transition-all duration-300" />
        {/* Mengubah warna teks menjadi gradasi */}
        <span 
        className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text"
        >
        Portfolio
        </span>
        <a href="#hero" className="flex items-center space-x-2 text-3xl font-extrabold transition-colors duration-300">
        {/* Ikon Perak Berkilau */}
        <FaCode className="text-fuchsia-400 drop-shadow-[0_0_8px_#cbd5e1] hover:text-white transition-all duration-300" />
        </a>
       </a>
        </div>
        <nav className="nav-menu">
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-400">
            <li><a href="#hero" className="hover:text-cyan-400 transition-colors duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a></li>
            <li><a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skill</a></li>
            <li><a href="#tools" className="hover:text-cyan-400 transition-colors duration-300">Software</a></li>
            <li><a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Project</a></li>
            <li><a href="#certificates" className="hover:text-cyan-400 transition-colors duration-300">Certificates</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;