
import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  site: {
    title: "React GitHub Workflow",
    subtitle: "Deploy React Apps to GitHub Pages",
    description: "A complete guide to deploying React applications to GitHub Pages with automated workflows, environment configuration, and best practices.",
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
