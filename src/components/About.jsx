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
        Saya seorang siswa yang berminat dalam dunia programming dan pengembangan web. Saya suka bereksperimen dengan ide-ide baru dan membangun solusi digital yang kreatif, efisien, serta user-friendly.
        Selain fokus di web development, saya juga menaruh minat besar pada Cyber Security.
        Saya terus mengasah keterampilan dengan mempelajari teknik keamanan, mencoba challenge CTF (Capture The Flag), dan mengikuti perkembangan terbaru di bidang ini.
        Bagi saya, terus belajar adalah suatu keharusan untuk bisa berkembang dan mengikuti perkembangan zaman, terutama teknologi. Saya sangat terbuka dengan pengalaman baru, kolaborasi, serta tantangan yang bisa mendorong saya berkembang lebih jauh.
        </p>
      </div>
    </section>
  );
};

export default About;