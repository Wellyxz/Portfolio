import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const numParticles = 80;
    
    // Array warna yang akan digunakan
    const colors = ['#06b6d4', '#d946ef']; // Cyan dan Fuchsia

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        // Memilih warna secara acak dari array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: Math.random() * 1 - 0.5,
          speedY: Math.random() * 1 - 0.5,
          color: randomColor, // Menambahkan properti warna
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.fillStyle = p.color; // Menggunakan warna unik setiap partikel
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      });
    };

    const updateParticles = () => {
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width || p.x < 0) p.speedX = -p.speedX;
        if (p.y > canvas.height || p.y < 0) p.speedY = -p.speedY;
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
  );
};

export default ParticlesBackground;