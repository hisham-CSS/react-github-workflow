import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  {
    title: "Deploy React App to GitHub Pages",
    description: "Complete workflow from local development to live deployment",
    items: [
      { name: "1. Create React App", desc: "Initialize with Vite, CRA, or your preferred tool" },
      { name: "2. Set Repository Name", desc: "Edit .env.production with VITE_BASE_PATH=/your-repo-name" },
      { name: "3. Configure Vite", desc: "Ensure vite.config.ts reads base path from environment" },
      { name: "4. Test Locally", desc: "Run 'pnpm dev' to verify app works" },
      { name: "5. Build Production", desc: "Run 'pnpm build' and check dist/ output" },
      { name: "6. Create GitHub Repo", desc: "Create repository matching your base path name" },
      { name: "7. Push Code", desc: "Initialize git, commit, and push to main branch" },
      { name: "8. Enable GitHub Pages", desc: "Settings → Pages → Source: GitHub Actions" },
      { name: "9. Wait for Deployment", desc: "Check Actions tab for workflow completion" },
      { name: "10. Verify Live Site", desc: "Visit https://username.github.io/repo-name/" },
    ],
  },
  {
    title: "Troubleshooting Deployment Issues",
    description: "Common problems and solutions for GitHub Pages deployment",
    items: [
      { name: "404 on Assets", desc: "Check VITE_BASE_PATH matches repository name exactly" },
      { name: "Blank Page", desc: "Verify base path in vite.config.ts and router configuration" },
      { name: "Workflow Fails", desc: "Check Actions tab for error logs, verify deploy.yml syntax" },
      { name: "Old Content Shows", desc: "Hard refresh browser (Ctrl+Shift+R) or clear cache" },
      { name: "Routes Don't Work", desc: "Ensure router base path matches VITE_BASE_PATH" },
      { name: "Build Errors", desc: "Run 'pnpm check' for TypeScript errors, fix before deploying" },
    ],
  },
  {
    title: "Best Practices for React GitHub Deployment",
    description: "Tips for maintaining and updating your deployed React app",
    items: [
      { name: "Use Environment Variables", desc: "Never hardcode base paths, always use .env files" },
      { name: "Test Build Locally", desc: "Always run 'pnpm build && pnpm preview' before pushing" },
      { name: "Version Control .env.example", desc: "Commit example env files, not actual .env.production" },
      { name: "Monitor Workflow Runs", desc: "Check Actions tab after each push to ensure success" },
      { name: "Use Semantic Commits", desc: "Clear commit messages help track deployment history" },
      { name: "Keep Dependencies Updated", desc: "Regularly update packages for security and features" },
    ],
  },
];
