import React, { useState } from 'react';
import { FaCode, FaShieldAlt } from 'react-icons/fa'; 

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
    
    // Kelas utilitas untuk konsistensi
    const primaryColor = 'text-cyan-400';
    const primaryGlow = 'drop-shadow-[0_0_8px_rgba(52,211,255,0.7)]';
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    return (
        // Header Utama
        <header className="fixed top-0 left-0 w-full z-50 bg-gray-950 shadow-xl shadow-gray-900">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                
                {/* Logo dan Nama */}
                <a href="#hero" className="flex items-center space-x-2 text-3xl font-extrabold transition-colors duration-300">
                    <FaCode className={`${primaryColor} ${primaryGlow} hover:text-white transition-all duration-300`} />
                    <span className={`${gradientText}`}>
                        Portofolio
                    </span>
                    <FaShieldAlt className={`text-xl text-fuchsia-400 hidden sm:block`} />
                </a>

                {/* Tombol Hamburger (Mobile) */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className={`${primaryColor} focus:outline-none p-1 transition duration-300`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                
                {/* Navigasi Desktop (TIDAK BERUBAH) */}
                <nav className="hidden md:flex">
                    <ul className="flex items-center space-x-6 text-lg font-medium text-gray-400">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <a 
                                    href={item.href} 
                                    className={`hover:${primaryColor} transition-all duration-300 relative group 
                                                hover:${primaryGlow.replace('8px', '4px')}`}
                                >
                                    {item.name}
                                    <span className={`absolute bottom-[-5px] left-0 w-full h-[2px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${gradientText.replace('text-transparent bg-clip-text', '')}`}></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* REVISI FOKUS: MENU NAVIGASI MOBILE */}
            {/* z-index dibuat lebih tinggi (z-[60]) untuk memastikan ia menutupi semua konten */}
            <nav 
                className={`fixed top-0 left-0 w-full h-full bg-gray-950 p-6 
                            transition-transform duration-300 transform z-[60] 
                            ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
            >
                {/* Tombol Close */}
                <div className="flex justify-end mb-8">
                    <button onClick={toggleMenu} className={`${primaryColor} focus:outline-none p-1 transition duration-300`}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-8 text-2xl font-medium text-gray-300">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a 
                                href={item.href} 
                                onClick={toggleMenu} 
                                className={`${gradientText} hover:opacity-80 transition-opacity duration-300`}
                            >
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