import React, { useEffect, useState, useRef } from 'react';
import ParticlesBackground from './Particles';


// --- DATA HARD SKILLS OPTIMAL ---
const hardSkillsData = [
    { name: 'HTML, CSS & Tailwind CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 90 },
    { name: 'PHP', level: 50 }, 
    { name: 'C / Low-Level Programming', level: 80 },
    { name: 'SQL (MySQL) & Database (Supabase)', level: 75 },
    { name: 'Vulnerability Assessment', level: 80 },
];

const softSkillsData = [
    { name: 'Komunikasi', level: 85 },
    { name: 'Manajemen Waktu', level: 90 },
    { name: 'Pemecahan Masalah', level: 80 },
    { name: 'Kerja Sama Tim', level: 75 },
];
// ----------------------------

// A separate component for the animated skill bar
const SkillBar = ({ name, level }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(domRef.current);
                }
            });
        }, {
            threshold: 0.3 // Mulai animasi saat 30% elemen terlihat
        });
        
        if (domRef.current) {
            observer.observe(domRef.current);
        }
        
        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        }; 
    }, []);

    return (
        <div 
            ref={domRef} 
            // Styling SkillBar yang lebih profesional
            className="bg-gray-800/70 p-4 rounded-lg shadow-xl shadow-gray-900/50 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-400/30 border border-gray-800 hover:border-fuchsia-400/50"
        >
            <div className="flex justify-between items-center mb-1">
                <span className="text-base font-semibold text-gray-200 tracking-wide">{name}</span>
                <span className="text-sm font-bold text-fuchsia-400">{level}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div
                    className={`bg-gradient-to-r from-cyan-400 to-fuchsia-400 h-2 rounded-full transition-all duration-1000 ease-in-out`}
                    style={{ width: isVisible ? `${level}%` : '0%' }}
                ></div>
            </div>
        </div>
    );
};

const Skills = () => {
    // Utility class untuk konsistensi warna
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    return (
        <section id="skills" className="relative py-20 bg-gray-950 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <ParticlesBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* JUDUL UTAMA - Disesuaikan agar lebih menarik dan fokus */}
                <h2 className={`text-center text-4xl sm:text-5xl font-extrabold mb-12 ${gradientText} text-shadow-lg`}>
                    Keterampilan
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10"> {/* Gap yang lebih besar */}
                    
                    {/* Hard Skill Section */}
                    <div className="skills-category p-6 bg-gray-900/40 rounded-xl shadow-inner shadow-cyan-400/10">
                        <h3 className="text-2xl font-bold text-center mb-6">
                            
                            <span className={gradientText}>Hard Skill</span>
                        </h3>
                        <div className="space-y-4">
                            {hardSkillsData.map((skill, index) => (
                                <SkillBar key={index} name={skill.name} level={skill.level} />
                            ))}
                        </div>
                    </div>

                    {/* Soft Skill Section */}
                    <div className="skills-category p-6 bg-gray-900/40 rounded-xl shadow-inner shadow-fuchsia-400/10">
                        <h3 className="text-2xl font-bold text-center mb-6">
                            
                            <span className={gradientText}>Soft Skill</span>
                        </h3>
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