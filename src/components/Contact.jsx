import React from 'react';
import ParticlesBackground from './Particles';
// Impor ikon dari pustaka seperti react-icons
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Menambahkan FaMapMarkerAlt

const Contact = () => {
  const myPhoneNumber = '6281283432195'; // Ganti dengan nomor WhatsApp Anda (dengan kode negara, tanpa tanda tambah atau spasi)
  const myEmailAddress = 'walyalfathah@gmai.com'; // Ganti dengan alamat email Anda
  const myLocation = 'Jakarta Timur, Indonesia'; // Ganti dengan lokasi Anda

  return (
    <section id="contact" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center min-h-[50vh]">
        <h2 className="text-center text-4xl lg:text-5xl font-extrabold mb-10 relative after:block after:w-20 after:h-1.5 after:bg-gradient-to-r from-cyan-400 to-blue-500 after:rounded-full after:mx-auto after:mt-3">
          Contact Me
        </h2>
        
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl">
          Jangan ragu untuk menghubungi saya melalui saluran di bawah ini. Saya akan dengan senang hati berdiskusi.
        </p>

        {/* Info Lokasi */}
        <div className="flex items-center text-gray-400 text-lg mb-10 space-x-3">
          <FaMapMarkerAlt className="text-cyan-400" size={24} />
          <span>{myLocation}</span>
        </div>

        {/* Bagian Tautan Kontak yang Menarik */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl w-full">
          {/* Kartu WhatsApp */}
          <a
            href={`https://wa.me/${myPhoneNumber}`}
            className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-xl shadow-lg 
                       hover:bg-gray-700 transition-all duration-300 ease-in-out 
                       transform hover:-translate-y-2 hover:scale-105 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={60} className="text-green-500 group-hover:text-green-400 transition-colors duration-300 mb-4" />
            <span className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">WhatsApp</span>
            <span className="text-gray-400 mt-2 text-center">{myPhoneNumber}</span>
          </a>
          
          {/* Kartu Email */}
          <a
            href={`mailto:${myEmailAddress}`}
            className="flex flex-col items-center justify-center p-8 bg-gray-800 rounded-xl shadow-lg 
                       hover:bg-gray-700 transition-all duration-300 ease-in-out 
                       transform hover:-translate-y-2 hover:scale-105 group"
          >
            <FaEnvelope size={60} className="text-red-500 group-hover:text-red-400 transition-colors duration-300 mb-4" />
            <span className="text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">Email</span>
            <span className="text-gray-400 mt-2 text-center">{myEmailAddress}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;