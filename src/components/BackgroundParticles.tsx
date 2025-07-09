
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
  connections: number[];
}

const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    
    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    // Create particles
    const particlesArray: Particle[] = [];
    const colors = [
      'rgba(139, 92, 246, 0.5)', // Violet
      'rgba(59, 130, 246, 0.4)', // Blue
      'rgba(16, 185, 129, 0.4)', // Emerald
      'rgba(245, 158, 11, 0.3)', // Amber
      'rgba(236, 72, 153, 0.3)', // Pink
    ];

    const particleCount = Math.min(80, Math.floor(canvas.width * canvas.height / 15000));

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 3 + 1;
      particlesArray.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        connections: []
      });
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Draw connections between nearby particles
    const drawConnections = () => {
      const maxDistance = 120;
      
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const particle1 = particlesArray[i];
          const particle2 = particlesArray[j];
          
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2;
            
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.stroke();
          }
        }
      }
    };

    // Draw mouse connections
    const drawMouseConnections = () => {
      const maxDistance = 150;
      
      particlesArray.forEach(particle => {
        const dx = mouse.x - particle.x;
        const dy = mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < maxDistance) {
          const opacity = (1 - distance / maxDistance) * 0.4;
          
          ctx.beginPath();
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity})`;
          ctx.lineWidth = 1;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
          
          // Create ripple effect around mouse
          ctx.beginPath();
          ctx.arc(mouse.x, mouse.y, distance * 0.1, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.3})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });
    };

    // Animation function
    const animate = () => {
      time += 0.01;
      
      // Create trailing effect instead of complete clear
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections first (behind particles)
      drawConnections();
      drawMouseConnections();
      
      particlesArray.forEach((particle, index) => {
        // Update position with slight wave motion
        particle.x += particle.speedX + Math.sin(time + index * 0.1) * 0.1;
        particle.y += particle.speedY + Math.cos(time + index * 0.1) * 0.1;
        
        // Pulse effect
        const pulseSize = particle.size + Math.sin(time * particle.pulseSpeed * 100) * 0.5;
        const pulseOpacity = particle.opacity + Math.sin(time * particle.pulseSpeed * 80) * 0.2;
        
        // Draw particle with glow effect
        ctx.save();
        
        // Outer glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 3, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, '0.1)');
        ctx.fill();
        
        // Inner particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${pulseOpacity})`);
        ctx.fill();
        
        // Bright center
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulseSize * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/g, `${Math.min(pulseOpacity * 2, 0.8)})`);
        ctx.fill();
        
        ctx.restore();
        
        // Check boundaries and create smooth bounce
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX = -particle.speedX * 0.9;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY = -particle.speedY * 0.9;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }
        
        // Mouse repulsion effect
        const mouseDistance = Math.sqrt(
          Math.pow(mouse.x - particle.x, 2) + Math.pow(mouse.y - particle.y, 2)
        );
        
        if (mouseDistance < 100) {
          const force = (100 - mouseDistance) / 100;
          const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x);
          particle.speedX += Math.cos(angle) * force * 0.02;
          particle.speedY += Math.sin(angle) * force * 0.02;
        }
        
        // Apply friction
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
      {/* Additional overlay for depth */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-transparent via-slate-900/10 to-purple-900/20 pointer-events-none" />
    </>
  );
};

export default BackgroundParticles;
