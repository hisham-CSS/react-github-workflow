import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AFrameDemoPage() {
  useEffect(() => {
    // Load A-Frame script
    const script = document.createElement('script');
    script.src = 'https://aframe.io/releases/1.4.2/aframe.min.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup
      script.remove();
    };
  }, []);

  const aframeHTML = `
    <a-scene>
      <a-sky color="#ECECEC"></a-sky>
      
      <a-box 
        position="-1 0.5 -3" 
        rotation="0 45 0" 
        color="#4CC3D9"
        animation="property: rotation; to: 0 405 0; loop: true; dur: 10000">
      </a-box>
      
      <a-sphere 
        position="0 1.25 -5" 
        radius="1.25" 
        color="#EF2D5E"
        animation="property: position; to: 0 2.5 -5; dir: alternate; loop: true; dur: 2000; easing: easeInOutQuad">
      </a-sphere>
      
      <a-cylinder 
        position="1 0.75 -3" 
        radius="0.5" 
        height="1.5" 
        color="#FFC65D"
        animation="property: rotation; to: 0 360 0; loop: true; dur: 5000">
      </a-cylinder>
      
      <a-plane 
        position="0 0 -4" 
        rotation="-90 0 0" 
        width="8" 
        height="8" 
        color="#7BC8A4">
      </a-plane>
      
      <a-light type="ambient" color="#BBB"></a-light>
      <a-light type="directional" color="#FFF" intensity="0.6" position="-0.5 1 1"></a-light>
    </a-scene>
  `;

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 left-4 z-50">
        <Link href="/">
          <Button variant="secondary" size="sm" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Button>
        </Link>
      </div>
      
      <div 
        className="w-full h-screen"
        dangerouslySetInnerHTML={{ __html: aframeHTML }}
      />
    </div>
  );
}
