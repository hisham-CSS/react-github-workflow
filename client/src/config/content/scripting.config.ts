import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  // ============================================================================
  // CONFIGURATION API
  // ============================================================================
  
  {
    category: "Configuration API",
    title: "The AppConfig Object",
    description: "Main site configuration - customize title, subtitle, description, and features. File: client/src/config/app.config.ts",
    language: "typescript",
    code: `
import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  site: {
    title: "My Awesome Project",
    subtitle: "A new documentation site",
    description: "Your one-stop shop for awesome documentation.",
    year: 2025,
  },
  deployment: {
    basePath: import.meta.env.VITE_BASE_PATH || "/",
  },
  features: {
    search: true,
    darkMode: true,
    printMode: true,
  },
  theme: {
    defaultTheme: "dark",
    switchable: false,
  },
};
`,
  },
  
  {
    category: "Configuration API",
    title: "Environment Variables",
    description: "Set your repository name for GitHub Pages deployment. File: .env.production",
    language: "bash",
    code: `
# Production Environment Configuration for GitHub Pages
# MUST match your GitHub repository name exactly

VITE_BASE_PATH=/my-awesome-project

# Example: If your repo is github.com/username/my-app
# Then set: VITE_BASE_PATH=/my-app
`,
  },

  {
    category: "Configuration API",
    title: "TypeScript Types",
    description: "Extend the configuration types for custom fields. File: client/src/config/types.ts",
    language: "typescript",
    code: `
// Add a new property to the Hotkey interface
export interface Hotkey {
  key: string;
  action: string;
  category?: string;  // Your new property
}

// Or create a completely new interface
export interface CustomSection {
  title: string;
  items: CustomItem[];
}

export interface CustomItem {
  name: string;
  value: string;
}
`,
  },

  // ============================================================================
  // CONTENT API
  // ============================================================================
  
  {
    category: "Content API",
    title: "The HotkeyCategory Object",
    description: "Add sections to the Quick Reference tab. File: client/src/config/content/hotkeys.config.ts",
    language: "typescript",
    code: `
import type { HotkeyCategory } from "../types";

export const hotkeyCategories: HotkeyCategory[] = [
  {
    title: "My Favorite Tools",
    icon: "🛠️",
    shortcuts: [
      { key: "VS Code", action: "My favorite code editor" },
      { key: "Figma", action: "For all my design needs" },
      { key: "GitHub", action: "Version control and collaboration" },
    ],
  },
  // ... add more categories
];
`,
  },

  {
    category: "Content API",
    title: "The Workflow Object",
    description: "Add step-by-step guides to the Workflow tab. File: client/src/config/content/workflow.config.ts",
    language: "typescript",
    code: `
import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  {
    title: "My Content Creation Workflow",
    description: "How I create and publish new content.",
    items: [
      { name: "1. Brainstorm Ideas", desc: "Come up with a list of topics." },
      { name: "2. Write Draft", desc: "Write the first draft in Markdown." },
      { name: "3. Review and Edit", desc: "Proofread and make improvements." },
      { name: "4. Publish", desc: "Push to GitHub to deploy." },
    ],
  },
  // ... add more workflows
];
`,
  },

  {
    category: "Content API",
    title: "The ScriptingPattern Object",
    description: "Add code examples to the Template API tab (this tab!). File: client/src/config/content/scripting.config.ts",
    language: "typescript",
    code: `
import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  {
    category: "My Custom Category",
    title: "Example: Custom Function",
    description: "A useful utility function for your project.",
    language: "typescript",
    code: \\\`
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
\\\`,
  },
  // ... add more examples
];
`,
  },

  // ============================================================================
  // STYLING API
  // ============================================================================
  
  {
    category: "Styling API",
    title: "Theme Colors (OKLCH)",
    description: "Customize theme colors using the OKLCH color space. File: client/src/index.css",
    language: "css",
    code: `
.dark {
  --primary: oklch(0.7 0.2 280);          /* Purple primary color */
  --primary-foreground: oklch(0.98 0 0);  /* Text on primary */
  --accent: oklch(0.65 0.2 140);          /* Teal accent color */
  --accent-foreground: oklch(0.98 0 0);   /* Text on accent */
  --background: oklch(0.15 0.02 250);     /* Dark background */
  --foreground: oklch(0.95 0.01 250);     /* Light text */
  /* ... more colors */
}

/* Tip: Use https://oklch.com to pick colors visually */
`,
  },

  {
    category: "Styling API",
    title: "Custom CSS Classes",
    description: "Add custom utility classes with Tailwind CSS. File: client/src/index.css",
    language: "css",
    code: `
@layer components {
  .btn-custom {
    @apply px-4 py-2 rounded-lg bg-primary text-primary-foreground;
    @apply hover:bg-primary/90 transition-colors;
  }
  
  .card-gradient {
    @apply bg-gradient-to-br from-primary/10 to-accent/10;
    @apply border border-primary/20;
  }
}
`,
  },

  {
    category: "Styling API",
    title: "Component Styling",
    description: "Use shadcn/ui components with custom styles. Import from @/components/ui/",
    language: "typescript",
    code: `
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MyComponent() {
  return (
    <Card className="bg-card-gradient">
      <CardHeader>
        <CardTitle>Custom Styled Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button className="btn-custom">Click Me</Button>
      </CardContent>
    </Card>
  );
}
`,
  },

  // ============================================================================
  // ROUTING API
  // ============================================================================
  
  {
    category: "Routing API",
    title: "Add a New Page",
    description: "Create a new page and add it to the router. Files: client/src/pages/YourPage.tsx and client/src/App.tsx",
    language: "typescript",
    code: `
// 1. Create your page component
// client/src/pages/AboutPage.tsx
export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-muted-foreground">This is the about page.</p>
    </div>
  );
}

// 2. Add the route in App.tsx
// client/src/App.tsx
import { Router as WouterRouter, Route, Switch } from "wouter";
import AboutPage from "./pages/AboutPage";

function Router() {
  return (
    <WouterRouter base={appConfig.deployment.basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </WouterRouter>
  );
}
`,
  },

  {
    category: "Routing API",
    title: "Navigation Links",
    description: "Create navigation links using Wouter's Link component.",
    language: "typescript",
    code: `
import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link href="/">
        <a className="text-primary hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-primary hover:underline">About</a>
      </Link>
      <Link href="/demos/aframe">
        <a className="text-primary hover:underline">VR Demo</a>
      </Link>
    </nav>
  );
}
`,
  },

  {
    category: "Routing API",
    title: "Dynamic Routes",
    description: "Create routes with dynamic parameters.",
    language: "typescript",
    code: `
import { Route, useParams } from "wouter";

// Define the page component
function BlogPost() {
  const { id } = useParams();
  return <div>Blog Post ID: {id}</div>;
}

// Add the route
<Route path="/blog/:id" component={BlogPost} />

// Link to it
<Link href="/blog/123">View Post 123</Link>
`,
  },

  // ============================================================================
  // DEPLOYMENT API
  // ============================================================================
  
  {
    category: "Deployment API",
    title: "GitHub Actions Workflow",
    description: "Customize the deployment workflow. File: .github/workflows/deploy.yml",
    language: "yaml",
    code: `
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Setup pnpm
        uses: pnpm/action-setup@v3
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Run tests
        run: pnpm test  # Add your test command

      - name: Build
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist/public'
`,
  },

  {
    category: "Deployment API",
    title: "Build Configuration",
    description: "Customize Vite build settings. File: vite.config.ts",
    language: "typescript",
    code: `
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "client", "src"),
        "@components": path.resolve(import.meta.dirname, "client", "src", "components"),
      },
    },
    build: {
      outDir: path.resolve(import.meta.dirname, "dist/public"),
      emptyOutDir: true,
    },
  };
});
`,
  },

  {
    category: "Deployment API",
    title: "Custom Domain Setup",
    description: "Configure a custom domain for GitHub Pages. File: client/public/CNAME",
    language: "text",
    code: `
yourdomain.com

# Then configure DNS with your registrar:
# - Add CNAME record pointing to <username>.github.io
# - Or add A records pointing to GitHub Pages IPs
# - Enable HTTPS in GitHub Pages settings
`,
  },

  // ============================================================================
  // ADVANCED INTEGRATIONS
  // ============================================================================
  
  {
    category: "Advanced Integrations",
    title: "Fetch External API Data",
    description: "Integrate with external APIs to display dynamic content.",
    language: "typescript",
    code: `
import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function GitHubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`https://api.github.com/users/\${username}/repos\`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {repos.map(repo => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}
`,
  },

  {
    category: "Advanced Integrations",
    title: "Create Custom Components",
    description: "Build reusable components with TypeScript and Tailwind CSS.",
    language: "typescript",
    code: `
// client/src/components/FeatureCard.tsx

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

// Usage
<FeatureCard 
  icon="🚀"
  title="Fast Deployment"
  description="Deploy to GitHub Pages in seconds"
/>
`,
  },

  {
    category: "Advanced Integrations",
    title: "Code Splitting & Lazy Loading",
    description: "Optimize performance with React lazy loading and Suspense.",
    language: "typescript",
    code: `
import { lazy, Suspense } from 'react';
import { Router as WouterRouter, Route, Switch } from 'wouter';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AFrameDemoPage = lazy(() => import('./pages/demos/AFrameDemoPage'));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WouterRouter base={appConfig.deployment.basePath}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/demos/aframe" component={AFrameDemoPage} />
        </Switch>
      </WouterRouter>
    </Suspense>
  );
}
`,
  },

  // ============================================================================
  // 3D/VR/AR INTEGRATION
  // ============================================================================
  
  {
    category: "3D/VR/AR Integration",
    title: "A-Frame VR Scene",
    description: "Create immersive VR experiences with A-Frame.",
    language: "typescript",
    code: `
