import React from 'react';
import ParticlesBackground from './Particles'; // Pastikan path-nya benar

const experiencesData = [
  {
    role: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2023 - Sekarang',
    imageURL: 'https://via.placeholder.com/150', // Ganti dengan URL gambar perusahaan
    description: 'Mengembangkan dan memelihara aplikasi web menggunakan React dan JavaScript. Bertanggung jawab atas implementasi fitur baru, perbaikan bug, dan optimasi performa. Berkolaborasi dengan tim backend dan desainer UI/UX.',
  },
  {
    role: 'Junior Web Developer',
    company: 'Creative Studio Co.',
    period: '2021 - 2023',
    imageURL: 'https://via.placeholder.com/150', // Ganti dengan URL gambar perusahaan
    description: 'Membangun website statis dan dinamis dengan HTML, CSS, dan JavaScript. Bekerja sama dengan tim untuk merancang tata letak dan memastikan responsivitas di berbagai perangkat.',
  },
  {
    role: 'Freelance Web Designer',
    company: 'Independen',
    period: '2020 - 2021',
    imageURL: 'https://via.placeholder.com/150', // Ganti dengan URL gambar perusahaan
    description: 'Menerima proyek desain dan pengembangan website untuk klien perorangan. Menggunakan Figma untuk desain dan mengimplementasikannya menjadi kode fungsional.',
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
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {experiencesData.map((exp, index) => (
            <div
              className="flex-1 bg-gray-800 p-8 rounded-xl flex flex-col items-center text-center shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_15px_3px_rgba(56,189,248,0.5),0_0_15px_3px_rgba(232,121,249,0.5)]"
              key={index}
            >
              <div className="mb-4">
                {/* Border gambar dengan gradasi */}
                <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-fuchsia-400">
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