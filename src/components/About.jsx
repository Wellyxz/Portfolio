import React from 'react';
import ParticlesBackground from './Particles'; 
import { FaCode, FaShieldAlt } from 'react-icons/fa'; // Ikon menarik

const About = () => {
    // Kelas utilitas untuk gradien
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    return (
        // REVISI FOKUS: Menggunakan pt-36 untuk memastikan judul tidak tertutup header fixed
        <section id="about" className="relative pt-36 pb-20 bg-gray-950 text-white overflow-hidden"> 
            {/* Latar belakang partikel */}
            <div className="absolute inset-0 z-0 h-full w-full"> 
                <ParticlesBackground />
            </div>

            {/* Konten About */}
            <div className="container mx-auto px-4 relative z-10 text-center">
                
                {/* Judul: Konsisten dengan gradien dan glow */}
                <h2 className={`text-4xl sm:text-5xl font-extrabold mb-16 ${gradientText} text-shadow-lg`}>
                    
                    Tentang Saya
                </h2>
                
                {/* Paragraf Utama: Diberi highlight minimalis */}
                <div className="max-w-4xl mx-auto p-6 lg:p-10 border-t border-b border-cyan-400/50 shadow-lg shadow-fuchsia-400/10 transition duration-500 hover:shadow-cyan-400/20">
                    
                    <p className="text-xl font-semibold mb-4 text-gray-100">
                        Pengembangan Web & Keamanan Siber.
                    </p>
                    
                    <p className="text-base max-w-3xl mx-auto leading-relaxed text-gray-300 space-y-3">
                        {/* Poin 1 */}
                        <FaCode className="inline text-cyan-400 mr-2" />
                        Saya seorang siswa yang berminat dalam dunia programming dan pengembangan web. Saya suka bereksperimen dengan ide-ide baru dan membangun solusi digital yang kreatif, efisien, serta bermanfaat.
                        <br/><br/>
                        {/* Poin 2 */}
                        <FaShieldAlt className="inline text-fuchsia-400 mr-2" />
                        Selain fokus di web development, saya juga menaruh minat besar pada Cyber Security. Saya terus mengasah keterampilan dengan mempelajari teknik - teknik keamanan, mencoba challenge CTF (Capture The Flag), dan mencoba terus mempelajari tentang serangan serangan siber.
                        <br/><br/>
                        Bagi saya, terus belajar adalah suatu keharusan. Karena, pengetahuan itu tidak terbatas, serta dengan menghadapi tantangan yang ada bisa mendorong saya berkembang lebih jauh.
                    </p>
                    
                </div>
                
            </div>
        </section>
    );
};

export default About;