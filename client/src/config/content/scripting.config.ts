import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  {
    category: "Site Configuration",
    title: "client/src/config/app.config.ts",
    description: "Main site configuration - change title, subtitle, and description here",
    language: "typescript",
    code: `
import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  site: {
    title: "React GitHub Workflow",        // Change this
    subtitle: "Deploy React Apps to GitHub Pages",  // Change this
    description: "Your description here",  // Change this
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
    category: "Content - Quick Reference",
    title: "client/src/config/content/hotkeys.config.ts",
    description: "Edit this file to change the Quick Reference tab content",
    language: "typescript",
    code: `
import type { HotkeyCategory } from "../types";

export const hotkeyCategories: HotkeyCategory[] = [
  {
    title: "Your Category Name",
    icon: "📄",  // Any emoji
    shortcuts: [
      { key: "Item name", action: "Item description" },
      { key: "Another item", action: "Another description" },
      // Add more items...
    ],
  },
  // Add more categories...
];
`,
  },
  {
    category: "Content - Workflows",
    title: "client/src/config/content/workflow.config.ts",
    description: "Edit this file to change the Workflow tab content",
    language: "typescript",
    code: `
import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  {
    title: "Your Workflow Title",
    description: "Description of what this workflow does",
    items: [
      { name: "Step 1", desc: "First step description" },
      { name: "Step 2", desc: "Second step description" },
      { name: "Step 3", desc: "Third step description" },
      // Add more steps...
    ],
  },
  // Add more workflows...
];
`,
  },
  {
    category: "Content - Code Examples",
    title: "client/src/config/content/scripting.config.ts",
    description: "Edit this file to change the Template API tab content (this tab!)",
    language: "typescript",
    code: `
