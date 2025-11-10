import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ARDemo() {
  const [isARActive, setIsARActive] = useState(false);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    if (isARActive && !scriptLoadedRef.current) {
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

      scriptLoadedRef.current = true;
    }
  }, [isARActive]);

  if (!isARActive) {
    return (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle>AR.js Demo</CardTitle>
          <CardDescription>
            Marker-based Augmented Reality using your camera
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg">
            <h4 className="font-semibold mb-2">How to use:</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
              <li>Click "Start AR Experience" below</li>
              <li>Allow camera permissions when prompted</li>
              <li>Print or display the <a href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" target="_blank" rel="noopener noreferrer" className="text-primary underline">Hiro marker</a></li>
              <li>Point your camera at the marker to see a 3D object</li>
            </ol>
          </div>
          
          <div className="flex gap-2">
            <Button onClick={() => setIsARActive(true)}>
              Start AR Experience
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="https://raw.githubusercontent.com/AR-js-org/AR.js/master/data/images/hiro.png" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Download Marker
              </a>
            </Button>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <p className="text-sm text-yellow-600 dark:text-yellow-400">
              <strong>Note:</strong> AR requires camera access and works best on mobile devices. 
              The marker must be clearly visible to the camera.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

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
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">AR Experience Active</h3>
        <Button variant="destructive" onClick={() => {
          setIsARActive(false);
          window.location.reload(); // Reload to clean up AR.js
        }}>
          Stop AR
        </Button>
      </div>
      
      <div className="w-full h-[600px] rounded-lg overflow-hidden border border-border relative">
        <div dangerouslySetInnerHTML={{ __html: arHTML }} />
        
        <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
          Point camera at Hiro marker
        </div>
      </div>
    </div>
  );
}
