import React, { useEffect, useRef } from "react";
import { CircuitBoard, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// Particle config
const PARTICLE_COUNT = 80;
const COLORS = [
  [147, 51, 234], // purple
  [121, 40, 202], // deep violet
  [20, 184, 166], // teal
  [56, 189, 248], // light blue
  [245, 158, 11], // amber
];

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Handle Retina screens and resizing
    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const scale = window.devicePixelRatio || 1;
      canvas.width = width * scale;
      canvas.height = height * scale;
      ctx.scale(scale, scale);
    };
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    interface Particle {
      x: number;
      y: number;
      r: number;
      color: [number, number, number];
      vx: number;
      vy: number;
      opacity: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      r: Math.random() * 3 + 0.5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)] as [number, number, number],
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      opacity: Math.random() * 0.8 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.01,
    }));

    const drawConnections = () => {
      ctx.lineWidth = 0.5;
      particles.forEach((p1, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.strokeStyle = `rgba(147, 51, 234, ${0.1 * (1 - dist / 100)})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
    };

    const drawParticles = () => {
      particles.forEach((p) => {
        const pulseFactor = Math.sin(time * p.pulseSpeed) * 0.3 + 0.7;
        ctx.shadowColor = `rgba(${p.color.join(",")}, ${p.opacity})`;
        ctx.shadowBlur = 10;
        ctx.fillStyle = `rgba(${p.color.join(",")}, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulseFactor, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;
      });
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      drawConnections();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-teal-900/20"></div>

      {/* Canvas animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      ></canvas>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="relative p-4 bg-gradient-to-br from-purple-900/60 to-teal-900/60 rounded-full border border-purple-500/30 backdrop-blur-sm">
              <CircuitBoard size={56} className="text-purple-400" />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-purple-300 mb-4 font-medium"
        >
          Hi, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-teal-400 leading-tight"
        >
          Tushar Chaudhri
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Electronics & Telecommunication Engineering Student | Embedded
          Systems & AI/ML Enthusiast | Python & C++ Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          <a
            href="#projects"
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-teal-500 rounded-full text-white font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              View Projects
              <ChevronDown
                size={18}
                className="group-hover:translate-y-1 transition-transform"
              />
            </span>
          </a>
          <a
            href="public/TusharChaudhariResume.pdf"
            download
            className="px-8 py-4 bg-transparent border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-900/30 hover:border-purple-300 hover:text-purple-300 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-purple-400 to-transparent animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
