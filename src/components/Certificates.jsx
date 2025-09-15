import React from 'react';
import ParticlesBackground from './Particles'; // Pastikan path-nya benar

const certificatesData = [
  {
    id: 1,
    title: 'Virtual Bootcamp Batch 1 Digital Business and Cyber Security',
    organization: 'Universitas Siber Asia & Universitas Nasional',
    imageUrl: '/public/images/Sertifikat Virtual Bootcamp Batch 1 Digital Business and Cyber Security Waly Al Fathah_page-0001.jpg', // Path yang benar
    certificateUrl: 'https://www.credly.com/badges/certificate-id', 
  },
  {
    id: 2,
    title: 'Google Data Analytics Professional Certificate',
    organization: 'Coursera',
    imageUrl: '/public/images/Sertifikat Virtual Bootcamp Batch 1 Digital Business and Cyber Security Waly Al Fathah_page-0001.jpg',
    certificateUrl: 'https://www.coursera.org/verify/certificate-id',
  },
  {
    id: 3,
    title: 'Certified Ethical Hacker',
    organization: 'EC-Council',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=Ethical+Hacker',
    certificateUrl: '#',
  },
  {
    id: 4,
    title: 'Front End Development Libraries',
    organization: 'freeCodeCamp',
    imageUrl: 'https://via.placeholder.com/400x300.png?text=freeCodeCamp',
    certificateUrl: '#',
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="relative py-20 bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticlesBackground />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-bold mb-16 relative after:block after:w-16 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">My Certificates</h2>
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