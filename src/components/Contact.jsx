import React from 'react';
import ParticlesBackground from './Particles';
// Impor ikon dari pustaka seperti react-icons
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCode } from 'react-icons/fa'; 

const Contact = () => {
    const myPhoneNumber = '6281283432195'; 
    const myEmailAddress = 'walyalfathah@gmail.com';
    const myLocation = 'Jakarta Timur, Indonesia';
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    // Konstanta untuk styling
    const whatsappColor = 'text-cyan-400 group-hover:text-cyan-300'; // Menggunakan Cyan untuk WA
    const emailColor = 'text-fuchsia-400 group-hover:text-fuchsia-300'; // Menggunakan Fuchsia untuk Email

    return (
        <section id="contact" className="relative py-20 bg-gray-950 text-white overflow-hidden">
            {/* Latar belakang partikel (Menggunakan wrapper yang benar) */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <ParticlesBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[50vh]">
                {/* JUDUL UTAMA - Gradien Cyan-Fuchsia */}
                <h2 className={`text-center text-4xl lg:text-5xl font-extrabold mb-10 ${gradientText} text-shadow-lg`}>
                    Kontak Saya
                </h2>

                {/* Info Lokasi - Dibuat lebih menonjol */}
                <div 
                    className="flex items-center bg-gray-900/50 rounded-full p-4 px-6 text-gray-200 text-lg mb-10 space-x-3 
                                shadow-inner shadow-cyan-400/20 border border-fuchsia-400/30"
                >
                    <FaMapMarkerAlt className="text-fuchsia-400 animate-pulse" size={20} />
                    <span className="font-semibold tracking-wide">{myLocation}</span>
                </div>

                {/* Bagian Tautan Kontak yang Menarik */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
                    
                    {/* Kartu WhatsApp (Fokus pada Cyan/Komunikasi) */}
                    <a
                        href={`https://wa.me/${myPhoneNumber}`}
                        className="flex flex-col items-center justify-center p-8 bg-gray-900/50 rounded-xl 
                                   border border-gray-700 hover:border-cyan-400 
                                   shadow-xl transition-all duration-300 transform hover:scale-[1.05] 
                                   hover:shadow-cyan-400/50 group"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaWhatsapp size={60} className={`${whatsappColor} transition-colors duration-300 mb-4`} />
                        <span className="text-2xl font-bold text-white tracking-wide">
                            {/* Menambahkan nomor telepon di bawah nama */}
                            WhatsApp
                        </span>
                         <span className="text-sm text-gray-400 mt-1">{myPhoneNumber}</span>
                    </a>
                    
                    {/* Kartu Email (Fokus pada Fuchsia/Formal) */}
                    <a
                        href={`mailto:${myEmailAddress}`}
                        className="flex flex-col items-center justify-center p-8 bg-gray-900/50 rounded-xl 
                                   border border-gray-700 hover:border-fuchsia-400 
                                   shadow-xl transition-all duration-300 transform hover:scale-[1.05] 
                                   hover:shadow-fuchsia-400/50 group"
                    >
                        <FaEnvelope size={60} className={`${emailColor} transition-colors duration-300 mb-4`} />
                        <span className="text-2xl font-bold text-white tracking-wide">
                            Email
                        </span>
                        <span className="text-sm text-gray-400 mt-1">{myEmailAddress}</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;