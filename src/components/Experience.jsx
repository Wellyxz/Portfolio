import React from 'react';
import ParticlesBackground from './Particles'; // Pastikan path-nya benar

const experiencesData = [
  {
    role: 'Anggota MPK SMKN 69 Jakarta',
    company: 'MPK SMKN 69 Jakarta',
    period: '2024 - 2025',
    imageURL: '/public/images/MPK.jpg', // Ganti dengan URL gambar perusahaan
    description: 'Saya menjabat sebagai salah satu anggota dari organisasi MPK 69 Jakarta dan belajar tentang tanggung jawab, management waktu, public speaking dan kerja sama tim.',
  },
  {
    role: 'Peserta LKSW Cyber Security 2025',
    company: 'Kemendikbudristek',
    period: '2025',
    imageURL: '/public/images/LKSW Cyber Security 2025.jpeg', // Ganti dengan URL gambar perusahaan
    description: 'Saya menjadi salah satu peserta dalam ajang kompetisi LKSW bidang Cyber Security 2025 yang menguji kemampuan keamanan siber dalam bentuk lomba Capture The Flag seperti mengindentifikasi kerentanan sistem dan jaringan sekaligus mengeksplotasinya.',
  },
  {
    role: 'Peserta Kompetisi WRECK IT 5.0',
    company: 'Korps Taruna Politeknik Siber dan Sandi Negara',
    period: '2024',
    imageURL: '/public/images/Wrect-It 5.0.jpeg', // Ganti dengan URL gambar perusahaan
    description: 'Saya menjadi salah satu peserta dalam ajang kompetisi WRECK IT 5.0 yang menguji kemampuan keamanan siber dalam bentuk lomba Capture The Flag seperti menganalisis kerentanan dalam suatu sistem dan jaringan sekaligus mengeskploitasinya.',
  },
  {
    role: 'Peserta Kompetisi WRECK IT 6.0',
    company: 'Korps Taruna Politeknik Siber dan Sandi Negara',
    period: '2025',
    imageURL: '/public/images/Wrect-It 6.0.png', // Ganti dengan URL gambar perusahaan
    description: 'Saya menjadi salah satu peserta dalam ajang kompetisi WRECK IT 6.0 yang menguji kemampuan keamanan siber dalam bentuk lomba Capture The Flag seperti menganalisis kerentanan dalam suatu sistem dan jaringan sekaligus mengeskploitasinya.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Latar belakang partikel */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Judul utama dengan gradasi */}
        <h2 className="text-center text-4xl font-bold mb-16 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">My Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiencesData.map((exp, index) => (
            <div
              className="flex-1 bg-gray-800 p-8 rounded-xl flex flex-col items-center text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(56,189,248,0.5),0_0_15px_3px_rgba(232,121,249,0.5)]"
              key={index}
            >
              <div className="mb-4">
                {/* Border gambar dengan gradasi */}
                <div className="relative w-56 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-fuchsia-400">
                  <img src={exp.imageURL} alt={exp.company} className="w-full h-full rounded-full object-cover" />
                </div>
              </div>
              <div className="space-y-2">
                {/* Role dengan gradasi */}
                <h3 className="text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
                  {exp.role}
                </h3>
                <p className="text-lg font-medium text-gray-300">{exp.company}</p>
                <span className="block text-sm text-gray-400 italic mb-4">{exp.period}</span>
                <p className="text-base text-gray-400 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;