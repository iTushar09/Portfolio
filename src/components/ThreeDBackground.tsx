
import React, { useEffect, useRef } from 'react';

interface Shape3D {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  size: number;
  type: 'cube' | 'pyramid' | 'octahedron';
  color: string;
  velocity: {
    x: number;
    y: number;
    z: number;
    rotX: number;
    rotY: number;
    rotZ: number;
  };
}

const ThreeDBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create 3D shapes
    const shapes: Shape3D[] = Array.from({ length: 15 }, () => ({
      x: (Math.random() - 0.5) * 1000,
      y: (Math.random() - 0.5) * 1000,
      z: Math.random() * 500 + 100,
      rotationX: Math.random() * Math.PI * 2,
      rotationY: Math.random() * Math.PI * 2,
      rotationZ: Math.random() * Math.PI * 2,
      size: Math.random() * 40 + 20,
      type: ['cube', 'pyramid', 'octahedron'][Math.floor(Math.random() * 3)] as 'cube' | 'pyramid' | 'octahedron',
      color: ['#8B5CF6', '#06B6D4', '#10B981', '#F59E0B'][Math.floor(Math.random() * 4)],
      velocity: {
        x: (Math.random() - 0.5) * 0.5,
        y: (Math.random() - 0.5) * 0.5,
        z: (Math.random() - 0.5) * 0.3,
        rotX: (Math.random() - 0.5) * 0.02,
        rotY: (Math.random() - 0.5) * 0.02,
        rotZ: (Math.random() - 0.5) * 0.02,
      },
    }));

    // 3D projection function
    const project = (x: number, y: number, z: number) => {
      const perspective = 800;
      const scale = perspective / (perspective + z);
      return {
        x: (x * scale) + canvas.width / 2,
        y: (y * scale) + canvas.height / 2,
        scale,
      };
    };

    // Rotation functions
    const rotateX = (x: number, y: number, z: number, angle: number) => ({
      x,
      y: y * Math.cos(angle) - z * Math.sin(angle),
      z: y * Math.sin(angle) + z * Math.cos(angle),
    });

    const rotateY = (x: number, y: number, z: number, angle: number) => ({
      x: x * Math.cos(angle) + z * Math.sin(angle),
      y,
      z: -x * Math.sin(angle) + z * Math.cos(angle),
    });

    const rotateZ = (x: number, y: number, z: number, angle: number) => ({
      x: x * Math.cos(angle) - y * Math.sin(angle),
      y: x * Math.sin(angle) + y * Math.cos(angle),
      z,
    });

    // Draw cube
    const drawCube = (shape: Shape3D) => {
      const size = shape.size;
      const vertices = [
        [-size, -size, -size], [size, -size, -size], [size, size, -size], [-size, size, -size],
        [-size, -size, size], [size, -size, size], [size, size, size], [-size, size, size],
      ];

      const projectedVertices = vertices.map(([x, y, z]) => {
        let rotated = rotateX(x, y, z, shape.rotationX);
        rotated = rotateY(rotated.x, rotated.y, rotated.z, shape.rotationY);
        rotated = rotateZ(rotated.x, rotated.y, rotated.z, shape.rotationZ);
        
        return project(
          shape.x + rotated.x,
          shape.y + rotated.y,
          shape.z + rotated.z
        );
      });

      const faces = [
        [0, 1, 2, 3], [4, 5, 6, 7], [0, 1, 5, 4],
        [2, 3, 7, 6], [0, 3, 7, 4], [1, 2, 6, 5],
      ];

      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 2;
      ctx.fillStyle = shape.color + '15';

      faces.forEach((face, i) => {
        ctx.beginPath();
        face.forEach((vertexIndex, j) => {
          const vertex = projectedVertices[vertexIndex];
          if (j === 0) {
            ctx.moveTo(vertex.x, vertex.y);
          } else {
            ctx.lineTo(vertex.x, vertex.y);
          }
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    };

    // Draw pyramid
    const drawPyramid = (shape: Shape3D) => {
      const size = shape.size;
      const vertices = [
        [0, -size, 0], [-size, size, -size], [size, size, -size],
        [size, size, size], [-size, size, size],
      ];

      const projectedVertices = vertices.map(([x, y, z]) => {
        let rotated = rotateX(x, y, z, shape.rotationX);
        rotated = rotateY(rotated.x, rotated.y, rotated.z, shape.rotationY);
        rotated = rotateZ(rotated.x, rotated.y, rotated.z, shape.rotationZ);
        
        return project(
          shape.x + rotated.x,
          shape.y + rotated.y,
          shape.z + rotated.z
        );
      });

      const faces = [[0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1], [1, 2, 3, 4]];

      ctx.strokeStyle = shape.color;
      ctx.lineWidth = 2;
      ctx.fillStyle = shape.color + '20';

      faces.forEach((face) => {
        ctx.beginPath();
        face.forEach((vertexIndex, j) => {
          const vertex = projectedVertices[vertexIndex];
          if (j === 0) {
            ctx.moveTo(vertex.x, vertex.y);
          } else {
            ctx.lineTo(vertex.x, vertex.y);
          }
        });
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      shapes.forEach((shape) => {
        // Update position and rotation
        shape.x += shape.velocity.x;
        shape.y += shape.velocity.y;
        shape.z += shape.velocity.z;
        shape.rotationX += shape.velocity.rotX;
        shape.rotationY += shape.velocity.rotY;
        shape.rotationZ += shape.velocity.rotZ;

        // Mouse interaction
        const mouseInfluence = 0.1;
        shape.velocity.x += mouseRef.current.x * mouseInfluence * 0.01;
        shape.velocity.y += mouseRef.current.y * mouseInfluence * 0.01;

        // Boundary wrapping
        if (shape.x > 500) shape.x = -500;
        if (shape.x < -500) shape.x = 500;
        if (shape.y > 500) shape.y = -500;
        if (shape.y < -500) shape.y = 500;
        if (shape.z > 600) shape.z = 100;
        if (shape.z < 50) shape.z = 600;

        // Draw shapes
        if (shape.type === 'cube') {
          drawCube(shape);
        } else if (shape.type === 'pyramid') {
          drawPyramid(shape);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40"
    />
  );
};

export default ThreeDBackground;
