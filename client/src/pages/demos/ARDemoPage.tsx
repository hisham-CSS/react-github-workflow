import { useEffect } from 'react';
import { appConfig } from '@/config/app.config';

export default function ARDemoPage() {
  useEffect(() => {
    // Redirect to standalone HTML page
    const basePath = appConfig.deployment.basePath || '';
    window.location.href = `${basePath}/ar-demo.html`;
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading AR experience...</p>
      </div>
    </div>
  );
}
