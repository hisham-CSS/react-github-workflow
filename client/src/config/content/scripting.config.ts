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
];
