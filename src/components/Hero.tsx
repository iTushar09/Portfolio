import React, { useEffect, useRef } from 'react';
import { CircuitBoard } from 'lucide-react';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    
    // Make canvas size match its display size
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particles setup
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }> = [];

    const colors = ['#9333ea', '#7928ca', '#14b8a6', '#38bdf8'];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: Math.random() * 0.2 - 0.1,
        vy: Math.random() * 0.2 - 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx = -particle.vx;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy = -particle.vy;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-purple-900/40 rounded-full">
              <CircuitBoard size={48} className="text-purple-400" />
            </div>
          </div>
          <p className="text-xl text-gray-300 mb-8">
            Hi, I’m 
              </p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-teal-400">
            
      Tushar Chaudhri
          </h1>
          <p className="text-xl text-gray-300 mb-8">
           
Electronics & Telecommunication Engineering Student | PCB Design Enthusiast | Embedded Systems Developer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full text-white font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#about"
              className="px-6 py-3 bg-transparent border border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-900/30 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;