import { useEffect } from 'react';
import 'aframe';

export default function VRScene() {
  useEffect(() => {
    console.log('A-Frame version:', AFRAME.version);
  }, []);

  return (
    <a-scene embedded>
      <a-sky color="#ECECEC"></a-sky>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
    </a-scene>
  );
}
`,
  },

  {
    category: "3D/VR/AR Integration",
    title: "AR.js Augmented Reality",
    description: "Add marker-based AR experiences using AR.js.",
    language: "html",
    code: `
<!-- client/public/ar-demo.html -->
<!DOCTYPE html>
<html>
<head>
  <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
</head>
<body style="margin: 0; overflow: hidden;">
  <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
    <!-- Marker-based AR -->
    <a-marker preset="hiro">
      <a-box position="0 0.5 0" material="color: red;"></a-box>
    </a-marker>
    
    <a-entity camera></a-entity>
  </a-scene>
</body>
</html>
`,
  },

  {
    category: "3D/VR/AR Integration",
    title: "3D Canvas Animation",
    description: "Create 3D animations using pure Canvas API (no Three.js needed).",
    language: "typescript",
    code: `
import { useEffect, useRef } from 'react';

export default function Canvas3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let angle = 0;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw rotating cube (simplified 3D projection)
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = 100;
      
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle);
      ctx.strokeStyle = '#4CC3D9';
      ctx.lineWidth = 2;
      ctx.strokeRect(-size/2, -size/2, size, size);
      ctx.restore();
      
      angle += 0.02;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
}
`,
  },
];
