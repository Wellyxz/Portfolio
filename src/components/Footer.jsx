import React from 'react';
// Tidak perlu mengimpor ikon jika tidak digunakan, namun saya biarkan agar mudah diaktifkan kembali
// import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; 

const Footer = () => {
    // Fungsi untuk mendapatkan tahun saat ini secara dinamis
    const currentYear = new Date().getFullYear();
    // Variabel ini tidak digunakan di sini, tapi saya biarkan untuk konsistensi
    // const gradientText = 'bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text'; 

    return (
        <footer className="bg-gray-950 border-t border-gray-800/70 py-6">
            <div className="container mx-auto px-4 text-center">
                
                {/* Hak Cipta 
                Border top (pt-6) dihilangkan dari <p> karena sudah ada di <footer> 
                */}
                <p className="text-sm text-gray-500">
                    &copy; {currentYear} <span className="font-semibold text-white">Waly Al Fathah.</span> Dibuat dengan <span className="text-cyan-400">React</span> & <span className="text-fuchsia-400">Tailwind CSS</span>.
                </p>
                
            </div>
        </footer>
    );
};

export default Footer;