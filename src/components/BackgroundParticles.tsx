import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  pulseSpeed: number;
}

const COLORS = [
  'rgba(139, 92, 246, 0.5)', // Violet
  'rgba(59, 130, 246, 0.4)', // Blue
  'rgba(16, 185, 129, 0.4)', // Emerald
  'rgba(245, 158, 11, 0.3)', // Amber
  'rgba(236, 72, 153, 0.3)', // Pink
];

const MAX_DISTANCES = {
  PARTICLE_CONNECTION: 120,
  MOUSE_CONNECTION: 150,
  MOUSE_REPULSION: 100,
};

const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    // Particle initialization
    const particlesArray: Particle[] = [];
    const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 15000));

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Helper function to replace alpha in rgba color string
    const replaceAlpha = (color: string, alpha: number) =>
      color.replace(/rgba\((\d+), (\d+), (\d+), [\d.]+\)/, (_, r, g, b) => `rgba(${r}, ${g}, ${b}, ${alpha})`);

    // Draw connections between particles
    const drawConnections = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        const p1 = particlesArray[i];
        for (let j = i + 1; j < particlesArray.length; j++) {
          const p2 = particlesArray[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DISTANCES.PARTICLE_CONNECTION) {
            const opacity = (1 - dist / MAX_DISTANCES.PARTICLE_CONNECTION) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = replaceAlpha(COLORS[0], opacity); // Using violet for connection lines
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw connections from mouse to particles
    const drawMouseConnections = () => {
      particlesArray.forEach((p) => {
        const dx = mouse.current.x - p.x;
        const dy = mouse.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DISTANCES.MOUSE_CONNECTION) {
          const opacity = (1 - dist / MAX_DISTANCES.MOUSE_CONNECTION) * 0.4;

          ctx.beginPath();
          ctx.strokeStyle = replaceAlpha(COLORS[2], opacity); // Using emerald color
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();

          // Ripple effect around mouse
          ctx.beginPath();
          ctx.arc(mouse.current.x, mouse.current.y, dist * 0.1, 0, Math.PI * 2);
          ctx.strokeStyle = replaceAlpha(COLORS[2], opacity * 0.3);
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    };

    // Animation loop
    const animate = () => {
      time += 0.01;

      // Trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawConnections();
      drawMouseConnections();

      particlesArray.forEach((particle, index) => {
        // Movement with slight wave
        particle.x += particle.speedX + Math.sin(time + index * 0.1) * 0.1;
        particle.y += particle.speedY + Math.cos(time + index * 0.1) * 0.1;

        // Pulse effects
        const pulseSize = particle.size + Math.sin(time * particle.pulseSpeed * 100) * 0.5;
        const pulseOpacity = particle.opacity + Math.sin(time * particle.pulseSpeed * 80) * 0.2;

        // Draw glowing particle
        ctx.save();

        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = replaceAlpha(particle.color, 0.1);
        ctx.fill();

        // Inner circle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = replaceAlpha(particle.color, pulseOpacity);
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = replaceAlpha(particle.color, Math.min(pulseOpacity * 2, 0.8));
        ctx.fill();

        ctx.restore();

        // Bounce off edges smoothly
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX * 0.9;
          particle.x = Math.min(Math.max(particle.x, 0), canvas.width);
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY * 0.9;
          particle.y = Math.min(Math.max(particle.y, 0), canvas.height);
        }

        // Mouse repulsion
        const dxMouse = mouse.current.x - particle.x;
        const dyMouse = mouse.current.y - particle.y;
        const mouseDist = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (mouseDist < MAX_DISTANCES.MOUSE_REPULSION) {
          const force = (MAX_DISTANCES.MOUSE_REPULSION - mouseDist) / MAX_DISTANCES.MOUSE_REPULSION;
          const angle = Math.atan2(particle.y - mouse.current.y, particle.x - mouse.current.x);
          particle.speedX += Math.cos(angle) * force * 0.02;
          particle.speedY += Math.sin(angle) * force * 0.02;
        }

        // Friction to slow speed gradually
        particle.speedX *= 0.995;
        particle.speedY *= 0.995;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
        style={{ opacity: 0.8 }}
      />
      {/* Overlay for subtle gradient depth */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-slate-900/10 to-purple-900/20 pointer-events-none" />
    </>
  );
};

export default BackgroundParticles;
