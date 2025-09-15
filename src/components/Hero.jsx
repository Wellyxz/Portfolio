import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import ParticlesBackground from './Particles';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center text-white px-4 md:flex-row md:text-left md:justify-around lg:justify-center lg:gap-20 bg-gray-950"
    >
      {/* Latar belakang partikel */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Background radial-gradient */}
      <div className="absolute inset-0 bg-radial-gradient-to-br from-cyan-900 via-transparent to-transparent opacity-30 z-10"></div>

      {/* Konten utama Hero Section */}
      <div className="md:w-1/2 lg:w-1/3 z-20 p-4">
        {/* Nama dengan gradasi dan kilauan */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-2 
                       bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text text-glow-cyan">
          Waly Al Fathah
        </h2>
        
        <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-300">
          Saya adalah siswa
        </p>
        
        {/* Teks "SMKN 69 Jakarta" dengan animasi ketik satu kali */}
        <TypeAnimation
          sequence={[
            'SMKN 69 Jakarta',
          ]}
          wrapper="p"
          cursor={true}
          className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-fuchsia-400 to-cyan-400 text-transparent bg-clip-text mb-4 text-glow-fuchsia"
        />

        {/* Frasa dengan animasi ketik dan ganti */}
        <TypeAnimation
          sequence={[
            'Rencanakan, Lakukan, Konsisten',
            3000, 
            'Tetap bermimpi walaupun itu mustahil',
            3000,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto md:mx-0 mb-6"
        />

        <div className="flex flex-col items-center justify-center md:justify-start gap-6 mb-8">
          <div className="flex gap-6 text-2xl">
            <a href="https://github.com/Wellyxz" aria-label="Github" className="group text-glow-cyan hover:text-cyan-400 transition-colors duration-300">
              <FaGithub className="transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-lg" />
            </a>
            <a href="https://www.instagram.com/wallyaft/" aria-label="Instagram" className="group text-glow-cyan hover:text-cyan-400 transition-colors duration-300">
              <FaInstagram className="transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-lg" />
            </a>
            <a href="https://www.linkedin.com/in/waly-al-fathah-b9b780327/" aria-label="Linkedin" className="group text-glow-cyan hover:text-cyan-400 transition-colors duration-300">
              <FaLinkedin className="transition-all duration-300 group-hover:text-cyan-400 group-hover:drop-shadow-lg" />
            </a>
          </div>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 shadow-glow-cyan">
            Download CV
          </button>
        </div>
      </div>
      {/* Gambar profil dengan border gradasi dan kilauan */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden 
                    bg-gradient-to-tr from-cyan-400 to-fuchsia-400 p-1 mt-8 md:mt-0 
                    drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] z-20 shadow-glow-cyan">
        <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
          <img
            src=".\public\images\profil_sementara-removebg-preview.png"
            alt="Waly Al Fathah"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;