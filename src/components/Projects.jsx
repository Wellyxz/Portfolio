import React from 'react';
import ParticlesBackground from './Particles';
import { FaCode, FaExternalLinkAlt, FaLock, FaDatabase } from 'react-icons/fa';
import { SiSupabase, SiReact, SiPython } from 'react-icons/si';

// Data proyek yang lebih detail
const projectsData = [
    {
        id: 1,
        title: 'WCTF (Web Capture The Flag)',
        description: 'Platform kompetisi CTF berbasis web untuk menguji kemampuan Keamanan Siber, mencakup berbagai kategori challenge, seperti Cryptography, Forensic, Web Exploitation, Reverse Engineering, dan OSINT.',
        imageUrl: '/images/WCTF Homepage.png',
        liveUrl: '#',
        repoUrl: 'https://github.com/Wellyxz/WCTF-New',
        tags: ['Cyber Security', 'Web Development'], // Ganti dengan stack aktual
    },
    {
        id: 2,
        title: 'Smart Trash Bin System',
        description: 'Sistem tempat sampah otomatis modern dengan sensor jarak untuk membuka penutup, diintegrasikan dengan sistem sensor (IoT Basic).',
        imageUrl: '/images/Tong sampah otomatis.jpeg',
        liveUrl: '#',
        repoUrl: '#',
        tags: ['IoT', 'C/C++/Arduino language', 'System'],
    },
    {
        id: 3,
        title: 'Website Kolonialisme Belanda',
        description: 'Platform edukasi dengan berbasis website modern untuk mengenal dan memberikan informasi, serta belajar seputar Sejarah Indonesia pada masa Penjajahan Belanda',
        imageUrl: '/images/Kolonialisme Belanda.png',
        liveUrl: 'https://kolonialisme-belanda.vercel.app/',
        repoUrl: 'https://github.com/Wellyxz/Kolonialisme-Belanda',
        tags: ['Web Development', 'React'],
    },
];

const Projects = () => {
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    // Komponen untuk menampilkan tag teknologi
    const TechTag = ({ tag }) => {
        let Icon = FaCode;
        let colorClass = 'text-gray-400 border-gray-600';

        if (tag.toLowerCase().includes('supabase') || tag.toLowerCase().includes('database')) {
            Icon = SiSupabase;
            colorClass = 'text-green-400 border-green-600 bg-green-900/20';
        } else if (tag.toLowerCase().includes('security') || tag.toLowerCase().includes('ctf') || tag.toLowerCase().includes('rls')) {
            Icon = FaLock;
            colorClass = 'text-fuchsia-400 border-fuchsia-600 bg-fuchsia-900/20';
        } else if (tag.toLowerCase().includes('react')) {
            Icon = SiReact;
            colorClass = 'text-cyan-400 border-cyan-600 bg-cyan-900/20';
        } else if (tag.toLowerCase().includes('python')) {
            Icon = SiPython;
            colorClass = 'text-yellow-400 border-yellow-600 bg-yellow-900/20';
        }

        return (
            <span className={`inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full border ${colorClass} transition duration-300`}>
                <Icon className="mr-1 h-3 w-3" />
                {tag}
            </span>
        );
    };


    return (
        <section id="projects" className="relative py-20 bg-gray-950 text-white overflow-hidden">
            {/* Latar belakang partikel (Menggunakan wrapper yang benar) */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <ParticlesBackground />
            </div>

            {/* Konten Utama */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Judul utama dengan gradasi */}
                <h2 className={`text-center text-4xl sm:text-5xl font-extrabold mb-12 ${gradientText} text-shadow-lg`}>
                    Karya & Eksperimen
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="bg-gray-900/50 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 
                                       hover:scale-[1.03] hover:shadow-fuchsia-400/30 border border-gray-800 hover:border-cyan-400/50"
                        >
                            <div className="relative">
                                <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.title} />
                                {/* Overlay Gradien di atas gambar (Opsional) */}
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Judul proyek dengan gradasi */}
                                <h3 className={`text-2xl font-bold ${gradientText} leading-snug`}>
                                    {project.title}
                                </h3>
                                
                                <p className="text-gray-300 text-sm">{project.description}</p>
                                
                                {/* Tag Teknologi */}
                                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-700/50">
                                    {project.tags.map((tag, index) => (
                                        <TechTag key={index} tag={tag} />
                                    ))}
                                </div>
                                
                                {/* Tombol Aksi */}
                                <div className="flex justify-end pt-4 space-x-3">
                                    {project.liveUrl !== '#' && (
                                        <a 
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-white px-4 py-2 rounded-lg 
                                                       bg-cyan-600 hover:bg-cyan-700 transition duration-300 shadow-lg shadow-cyan-500/30"
                                        >
                                            Demo <FaExternalLinkAlt className="ml-2 h-3 w-3" />
                                        </a>
                                    )}
                                    {project.repoUrl !== '#' && (
                                        <a 
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-sm font-semibold text-white px-4 py-2 rounded-lg 
                                                       bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-300 shadow-lg shadow-fuchsia-500/30"
                                        >
                                            Repo <FaCode className="ml-2 h-3 w-3" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;