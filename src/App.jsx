import React from 'react';
import './styles/style.css';

// Impor komponen yang akan dibuat
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Tools from './components/Tools';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Certificates from './components/Certificates';

function App() {
  return (
    <div className="portfolio-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Experience />
        <Projects />
        <Certificates /> {/* Komponen Certificates ditambahkan di sini */}
        <Contact />
      </main>
    </div>
  );
}

export default App;