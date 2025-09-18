import React, { useState } from 'react';
import { FaCode } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skill', href: '#skills' },
    { name: 'Software', href: '#tools' },
    { name: 'Experience', href: '#experience' },
    { name: 'Project', href: '#projects' },
    { name: 'Certificate', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo dan Nama */}
        <a href="#hero" className="flex items-center space-x-2 text-3xl font-extrabold transition-colors duration-300">
          <FaCode className="text-cyan-400 drop-shadow-[0_0_8px_#cbd5e1] hover:text-white transition-all duration-300" />
          <span className="bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
            Portfolio
          </span>
        </a>

        {/* Tombol Hamburger (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Navigasi Desktop */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6 text-lg font-medium text-gray-400">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-cyan-400 transition-colors duration-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Menu Navigasi Mobile */}
      <nav className={`fixed top-0 left-0 w-full h-full bg-gray-950 p-4 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
        <div className="flex justify-end mb-4">
          <button onClick={toggleMenu} className="text-gray-400 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-xl font-medium text-gray-400">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} onClick={toggleMenu} className="hover:text-cyan-400 transition-colors duration-300">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;