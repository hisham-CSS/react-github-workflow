import { useEffect, useRef } from 'react';

export default function ThreeDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Simple 3D-like animation using 2D canvas (no Three.js dependency)
    let animationId: number;
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(1, '#0f0f1e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw rotating cube (isometric view)
      const size = 80;
      rotation += 0.01;

      // Calculate cube vertices
      const cos = Math.cos(rotation);
      const sin = Math.sin(rotation);

      // Front face
      ctx.fillStyle = '#4CC3D9';
      ctx.beginPath();
      ctx.moveTo(centerX + size * cos, centerY + size * sin);
      ctx.lineTo(centerX + size * cos + size, centerY + size * sin);
      ctx.lineTo(centerX + size * cos + size, centerY + size * sin + size);
      ctx.lineTo(centerX + size * cos, centerY + size * sin + size);
      ctx.closePath();
      ctx.fill();

      // Top face
      ctx.fillStyle = '#667eea';
      ctx.beginPath();
      ctx.moveTo(centerX + size * cos, centerY + size * sin);
      ctx.lineTo(centerX + size * cos + size / 2, centerY + size * sin - size / 2);
      ctx.lineTo(centerX + size * cos + size + size / 2, centerY + size * sin - size / 2);
      ctx.lineTo(centerX + size * cos + size, centerY + size * sin);
      ctx.closePath();
      ctx.fill();

      // Right face
      ctx.fillStyle = '#764ba2';
      ctx.beginPath();
      ctx.moveTo(centerX + size * cos + size, centerY + size * sin);
      ctx.lineTo(centerX + size * cos + size + size / 2, centerY + size * sin - size / 2);
      ctx.lineTo(centerX + size * cos + size + size / 2, centerY + size * sin + size - size / 2);
      ctx.lineTo(centerX + size * cos + size, centerY + size * sin + size);
      ctx.closePath();
      ctx.fill();

      // Add some floating particles
      for (let i = 0; i < 50; i++) {
        const x = (centerX + Math.cos(rotation * 2 + i) * (100 + i * 3)) % canvas.width;
        const y = (centerY + Math.sin(rotation + i) * (100 + i * 2)) % canvas.height;
        const radius = 2;
        
        ctx.fillStyle = `rgba(102, 126, 234, ${0.3 + Math.sin(rotation + i) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border border-border bg-[#1a1a2e]">
      <canvas
        ref={canvasRef}
        width={800}
        height={400}
        className="w-full h-full"
      />
    </div>
  );
}
