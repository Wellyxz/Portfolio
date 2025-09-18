import React from 'react';
import ParticlesBackground from './Particles'; // Pastikan path-nya benar

const certificatesData = [
  {
    id: 1,
    title: 'Virtual Bootcamp Batch 1 Digital Business and Cyber Security',
    organization: 'Universitas Siber Asia & Universitas Nasional',
    imageUrl: '/images/Sertifikat Virtual Bootcamp Batch 1 Digital Business and Cyber Security Waly Al Fathah_page-0001.jpg',
  },
  {
    id: 2,
    title: 'Pelatihan CTF 2025 UKM Laos',
    organization: 'Universitas Jember ',
    imageUrl: '/images/Sertifikat Pelatihan CTF 2025 UKM Laos.jpeg',
  },
   {
    id: 3,
    title: 'Webinar UI DigiTalk 2024',
    organization: 'BEM UI',
    imageUrl: '/images/Sertifikat UI DigiTalk 2024.jpeg',
  },
  {
    id: 4,
    title: 'Webinar From Zero Hacker',
    organization: 'Jadi Hacker',
    imageUrl: '/images/Sertifikat From Zero To Hacker.jpeg',
  },
   {
    id: 5,
    title: 'Webinar Digital Forensic 101',
    organization: 'Jadi Hacker',
    imageUrl: '/images/Sertifikat webinar Digital Forensics 101.png',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-bold mb-16 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">My Certificate</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificatesData.map((cert) => (
            <a
              key={cert.id}
              href={cert.certificateUrl !== '#' ? cert.certificateUrl : undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="block cursor-pointer"
            >
              <div
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105"
              >
                <img className="w-full h-auto object-cover" src={cert.imageUrl} alt={cert.title} />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">{cert.title}</h3>
                  <p className="text-gray-300">{cert.organization}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;