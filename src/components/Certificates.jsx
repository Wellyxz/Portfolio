import React from 'react';
import ParticlesBackground from './Particles';
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'; // Import FaExternalLinkAlt

// Data sertifikat (MENGASUMSIKAN SEMUA FILE ADA DI /public/pdf/ dan /public/images/)
const certificatesData = [
    {
        id: 1,
        title: 'Virtual Bootcamp Digital Business and Cyber Security',
        organization: 'Universitas Siber Asia & Universitas Nasional',
        imageUrl: '/images/Sertifikat Virtual Bootcamp Batch 1 Digital Business and Cyber Security Waly Al Fathah_page-0001.jpg',
        type: 'Bootcamp', 
        // PASTIKAN NAMA FILE INI 100% SAMA DI FOLDER PUBLIC/PDF
        certificateUrl: '/pdf/Sertifikat Virtual Bootcamp Batch 1 Digital Business and Cyber Security Waly Al Fathah.pdf', 
    },
    {
        id: 2,
        title: 'Pelatihan CTF 2025 UKM Laos',
        organization: 'Universitas Jember',
        imageUrl: '/images/Sertifikat Pelatihan CTF 2025 UKM Laos.jpeg',
        type: 'CTF Training', 
        certificateUrl: '/pdf/Sertifikat Pelatihan CTF UKM Laos.pdf',

    },
    {
        id: 3,
        title: 'Webinar Digital Forensic 101',
        organization: 'Jadi Hacker',
        imageUrl: '/images/Sertifikat webinar Digital Forensics 101.png',
        type: 'Webinar',
        certificateUrl: '/pdf/Sertifikat Digital Forensics 101.pdf',
    },
    {
        id: 4,
        title: 'Webinar From Zero To Hacker',
        organization: 'Jadi Hacker',
        imageUrl: '/images/Sertifikat From Zero To Hacker.jpeg',
        type: 'Webinar',
        certificateUrl: '/pdf/Sertifikat From Zero To Hacker.pdf',
    },
    {
        id: 5,
        title: 'Webinar UI DigiTalk 2024',
        organization: 'BEM UI',
        imageUrl: '/images/Sertifikat UI DigiTalk 2024.jpeg',
        type: 'Webinar',
        certificateUrl: '/pdf/Sertifikat BEM UI.pdf',
    },
    {
        id: 6,
        title: 'Test TOEIC',
        organization: 'Educational Testing Service (ETC)',
        imageUrl: '/images/Sertifikat TOEIC.png',
        type: 'Test',
        certificateUrl: '/pdf/Sertifikat_Toeic.pdf',
    },
    {
        id: 7,
        title: 'Kepengurusan',
        organization: 'MPK SMKN 69 Jakarta',
        imageUrl: '/images/Sertifikat MPK.png',
        type: 'Organization',
        certificateUrl: '/pdf/Sertifikat_MPK.pdf',
    },
];

const Certificates = () => {
    const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text';

    const CertificateCard = ({ cert }) => {
        const isKeyCert = cert.type === 'Bootcamp' || cert.type === 'CTF Training' || cert.type === 'Test' || cert.type === 'Organization';
        
        let hoverClass = 'hover:shadow-cyan-400/30 border-gray-700 hover:border-cyan-400/50';
        if (cert.type === 'Bootcamp') {
            hoverClass = 'shadow-lg shadow-fuchsia-400/10 hover:shadow-fuchsia-400/50 border-fuchsia-400/30';
        } else if (cert.type === 'CTF Training') {
            hoverClass = 'shadow-lg shadow-cyan-400/10 hover:shadow-cyan-400/50 border-cyan-400/30';
        } 

        return (
            <div
                className={`bg-gray-900/50 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.03] border ${hoverClass} flex flex-col h-full`}
            >
                {/* Gambar Sertifikat: HANYA DISPLAY */}
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img 
                        className="w-full h-full object-cover" // Hapus hover scale di sini
                        src={cert.imageUrl} 
                        alt={cert.title} 
                    />
                    {/* Label Tipe Sertifikat */}
                    <span className={`absolute top-0 right-0 m-3 px-3 py-1 text-xs font-bold rounded-full ${isKeyCert ? 'bg-fuchsia-600 text-white' : 'bg-gray-600 text-gray-200'}`}>
                        {cert.type}
                    </span>
                </div>

                {/* Konten Teks & Tombol Interaktif */}
                <div className="p-6 text-center space-y-4 flex flex-col justify-between flex-grow min-h-24">
                    <div className="flex-grow">
                        {/* Judul */}
                        <h3 className={`text-xl font-bold ${gradientText} leading-tight mb-2`}>
                            {cert.title}
                        </h3>
                        {/* Organisasi */}
                        <p className="text-sm text-gray-400 italic flex-shrink-0">{cert.organization}</p>
                    </div>
                    
                    {/* Wadah untuk menampung kedua tombol (View & Download) */}
                    <div className="flex justify-center space-x-3 mt-4">
                        
                        {/* Tombol 1: VIEW PDF (Membuka di tab baru - Tanpa download) */}
                        <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-3 py-2 border border-cyan-600 text-sm font-medium rounded-md text-cyan-500 
                                       bg-gray-800 hover:bg-cyan-900 transition duration-150 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <FaExternalLinkAlt className="mr-2 h-3 w-3" />
                            View
                        </a>

                        {/* Tombol 2: DOWNLOAD PDF (Memaksa Unduhan) */}
                        <a
                            href={cert.certificateUrl}
                            download={cert.title + ' - ' + cert.organization + '.pdf'}
                            className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white 
                                       bg-fuchsia-600 hover:bg-fuchsia-700 transition duration-150 ease-in-out shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <FaDownload className="mr-2 h-4 w-4" />
                            Download
                        </a>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section id="certificates" className="relative pt-36 pb-20 bg-gray-950 text-white overflow-hidden">
            
            {/* Latar belakang partikel */}
            <div className="absolute inset-0 z-0 h-full w-full">
                <ParticlesBackground />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Judul utama konsisten */}
                <h2 className={`text-center text-4xl sm:text-5xl font-extrabold mb-16 ${gradientText} text-shadow-lg`}>
                    Sertifikasi & Pelatihan
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"> 
                    {certificatesData.map((cert) => (
                        <CertificateCard key={cert.id} cert={cert} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;