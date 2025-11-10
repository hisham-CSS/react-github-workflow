import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  // Core Configuration
  {
    category: "Core Configuration",
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
    category: "Core Configuration",
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
    category: "Core Configuration",
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
    category: "Core Configuration",
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
    code: \\\`
// Your code example here
function example() {
  console.log("Hello World");
}
\\\`,
  },
  // Add more code examples...
];
`,
  },
  {
    category: "Core Configuration",
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
    category: "Core Configuration",
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
    category: "Core Configuration",
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
    category: "Core Configuration",
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
    category: "Styling & Deployment",
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
    category: "Styling & Deployment",
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
  // 3D/VR/AR
  {
    category: "3D/VR/AR Integration",
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
    category: "3D/VR/AR Integration",
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
    category: "3D/VR/AR Integration",
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
  // Data Visualization
  {
    category: "Data Visualization",
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
    category: "Data Visualization",
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
    category: "Data Visualization",
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
  // Backend & State
  {
    category: "Backend & State Management",
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
    category: "Backend & State Management",
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
    category: "Backend & State Management",
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
];
