import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
    const canvasRef = useRef(null);
    // Tambahkan ref untuk container parent, jika diperlukan, tapi kita akan fokus pada dimensi canvasRef
    const parentRef = useRef(null); 

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let particles = [];
        const numParticles = 80;
        
        const colors = ['#06b6d4', '#d946ef']; // Cyan dan Fuchsia

        // --- FUNGSI UTAMA: MENDAPATKAN DIMENSI DARI PARENT ---
        const resizeCanvas = () => {
            // Menggunakan clientWidth dan clientHeight dari elemen CANVAS itu sendiri
            // yang sudah diatur oleh CSS parent-nya (w-full h-full)
            canvas.width = canvas.clientWidth; 
            canvas.height = canvas.clientHeight; 
            createParticles();
        };

        const createParticles = () => {
            // Partikel diinisialisasi berdasarkan dimensi kanvas yang baru
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 2 + 1,
                    speedX: Math.random() * 1 - 0.5,
                    speedY: Math.random() * 1 - 0.5,
                    color: randomColor,
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.fillStyle = p.color;
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

                // Batasan partikel disesuaikan dengan dimensi kanvas yang baru
                if (p.x > canvas.width || p.x < 0) p.speedX = -p.speedX;
                if (p.y > canvas.height || p.y < 0) p.speedY = -p.speedY;
            });
        };

        const animate = () => {
            updateParticles();
            drawParticles();
            requestAnimationFrame(animate);
        };

        // Menggunakan ResizeObserver untuk memantau perubahan ukuran elemen canvas
        const observer = new ResizeObserver(resizeCanvas);
        observer.observe(canvas);

        animate();

        return () => {
            // Cleanup: Hentikan pengamatan saat komponen unmount
            observer.unobserve(canvas);
        };
    }, []);

    return (
        // Menggunakan ref tambahan (parentRef) tidak diperlukan, cukup canvasRef
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full"></canvas>
    );
};

export default ParticlesBackground;