import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  // ============================================================================
  // QUICK START
  // ============================================================================
  
  {
    category: "Quick Start",
    title: "Change Site Title & Description",
    description: "File: client/src/config/app.config.ts",
    language: "typescript",
    code: `
export const appConfig: AppConfig = {
  site: {
    title: "My Project Name",
    subtitle: "My tagline",
    description: "SEO description",
    year: 2025,
  },
  // ...
};
`,
  },

  {
    category: "Quick Start",
    title: "Set Repository Name for Deployment",
    description: "File: .env.production (MUST match GitHub repo name)",
    language: "bash",
    code: `
VITE_BASE_PATH=/my-repo-name
`,
  },

  {
    category: "Quick Start",
    title: "Add Quick Reference Item",
    description: "File: client/src/config/content/hotkeys.config.ts",
    language: "typescript",
    code: `
{
  title: "My Tools",
  icon: "🛠️",
  shortcuts: [
    { key: "VS Code", action: "Code editor" },
    { key: "Figma", action: "Design tool" },
  ],
}
`,
  },

  {
    category: "Quick Start",
    title: "Add Workflow Steps",
    description: "File: client/src/config/content/workflow.config.ts",
    language: "typescript",
    code: `
{
  title: "My Workflow",
  description: "How I work",
  items: [
    { name: "1. Plan", desc: "Define goals" },
    { name: "2. Build", desc: "Create solution" },
    { name: "3. Deploy", desc: "Push to GitHub" },
  ],
}
`,
  },

  // ============================================================================
  // STYLING
  // ============================================================================

  {
    category: "Styling",
    title: "Change Theme Colors",
    description: "File: client/src/index.css (Use https://oklch.com to pick colors)",
    language: "css",
    code: `
.dark {
  --primary: oklch(0.7 0.2 280);     /* Purple */
  --accent: oklch(0.65 0.2 140);     /* Teal */
  --background: oklch(0.15 0.02 250); /* Dark bg */
}
`,
  },

  {
    category: "Styling",
    title: "Use UI Components",
    description: "Import from @/components/ui/",
    language: "typescript",
    code: `
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>
    <Button>Click Me</Button>
  </CardContent>
</Card>
`,
  },

  // ============================================================================
  // ROUTING & PAGES
  // ============================================================================

  {
    category: "Routing & Pages",
    title: "Add a New Page",
    description: "1. Create component, 2. Add route in client/src/App.tsx",
    language: "typescript",
    code: `
// 1. Create: client/src/pages/AboutPage.tsx
export default function AboutPage() {
  return <div>About content</div>;
}

// 2. Add route in App.tsx
import AboutPage from "./pages/AboutPage";

<Route path="/about" component={AboutPage} />
`,
  },

  {
    category: "Routing & Pages",
    title: "Create Navigation Link",
    description: "Use Wouter's Link component",
    language: "typescript",
    code: `
import { Link } from "wouter";

<Link href="/about">
  <a className="text-primary hover:underline">About</a>
</Link>
`,
  },

  // ============================================================================
  // DEMOS & STANDALONE HTML
  // ============================================================================

  {
    category: "Demos & Standalone HTML",
    title: "Serve Standalone HTML Files (AR, VR, etc.)",
    description: "Place HTML in client/public/, link with basePath handling",
    language: "typescript",
    code: `
// 1. Create: client/public/my-demo.html
// (Regular HTML file with scripts, no React needed)

// 2. Link to it from your React component:
import { appConfig } from "@/config/app.config";

<a 
  href={\`\${window.location.origin}\${appConfig.deployment.basePath === '/' ? '' : appConfig.deployment.basePath}/my-demo.html\`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>Launch Demo</Button>
</a>

// This works in both dev (/) and production (/repo-name)
`,
  },

  {
    category: "Demos & Standalone HTML",
    title: "AR.js Demo Example",
    description: "File: client/public/ar-demo.html",
    language: "html",
    code: `
<!DOCTYPE html>
<html>
<head>
  <script src="https://aframe.io/releases/1.4.2/aframe.min.js"></script>
  <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
</head>
<body style="margin: 0; overflow: hidden;">
  <a-scene embedded arjs="sourceType: webcam;">
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
    category: "Demos & Standalone HTML",
    title: "Add Demo Card to Live Demos Tab",
    description: "File: client/src/pages/Home.tsx (in DemosSection)",
    language: "typescript",
    code: `
<Card>
  <CardHeader>
    <CardTitle className="flex items-center gap-2">
      <Box className="w-5 h-5" />
      My Demo
    </CardTitle>
    <CardDescription>
      Description of what this demo does
    </CardDescription>
  </CardHeader>
  <CardContent>
    <a 
      href={\`\${window.location.origin}\${appConfig.deployment.basePath === '/' ? '' : appConfig.deployment.basePath}/my-demo.html\`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button className="w-full gap-2">
        Launch Demo
        <ExternalLink className="w-4 h-4" />
      </Button>
    </a>
  </CardContent>
</Card>
`,
  },

  // ============================================================================
  // DEPLOYMENT
  // ============================================================================

  {
    category: "Deployment",
    title: "Deploy to GitHub Pages",
    description: "Automatic deployment on push to main",
    language: "bash",
    code: `
# 1. Set repo name in .env.production
VITE_BASE_PATH=/my-repo-name

# 2. Push to GitHub
git add -A
git commit -m "Update site"
git push origin main

# 3. GitHub Actions automatically builds and deploys
# View progress: GitHub repo → Actions tab
`,
  },

  {
    category: "Deployment",
    title: "Add Test Step to Workflow",
    description: "File: .github/workflows/deploy.yml",
    language: "yaml",
    code: `
- name: Install dependencies
  run: pnpm install

- name: Run tests
  run: pnpm test

- name: Build
  run: pnpm build
`,
  },

  // ============================================================================
  // ADVANCED
  // ============================================================================

  {
    category: "Advanced",
    title: "Fetch External API",
    description: "Example: GitHub repos",
    language: "typescript",
    code: `
import { useState, useEffect } from 'react';

export default function Repos({ username }: { username: string }) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch(\`https://api.github.com/users/\${username}/repos\`)
      .then(res => res.json())
      .then(setRepos);
  }, [username]);

  return <div>{repos.map(r => <div key={r.id}>{r.name}</div>)}</div>;
}
`,
  },

  {
    category: "Advanced",
    title: "Create Custom Component",
    description: "Reusable TypeScript component",
    language: "typescript",
    code: `
interface Props {
  title: string;
  description: string;
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <div className="p-6 bg-card border rounded-lg">
      <h3 className="font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
`,
  },

  {
    category: "Advanced",
    title: "Lazy Load Pages",
    description: "Optimize performance with code splitting",
    language: "typescript",
    code: `
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutPage'));

<Suspense fallback={<div>Loading...</div>}>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
</Suspense>
`,
  },
];
