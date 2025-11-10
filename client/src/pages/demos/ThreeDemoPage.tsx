import { useEffect, useRef } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ThreeDemoPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    let animationId: number;
    let rotation = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#1a1a2e');
      gradient.addColorStop(1, '#0f0f1e');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw rotating cube (isometric view)
      const size = 100;
      rotation += 0.01;

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

      // Floating particles
      for (let i = 0; i < 100; i++) {
        const x = (centerX + Math.cos(rotation * 2 + i) * (150 + i * 3)) % canvas.width;
        const y = (centerY + Math.sin(rotation + i) * (150 + i * 2)) % canvas.height;
        const radius = 2 + Math.sin(rotation + i) * 1;
        
        ctx.fillStyle = `rgba(102, 126, 234, ${0.3 + Math.sin(rotation + i) * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Title
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 32px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('3D Canvas Animation', centerX, 60);
      
      ctx.font = '16px sans-serif';
      ctx.fillStyle = '#aaa';
      ctx.fillText('Pure 2D canvas rendering - no Three.js needed!', centerX, 90);

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1a2e]">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="secondary" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <canvas
        ref={canvasRef}
        className="w-full h-screen"
      />
    </div>
  );
}
