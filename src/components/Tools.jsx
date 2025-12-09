import React from 'react';
import { SiWireshark, SiBurpsuite, SiMetasploit, SiVirtualbox, SiKalilinux, SiSupabase } from 'react-icons/si'; 
import { BiLogoVisualStudio, BiLogoWindows, BiLogoReact } from 'react-icons/bi';
import ParticlesBackground from './Particles';

const allTools = [
    { name: 'Kali Linux', icon: <SiKalilinux />, color: 'text-fuchsia-400', shadow: 'shadow-fuchsia-400/40', hoverBorder: 'hover:border-fuchsia-400/50' },
    { name: 'Wireshark', icon: <SiWireshark />, color: 'text-fuchsia-400', shadow: 'shadow-fuchsia-400/40', hoverBorder: 'hover:border-fuchsia-400/50' },
    { name: 'Burpsuite', icon: <SiBurpsuite />, color: 'text-fuchsia-400', shadow: 'shadow-fuchsia-400/40', hoverBorder: 'hover:border-fuchsia-400/50' },
    { name: 'Metasploit', icon: <SiMetasploit />, color: 'text-fuchsia-400', shadow: 'shadow-fuchsia-400/40', hoverBorder: 'hover:border-fuchsia-400/50' },
    
    { name: 'VS Code', icon: <BiLogoVisualStudio />, color: 'text-cyan-400', shadow: 'shadow-cyan-400/40', hoverBorder: 'hover:border-cyan-400/50' },
    { name: 'React/JS', icon: <BiLogoReact />, color: 'text-cyan-400', shadow: 'shadow-cyan-400/40', hoverBorder: 'hover:border-cyan-400/50' },
    { name: 'Supabase', icon: <SiSupabase />, color: 'text-cyan-400', shadow: 'shadow-cyan-400/40', hoverBorder: 'hover:border-cyan-400/50' },

    { name: 'Virtual Box', icon: <SiVirtualbox />, color: 'text-gray-400', shadow: 'shadow-gray-400/40', hoverBorder: 'hover:border-gray-400/50' },
    { name: 'Windows', icon: <BiLogoWindows />, color: 'text-gray-400', shadow: 'shadow-gray-400/40', hoverBorder: 'hover:border-gray-400/50' },
];

const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

const Tools = () => {
    return (
        // Perbaikan Syntax: Pastikan <section> adalah elemen pertama setelah return (
        <section id="tools" className="relative pt-36 pb-20 bg-gray-950 text-white overflow-hidden">
            
            {/* Latar belakang partikel */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <ParticlesBackground />
            </div>

            {/* Konten Utama */}
            <div className="container mx-auto px-4 relative z-10">
                
                {/* Judul Utama Konsisten */}
                <h2 className={`text-center text-4xl sm:text-5xl font-extrabold mb-16 ${gradientText} text-shadow-lg`}>
                    Software & Tools
                </h2>

                {/* Grid Tools Tunggal */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
                        {allTools.map((tool, index) => (
                            <div
                                className="bg-gray-900/50 p-6 rounded-xl flex flex-col items-center justify-center transition-all duration-300 transform 
                                    hover:scale-[1.05] hover:shadow-2xl hover:shadow-cyan-400/40 border border-gray-700/50 hover:border-fuchsia-400/50 group"
                                key={index}
                            >
                                {/* Ikon dengan warna yang sesuai dan efek glow pada hover */}
                                <div className={`text-5xl mb-4 transition-all duration-300 ${tool.color} group-hover:drop-shadow-[0_0_8px_rgba(52,211,255,0.7)]`}>
                                    {tool.icon}
                                </div>
                                <p className="text-lg font-medium text-gray-300 text-center">{tool.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Tools;