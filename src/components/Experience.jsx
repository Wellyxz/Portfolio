import React from 'react';
import ParticlesBackground from './Particles';
import { FaGraduationCap, FaTrophy, FaUserTie } from 'react-icons/fa'; // Ikon untuk kategori

const experiencesData = [
    {
        category: 'Organization',
        role: 'Anggota MPK',
        company: 'MPK SMKN 69 Jakarta',
        period: '2024 - 2025',
        imageURL: '/images/MPK.jpg',
        description: 'Menjabat sebagai anggota organisasi dan belajar tentang tanggung jawab, manajemen waktu, public speaking, dan kerja sama tim dalam lingkungan sekolah.',
    },
    {
        category: 'Competition',
        role: 'Peserta LKSW Cyber Security 2025',
        company: 'Kemendikbudristek',
        period: '2025',
        imageURL: '/images/LKSW Cyber Security 2025.jpeg',
        description: 'Mengikuti kompetisi Capture The Flag (CTF) tingkat wilayah , menguji kemampuan dalam analisis, identifikasi dan eksploitasi kerentanan sistem dan jaringan.',
    },
    {
        category: 'Competition',
        role: 'Peserta Kompetisi WRECK IT 5.0',
        company: 'Korps Taruna Poltek SSN',
        period: '2024',
        imageURL: '/images/Wrect-It 5.0.jpeg',
        description: 'Berpartisipasi dalam ajang kompetisi CTF yang diselenggarakan oleh Politeknik Siber dan Sandi Negara, berfokus pada analisis kerentanan dan teknik penetration testing tingkat lanjut.',
    },
    {
        category: 'Competition',
        role: 'Peserta Kompetisi WRECK IT 6.0',
        company: 'Korps Taruna Poltek SSN',
        period: '2025',
        imageURL: '/images/Wrect-It 6.0.png',
        description: 'Berpartisipasi kembali dalam ajang kompetisi CTF yang diselenggarakan oleh Politeknik Siber dan Sandi Negara untuk mempertajam kemampuan analisis sistem dan eksploitasi jaringan.',
    },
    {
        category: 'Competition',
        role: 'Peserta Kompetisi ASTRO CTF 7.0',
        company: 'BEM STT Nurul Fikri',
        period: '2025',
        imageURL: '/images/Astro CTF.png',
        description: 'Kembali berpartisipasi dalam ajang kompetisi CTF yang diselenggarakan oleh BEM STT Nurul Fikri guna mempertajam kemampuan analisis kerentanan sistem dan jaringan serta mengeksploitasinya',
    },
];

const Experience = () => {
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    // Komponen Kartu Pengalaman Disesuaikan
    const ExperienceCard = ({ exp }) => {
        const isCompetition = exp.category === 'Competition';
        const icon = isCompetition ? <FaTrophy className="text-fuchsia-400" /> : <FaUserTie className="text-cyan-400" />;

        return (
            <div
                className={`bg-gray-900/50 p-6 rounded-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left shadow-2xl transition-all duration-300 transform 
                hover:scale-[1.02] 
                ${isCompetition 
                    ? 'hover:shadow-fuchsia-400/30 border border-fuchsia-400/30' 
                    : 'hover:shadow-cyan-400/30 border border-cyan-400/30'
                }`}
            >
                {/* Visual Kiri (Gambar dan Ikon) */}
                <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                    <div className={`relative w-24 h-24 rounded-full p-1 ${isCompetition ? 'bg-gradient-to-tr from-fuchsia-400 to-cyan-400' : 'bg-gradient-to-tr from-cyan-400 to-fuchsia-400'}`}>
                        <img src={exp.imageURL} alt={exp.company} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div className="text-3xl mt-2 flex justify-center">{icon}</div>
                </div>
                
                {/* Detail Kanan */}
                <div className="flex-grow space-y-2">
                    <span className="block text-sm font-semibold italic text-gray-500">{exp.period}</span>
                    <h3 className={`text-xl font-bold ${gradientText} text-left`}>
                        {exp.role}
                    </h3>
                    <p className="text-lg font-medium text-gray-300 text-left">{exp.company}</p>
                    <p className="text-base text-gray-400 leading-relaxed mt-3 text-left">
                        {exp.description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section id="experience" className="relative py-20 bg-gray-950 text-white overflow-hidden">
            {/* Latar belakang partikel (Menggunakan wrapper yang benar) */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <ParticlesBackground />
            </div>

            {/* Konten Utama */}
            <div className="container mx-auto px-4 relative z-10">
                {/* Judul utama dengan gradasi */}
                <h2 className={`text-center text-4xl sm:text-5xl font-extrabold mb-12 ${gradientText} text-shadow-lg`}>
                    Pengalaman
                </h2>

                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Menggunakan tata letak list/timeline yang lebih fokus */}
                    {experiencesData.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;