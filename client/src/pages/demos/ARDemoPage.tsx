import { useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ARDemoPage() {
  useEffect(() => {
    // Load A-Frame first
    const aframeScript = document.createElement('script');
    aframeScript.src = 'https://aframe.io/releases/1.4.2/aframe.min.js';
    aframeScript.async = true;
    document.head.appendChild(aframeScript);

    // Then load AR.js
    aframeScript.onload = () => {
      const arScript = document.createElement('script');
      arScript.src = 'https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js';
      arScript.async = true;
      document.head.appendChild(arScript);
    };

    return () => {
      // Cleanup
      aframeScript.remove();
    };
  }, []);

  const arHTML = `
    <a-scene
      embedded
      arjs="sourceType: webcam; debugUIEnabled: false; detectionMode: mono_and_matrix; matrixCodeType: 3x3;">
      <a-marker preset="hiro">
        <a-box 
          position="0 0.5 0" 
          material="color: red;"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 3000">
        </a-box>
        <a-text 
          value="Hello AR!" 
          position="0 1.5 0" 
          align="center" 
          color="#FFF">
        </a-text>
      </a-marker>
      <a-entity camera></a-entity>
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

      <div className="fixed top-4 right-4 z-50 bg-black/70 text-white px-4 py-2 rounded-lg text-sm max-w-xs">
        <p className="font-semibold mb-1">AR Instructions:</p>
        <ol className="text-xs space-y-1 list-decimal list-inside">
          <li>Allow camera access</li>
          <li>Print/display <a href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" target="_blank" rel="noopener noreferrer" className="underline">Hiro marker</a></li>
          <li>Point camera at marker</li>
        </ol>
      </div>
      
      <div 
        className="w-full h-screen"
        dangerouslySetInnerHTML={{ __html: arHTML }}
      />
    </div>
  );
}