import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  {
    category: "Your Category",
    title: "Example Title",
    description: "What this code example shows",
    language: "typescript",  // or "javascript", "bash", "yaml", etc.
    code: \`
// Your code example here
function example() {
  console.log("Hello World");
}
\`,
  },
  // Add more code examples...
];
`,
  },
  {
    category: "Environment Configuration",
    title: ".env.production",
    description: "Set your repository name here - MUST match GitHub repo name exactly",
    language: "bash",
    code: `
# Production Environment Configuration for GitHub Pages
# Set this to your GitHub repository name
VITE_BASE_PATH=/your-repository-name

# Example: If your repo is github.com/username/my-app
# Then set: VITE_BASE_PATH=/my-app
`,
  },
  {
    category: "Build Configuration",
    title: "vite.config.ts",
    description: "Vite configuration - reads base path from environment (usually don't need to change)",
    language: "typescript",
    code: `
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || "/",  // Reads from .env.production
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./client/src"),
      },
    },
    build: {
      outDir: "dist/public",
    },
  };
});
`,
  },
  {
    category: "Routing Configuration",
    title: "client/src/App.tsx",
    description: "Router setup - reads base path from config (usually don't need to change)",
    language: "typescript",
    code: `
import { Router as WouterRouter } from "wouter";
import { appConfig } from "@/config/app.config";
import Home from "@/pages/Home";

function App() {
  return (
    <WouterRouter base={appConfig.deployment.basePath}>
      <Home />
    </WouterRouter>
  );
}

export default App;
`,
  },
  {
    category: "Type Definitions",
    title: "client/src/config/types.ts",
    description: "TypeScript interfaces - extend these if you need custom fields",
    language: "typescript",
    code: `
export interface AppConfig {
  site: {
    title: string;
    subtitle: string;
    description: string;
    year: number;
  };
  deployment: {
    basePath: string;
  };
  features: {
    search: boolean;
    darkMode: boolean;
    printMode: boolean;
  };
  theme: {
    defaultTheme: string;
    switchable: boolean;
  };
}

export interface HotkeyCategory {
  title: string;
  icon: string;
  shortcuts: Hotkey[];
}

export interface Hotkey {
  key: string;
  action: string;
}

export interface Workflow {
  title: string;
  description: string;
  items: WorkflowItem[];
}

export interface WorkflowItem {
  name: string;
  desc: string;
}

export interface ScriptingPattern {
  category: string;
  title: string;
  description: string;
  language: string;
  code: string;
}
`,
  },
  {
    category: "Styling",
    title: "client/src/index.css",
    description: "Change theme colors here - uses OKLCH color space",
    language: "css",
    code: `
.dark {
  --background: oklch(0.15 0.02 250);     /* Dark background */
  --foreground: oklch(0.95 0 0);          /* Text color */
  --card: oklch(0.18 0.02 250);           /* Card background */
  --card-foreground: oklch(0.95 0 0);     /* Card text */
  --primary: oklch(0.6 0.2 240);          /* Primary color (blue) */
  --primary-foreground: oklch(0.98 0 0);  /* Primary text */
  --accent: oklch(0.55 0.18 160);         /* Accent color (green) */
  --accent-foreground: oklch(0.98 0 0);   /* Accent text */
  --muted: oklch(0.3 0.02 250);           /* Muted elements */
  --muted-foreground: oklch(0.6 0.01 250); /* Muted text */
  --border: oklch(0.25 0.02 250);         /* Border color */
}

/* Tip: Use https://oklch.com to pick colors */
`,
  },
  {
    category: "GitHub Actions",
    title: ".github/workflows/deploy.yml",
    description: "Deployment workflow - automatically deploys on push to main",
    language: "yaml",
    code: `
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Install dependencies
        run: pnpm install

      - name: Build
        run: pnpm build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist/public

  deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
`,
  },
  {
    category: "Integration - A-Frame VR",
    title: "Adding A-Frame for VR/AR Experiences",
    description: "Integrate A-Frame for creating WebVR/WebXR experiences",
    language: "typescript",
    code: `
// 1. Install A-Frame
// npm install aframe
// npm install --save-dev @types/aframe

// 2. Create a VR component: client/src/components/VRScene.tsx
import { useEffect, useRef } from 'react';
import 'aframe';

export default function VRScene() {
  const sceneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // A-Frame is loaded
    console.log('A-Frame version:', AFRAME.version);
  }, []);

  return (
    <div ref={sceneRef}>
      <a-scene embedded>
        <a-sky color="#ECECEC"></a-sky>
        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      </a-scene>
    </div>
  );
}

// 3. Use in your page
import VRScene from '@/components/VRScene';

function App() {
  return <VRScene />;
}
`,
  },
  {
    category: "Integration - AR.js",
    title: "Adding AR.js for Augmented Reality",
    description: "Integrate AR.js for marker-based AR experiences",
    language: "typescript",
    code: `
// 1. Install AR.js and A-Frame
// npm install aframe ar.js

// 2. Create AR component: client/src/components/ARScene.tsx
import { useEffect } from 'react';
import 'aframe';
import 'ar.js';

export default function ARScene() {
  useEffect(() => {
    // AR.js is loaded
    console.log('AR.js loaded');
  }, []);

  return (
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
      {/* Marker-based AR */}
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-marker>
      
      <a-entity camera></a-entity>
    </a-scene>
  );
}

// 3. Add to index.html for better performance
// <script src="https://cdn.jsdelivr.net/gh/aframevr/aframe@1.4.0/dist/aframe-master.min.js"></script>
// <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
`,
  },
  {
    category: "Integration - Three.js",
    title: "Adding Three.js for 3D Graphics",
    description: "Integrate Three.js with React Three Fiber",
    language: "typescript",
    code: `
// 1. Install Three.js and React Three Fiber
// npm install three @react-three/fiber @react-three/drei

// 2. Create 3D component: client/src/components/ThreeScene.tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box } from '@react-three/drei';

function RotatingBox() {
  return (
    <Box args={[1, 1, 1]} rotation={[0, Math.PI / 4, 0]}>
      <meshStandardMaterial color="hotpink" />
    </Box>
  );
}

export default function ThreeScene() {
  return (
    <div style={{ width: '100%', height: '600px' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <RotatingBox />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

// 3. Use in your page
import ThreeScene from '@/components/ThreeScene';
`,
  },
  {
    category: "Integration - Mapbox",
    title: "Adding Mapbox for Interactive Maps",
    description: "Integrate Mapbox GL JS for interactive maps",
    language: "typescript",
    code: `
// 1. Install Mapbox
// npm install mapbox-gl
// npm install --save-dev @types/mapbox-gl

// 2. Add to .env files
// VITE_MAPBOX_TOKEN=your_mapbox_token_here

// 3. Create map component: client/src/components/MapView.tsx
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9
    });

    // Add marker
    new mapboxgl.Marker()
      .setLngLat([-74.5, 40])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '400px' }} />;
}
`,
  },
  {
    category: "Integration - Chart.js",
    title: "Adding Chart.js for Data Visualization",
    description: "Integrate Chart.js with react-chartjs-2",
    language: "typescript",
    code: `
// 1. Install Chart.js
// npm install chart.js react-chartjs-2

// 2. Create chart component: client/src/components/DataChart.tsx
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DataChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [65, 59, 80, 81, 56, 55],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' as const },
      title: { display: true, text: 'Monthly Sales' }
    }
  };

  return <Line options={options} data={data} />;
}
`,
  },
  {
    category: "Integration - D3.js",
    title: "Adding D3.js for Advanced Visualizations",
    description: "Integrate D3.js for custom data visualizations",
    language: "typescript",
    code: `
// 1. Install D3
// npm install d3
// npm install --save-dev @types/d3

// 2. Create D3 component: client/src/components/D3Chart.tsx
import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function D3Chart() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const data = [30, 86, 168, 281, 303, 365];
    const width = 600;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const x = d3.scaleBand()
      .domain(data.map((_, i) => i.toString()))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data) || 0])
      .range([height - margin.bottom, margin.top]);

    svg.append('g')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (_, i) => x(i.toString()) || 0)
      .attr('y', d => y(d))
      .attr('height', d => y(0) - y(d))
      .attr('width', x.bandwidth())
      .attr('fill', 'steelblue');

  }, []);

  return <svg ref={svgRef} width={600} height={400} />;
}
`,
  },
  {
    category: "Integration - Monaco Editor",
    title: "Adding Monaco Editor (VS Code Editor)",
    description: "Integrate Monaco Editor for code editing",
    language: "typescript",
    code: `
// 1. Install Monaco Editor
// npm install @monaco-editor/react

// 2. Create editor component: client/src/components/CodeEditor.tsx
import Editor from '@monaco-editor/react';
import { useState } from 'react';

export default function CodeEditor() {
  const [code, setCode] = useState(\`
function hello() {
  console.log("Hello World!");
}
\`);

  return (
    <Editor
      height="400px"
      defaultLanguage="typescript"
      theme="vs-dark"
      value={code}
      onChange={(value) => setCode(value || '')}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
      }}
    />
  );
}
`,
  },
  {
    category: "Integration - Markdown",
    title: "Adding Markdown Rendering",
    description: "Integrate react-markdown for rendering markdown content",
    language: "typescript",
    code: `
// 1. Install react-markdown
// npm install react-markdown remark-gfm

// 2. Create markdown component: client/src/components/MarkdownViewer.tsx
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

// 3. Example usage
const markdown = \`
# Hello World

This is **bold** and this is *italic*.

- Item 1
- Item 2

\\\`\\\`\\\`typescript
const greeting = "Hello!";
\\\`\\\`\\\`
\`;

<MarkdownViewer content={markdown} />
`,
  },
  {
    category: "Integration - PDF Viewer",
    title: "Adding PDF Viewing Capability",
    description: "Integrate react-pdf for displaying PDF files",
    language: "typescript",
    code: `
// 1. Install react-pdf
// npm install react-pdf

// 2. Create PDF viewer: client/src/components/PDFViewer.tsx
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Set worker
pdfjs.GlobalWorkerOptions.workerSrc = \`//unpkg.com/pdfjs-dist@\${pdfjs.version}/build/pdf.worker.min.js\`;

export default function PDFViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  return (
    <div>
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <button onClick={() => setPageNumber(pageNumber - 1)} disabled={pageNumber <= 1}>
        Previous
      </button>
      <button onClick={() => setPageNumber(pageNumber + 1)} disabled={pageNumber >= numPages}>
        Next
      </button>
    </div>
  );
}
`,
  },
  {
    category: "Integration - Video Player",
    title: "Adding Video.js Player",
    description: "Integrate Video.js for advanced video playback",
    language: "typescript",
    code: `
// 1. Install Video.js
// npm install video.js
// npm install --save-dev @types/video.js

// 2. Create video player: client/src/components/VideoPlayer.tsx
import { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export default function VideoPlayer({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      preload: 'auto',
      sources: [{ src, type: 'video/mp4' }]
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
    };
  }, [src]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered" />
    </div>
  );
}
`,
  },
  {
    category: "Integration - Firebase",
    title: "Adding Firebase for Backend Services",
    description: "Integrate Firebase for authentication, database, and storage",
    language: "typescript",
    code: `
// 1. Install Firebase
// npm install firebase

// 2. Create Firebase config: client/src/config/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// 3. Add to .env.production
// VITE_FIREBASE_API_KEY=your_api_key
// VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
// VITE_FIREBASE_PROJECT_ID=your_project_id
// VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
// VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
// VITE_FIREBASE_APP_ID=your_app_id
`,
  },
  {
    category: "Integration - Supabase",
    title: "Adding Supabase for Backend",
    description: "Integrate Supabase for database and authentication",
    language: "typescript",
    code: `
// 1. Install Supabase
// npm install @supabase/supabase-js

// 2. Create Supabase client: client/src/config/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 3. Example usage
import { supabase } from '@/config/supabase';

async function fetchData() {
  const { data, error } = await supabase
    .from('your_table')
    .select('*');
  
  if (error) console.error(error);
  else console.log(data);
}

// 4. Add to .env.production
// VITE_SUPABASE_URL=your_supabase_url
// VITE_SUPABASE_ANON_KEY=your_anon_key
`,
  },
  {
    category: "Integration - Framer Motion",
    title: "Adding Framer Motion for Animations",
    description: "Integrate Framer Motion for smooth animations",
    language: "typescript",
    code: `
// 1. Install Framer Motion
// npm install framer-motion

// 2. Create animated component: client/src/components/AnimatedBox.tsx
import { motion } from 'framer-motion';

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        width: 200,
        height: 200,
        background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
        borderRadius: 20,
      }}
    />
  );
}

// 3. Page transitions
import { motion, AnimatePresence } from 'framer-motion';

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
`,
  },
  {
    category: "Integration - React Query",
    title: "Adding React Query for Data Fetching",
    description: "Integrate TanStack Query (React Query) for server state management",
    language: "typescript",
    code: `
// 1. Install React Query
// npm install @tanstack/react-query

// 2. Setup QueryClient: client/src/main.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

// 3. Create a query hook: client/src/hooks/useUsers.ts
import { useQuery } from '@tanstack/react-query';

interface User {
  id: number;
  name: string;
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://api.example.com/users');
  return response.json();
}

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });
}

// 4. Use in component
import { useUsers } from '@/hooks/useUsers';

function UserList() {
  const { data, isLoading, error } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
`,
  },
  {
    category: "Integration - Zustand",
    title: "Adding Zustand for State Management",
    description: "Integrate Zustand for simple, scalable state management",
    language: "typescript",
    code: `
// 1. Install Zustand
// npm install zustand

// 2. Create store: client/src/store/useStore.ts
import { create } from 'zustand';

interface AppState {
  count: number;
  user: { name: string; email: string } | null;
  increment: () => void;
  decrement: () => void;
  setUser: (user: { name: string; email: string }) => void;
  logout: () => void;
}

export const useStore = create<AppState>((set) => ({
  count: 0,
  user: null,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setUser: (user) => set({ user }),
  logout: () => set({ user: null }),
}));

// 3. Use in component
import { useStore } from '@/store/useStore';

function Counter() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
`,
  },
  {
    category: "Integration - React Hook Form",
    title: "Adding React Hook Form for Forms",
    description: "Integrate React Hook Form for performant form handling",
    language: "typescript",
    code: `
// 1. Install React Hook Form
// npm install react-hook-form

// 2. Create form component: client/src/components/ContactForm.tsx
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Name"
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="Email"
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Message is required' })}
          placeholder="Message"
        />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
`,
  },
  {
    category: "Advanced - Custom Hooks",
    title: "Creating Custom React Hooks",
    description: "Examples of useful custom hooks for your app",
    language: "typescript",
    code: `
// client/src/hooks/useLocalStorage.ts
import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

// client/src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Usage example
function SearchComponent() {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    // API call with debouncedSearch
    console.log('Searching for:', debouncedSearch);
  }, [debouncedSearch]);

  return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
`,
  },
  {
    category: "Advanced - API Routes",
    title: "Adding API Routes with Express",
    description: "Create backend API routes alongside your React app",
    language: "typescript",
    code: `
// Already included in template: server/index.ts
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// API routes
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.post('/api/data', (req, res) => {
  const { data } = req.body;
  res.json({ received: data, timestamp: new Date() });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});

// Call from React:
const response = await fetch('/api/hello');
const data = await response.json();
`,
  },
  {
    category: "Advanced - Environment Variables",
    title: "Managing Multiple Environments",
    description: "Setup for development, staging, and production environments",
    language: "bash",
    code: `
# .env.development
VITE_BASE_PATH=/
VITE_API_URL=http://localhost:3000/api
VITE_ENABLE_DEBUG=true

# .env.staging
VITE_BASE_PATH=/staging
VITE_API_URL=https://staging.example.com/api
VITE_ENABLE_DEBUG=true

# .env.production
VITE_BASE_PATH=/react-github-workflow
VITE_API_URL=https://api.example.com
VITE_ENABLE_DEBUG=false

# Access in code:
const apiUrl = import.meta.env.VITE_API_URL;
const isDebug = import.meta.env.VITE_ENABLE_DEBUG === 'true';

// Build for specific environment:
// pnpm build --mode staging
`,
  },
  {
    category: "Advanced - PWA Support",
    title: "Making Your App a Progressive Web App",
    description: "Add PWA capabilities with Vite PWA plugin",
    language: "typescript",
    code: `
// 1. Install Vite PWA plugin
// npm install vite-plugin-pwa -D

// 2. Update vite.config.ts
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'React GitHub Workflow',
        short_name: 'RGW',
        description: 'Deploy React Apps to GitHub Pages',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});

// 3. Add icons to public/ folder
// - public/icon-192.png
// - public/icon-512.png
`,
  },
  {
    category: "Advanced - Testing Setup",
    title: "Adding Vitest for Unit Testing",
    description: "Setup Vitest and React Testing Library",
    language: "typescript",
    code: `
// 1. Install testing dependencies
// npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

// 2. Create vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './test/setup.ts',
  },
});

// 3. Create test/setup.ts
import '@testing-library/jest-dom';

// 4. Add test script to package.json
// "test": "vitest"

// 5. Example test: client/src/components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

function Button({ label }: { label: string }) {
  return <button>{label}</button>;
}

describe('Button', () => {
  it('renders with label', () => {
    render(<Button label="Click me" />);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
`,
  },
  {
    category: "Deployment - Custom Domain",
    title: "Deploying to Custom Domain",
    description: "Configure for deployment to your own domain",
    language: "bash",
    code: `
# 1. Update .env.production for root path
VITE_BASE_PATH=/

# 2. Add CNAME file to public/ folder
# public/CNAME
yourdomain.com

# 3. Configure DNS (at your domain registrar)
# Add A records pointing to GitHub Pages IPs:
# 185.199.108.153
# 185.199.109.153
# 185.199.110.153
# 185.199.111.153

# Or add CNAME record:
# CNAME: yourusername.github.io

# 4. In GitHub repo settings:
# Settings → Pages → Custom domain → yourdomain.com
# Check "Enforce HTTPS"

# 5. Build and deploy
pnpm build
git add .
git commit -m "Configure custom domain"
git push
`,
  },
  {
    category: "Deployment - Netlify",
    title: "Deploying to Netlify",
    description: "Alternative deployment to Netlify",
    language: "bash",
    code: `
# 1. Update .env.production
VITE_BASE_PATH=/

# 2. Create netlify.toml
[build]
  command = "pnpm build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# 3. Deploy via Netlify CLI
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod

# Or connect GitHub repo in Netlify dashboard
# Build command: pnpm build
# Publish directory: dist/public
`,
  },
  {
    category: "Deployment - Vercel",
    title: "Deploying to Vercel",
    description: "Alternative deployment to Vercel",
    language: "bash",
    code: `
# 1. Update .env.production
VITE_BASE_PATH=/

# 2. Create vercel.json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist/public",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}

# 3. Deploy via Vercel CLI
npm install -g vercel
vercel login
vercel

# Or connect GitHub repo in Vercel dashboard
# Framework Preset: Vite
# Build Command: pnpm build
# Output Directory: dist/public
`,
  },
];
