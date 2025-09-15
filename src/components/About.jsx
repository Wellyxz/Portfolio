import React from 'react';
import ParticlesBackground from './Particles'; // Tambahkan import ini

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Latar belakang partikel */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Konten About */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold mb-8 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">About Me</h2>
        <p className="text-lg mb-4 max-w-2xl mx-auto">
          Saya adalah seorang siswa yang bersemangat dalam bidang programming dan pengembangan web. Saya memiliki minat besar untuk terus belajar dan menciptakan solusi digital yang kreatif dan efisien.
        </p>
        <p className="text-lg max-w-2xl mx-auto">
          Selain itu, saya juga tertarik pada Cyber Security dan terus mengasah kemampuan saya di bidang ini.
        </p>
      </div>
    </section>
  );
};

export default About;