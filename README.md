# React GitHub Workflow Template

![React GitHub Workflow](https://raw.githubusercontent.com/hisham-css/react-github-workflow/main/public/og-image.png)

**A configuration-driven, type-safe template for creating interactive documentation, cheat sheets, and knowledge bases. Deploys to GitHub Pages with zero configuration.**

This template is **self-documenting** - the live demo is a complete guide on how to use the template itself! See it live:

**[Live Demo](https://hisham-css.github.io/react-github-workflow/)**

## ✨ Features

- **Configuration-Driven**: All content is in separate config files - no React knowledge needed to add content.
- **Type-Safe**: Full TypeScript support with interfaces for validation and autocompletion.
- **GitHub Pages Deployment**: Zero-config deployment with GitHub Actions.
- **Modern Stack**: React 19, TypeScript, Vite 7, Tailwind CSS 4.
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile.
- **Easy Customization**: Change colors, content, and structure with simple config edits.
- **Live Demos**: Includes working examples for A-Frame (VR), AR.js (Augmented Reality), and 3D animations.
- **Dark Mode**: Beautiful, modern dark mode UI.

## 🚀 Quick Start

### 1. Use This Template

Click the **"Use this template"** button on the GitHub repository page to create your own repository from this template.

### 2. Clone Your Repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd your-repository-name
```

### 3. Install Dependencies

```bash
pnpm install
```

### 4. Configure for Your Repository

Edit `.env.production` and set `VITE_BASE_PATH` to your repository name:

```env
# .env.production
VITE_BASE_PATH=/your-repository-name
```

### 5. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your cheat sheet.

### 6. Deploy to GitHub Pages

Push to your `main` branch to trigger the GitHub Actions workflow. Your site will be live at:

`https://your-username.github.io/your-repository-name/`

## 🔧 Configuration

All configuration is done in the `client/src/config/` directory.

### Site Configuration

Edit `client/src/config/app.config.ts` to change site-wide settings:

```typescript
// client/src/config/app.config.ts
export const appConfig = {
  site: {
    title: "Your Cheat Sheet Title",
    subtitle: "Your subtitle here",
    description: "Your site description",
    year: 2025,
  },
  // ...
};
```

### Content Customization

All content is managed in the `client/src/config/content/` directory. Each file corresponds to a tab on the page.

#### Quick Reference Tab

Edit `client/src/config/content/hotkeys.config.ts`:

```typescript
// client/src/config/content/hotkeys.config.ts
export const hotkeysConfig: HotkeyConfig = {
  title: "Quick Reference",
  sections: [
    {
      title: "Essential Files",
      hotkeys: [
        { key: "package.json", label: "Project dependencies and scripts" },
        // ...
      ],
    },
  ],
};
```

#### Workflow Tab

Edit `client/src/config/content/workflow.config.ts`:

```typescript
// client/src/config/content/workflow.config.ts
export const workflowConfig: WorkflowConfig = {
  title: "Workflows",
  workflows: [
    {
      title: "Deploy to GitHub Pages",
      steps: [
        { title: "Create Repository", description: "Use this template..." },
        // ...
      ],
    },
  ],
};
```

#### Template API Tab

Edit `client/src/config/content/scripting.config.ts`:

```typescript
// client/src/config/content/scripting.config.ts
export const scriptingConfig: ScriptingConfig = {
  title: "Template API",
  sections: [
    {
      category: "Core Configuration",
      examples: [
        {
          title: "app.config.ts - Site Settings",
          description: "Change site title, subtitle, and description.",
          code: `// client/src/config/app.config.ts\nexport const appConfig = { ... };`,
        },
        // ...
      ],
    },
  ],
};
```

## 🎨 Styling

### Colors

Colors are managed in `client/src/index.css` using the **OKLCH color space** for modern, consistent colors.

```css
/* client/src/index.css */
:root {
  --background: oklch(0.17 0.02 240);
  --foreground: oklch(0.98 0.01 240);
  --card: oklch(0.22 0.02 240);
  /* ... */
}
```

### Fonts

The template uses [Inter](https://rsms.me/inter/) from Google Fonts. You can change this in `client/index.html`.

## 🚀 Deployment

### GitHub Pages

Deployment is handled automatically by the `.github/workflows/deploy.yml` workflow. Simply push to your `main` branch.

### Other Platforms

To deploy to other platforms like Netlify or Vercel, you may need to adjust the `basePath` in `vite.config.ts` and your environment variables.

## 📁 Project Structure

```
react-github-workflow/
├── .github/              # GitHub Actions workflows
├── client/
│   ├── public/           # Static assets (favicon, ar-demo.html)
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   ├── config/         # All configuration files
│   │   │   ├── content/    # Content for each tab
│   │   │   ├── app.config.ts
│   │   │   └── types.ts
│   │   ├── pages/          # Page components
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── index.css       # Global styles
│   │   └── main.tsx        # React entry point
│   ├── index.html        # Main HTML file
│   └── ...
├── .env.development      # Development environment variables
├── .env.production       # Production environment variables
├── package.json          # Project dependencies
└── vite.config.ts        # Vite configuration
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
