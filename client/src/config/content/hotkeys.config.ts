import type { HotkeyCategory } from "../types";

export const hotkeyCategories: HotkeyCategory[] = [
  {
    title: "Essential Files",
    icon: "📄",
    shortcuts: [
      { key: "package.json", action: "Project dependencies and scripts" },
      { key: "vite.config.ts", action: "Build configuration and base path" },
      { key: ".env.production", action: "Production environment variables" },
      { key: ".env.development", action: "Development environment variables" },
      { key: "index.html", action: "HTML entry point" },
    ],
  },
  {
    title: "GitHub Actions",
    icon: "⚙️",
    shortcuts: [
      { key: ".github/workflows/", action: "Workflow definitions directory" },
      { key: "deploy.yml", action: "Deployment workflow configuration" },
      { key: "on: push", action: "Trigger on push to main branch" },
      { key: "actions/checkout", action: "Clone repository code" },
      { key: "actions/setup-node", action: "Setup Node.js environment" },
      { key: "actions/upload-pages-artifact", action: "Upload build for Pages" },
    ],
  },
  {
    title: "Build Commands",
    icon: "🔨",
    shortcuts: [
      { key: "pnpm install", action: "Install dependencies" },
      { key: "pnpm dev", action: "Start development server" },
      { key: "pnpm build", action: "Build for production" },
      { key: "pnpm preview", action: "Preview production build locally" },
      { key: "pnpm check", action: "TypeScript type checking" },
    ],
  },
  {
    title: "Environment Variables",
    icon: "🌍",
    shortcuts: [
      { key: "VITE_BASE_PATH", action: "Base URL path for routing and assets" },
      { key: "import.meta.env", action: "Access environment variables in code" },
      { key: "loadEnv()", action: "Load .env files in Vite config" },
      { key: "process.env", action: "Node.js environment variables" },
    ],
  },
  {
    title: "GitHub Pages Setup",
    icon: "🚀",
    shortcuts: [
      { key: "Settings → Pages", action: "Configure GitHub Pages" },
      { key: "Source: GitHub Actions", action: "Use Actions for deployment" },
      { key: "Actions tab", action: "View workflow runs" },
      { key: "Environments", action: "View deployment history" },
    ],
  },
  {
    title: "Routing Configuration",
    icon: "🔀",
    shortcuts: [
      { key: "base: '/repo-name'", action: "Vite base path in config" },
      { key: "basename prop", action: "React Router base path" },
      { key: "WouterRouter base", action: "Wouter router base path" },
      { key: "publicPath", action: "Webpack public path (if using)" },
    ],
  },
];
