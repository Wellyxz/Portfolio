import React from 'react';
import ParticlesBackground from './Particles'; // Pastikan path-nya benar

// Data proyek statis
const projectsData = [
  {
    id: 1,
    title: 'WCTF',
    description: 'Sebuah website CTF untuk menguji kemampuan Cyber Security.        ',
    imageUrl: '/public/images/Screenshot (1001).png',
    liveUrl: 'https://wellyxz.github.io/WCTF/',
    codeUrl: 'https://github.com/Wellyxz/WCTF',
  },
  {
    id: 2,
    title: 'Tong Sampah Otomatis',
    description: 'Sebuah tong sampah yang modern, tong sampah tersebut adalah tong sampah otomatis dengan sistem sensor.',
    imageUrl: '/public/images/Tong sampah otomatis.jpeg',
    liveUrl: '#',
    codeUrl: 'https://github.com/user/project-b',
  },
  {
    id: 3,
    title: 'Sistem Reservasi C',
    description: 'Sistem pemesanan online untuk restoran dengan antarmuka yang intuitif dan responsif.',
    imageUrl: '/assets/images/project3.jpg',
    liveUrl: '#',
    codeUrl: 'https://github.com/user/project-c',
  },
  {
    id: 4,
    title: 'Desain UI/UX D',
    description: 'Studi kasus desain antarmuka pengguna untuk aplikasi mobile fintech, menggunakan Figma.',
    imageUrl: '/assets/images/project4.jpg',
    liveUrl: 'https://www.figma.com/file/id',
    codeUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      {/* Latar belakang partikel */}
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Judul utama tidak diubah */}
        <h2 className="text-center text-4xl font-bold mb-16 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">Latest Project</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl !== '#' ? project.liveUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-400/50 hover:shadow-2xl"
              >
                <img className="w-full h-56 object-cover" src={project.imageUrl} alt={project.title} />
                <div className="p-6">
                  {/* Judul proyek dengan gradasi */}
                  <h3 className="text-xl font-semibold mb-2 
                                 bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-transparent bg-clip-text">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  {/* Tombol dihapus */}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;