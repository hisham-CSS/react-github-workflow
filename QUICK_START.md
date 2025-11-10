# Quick Start Guide

This guide will help you get started with the Unity Cheat Sheet Template in under 5 minutes.

## Installation

```bash
# Clone the repository
git clone <your-repository-url>
cd unity-cheat-sheet

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The application will open at `http://localhost:3000`.

## Basic Customization

### 1. Update Site Information

Edit `client/src/config/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
  site: {
    title: "Your Project Name",
    subtitle: "Your Custom Subtitle",
    description: "Your description",
    year: 2025,
  },
  // ...
};
```

### 2. Add Your Content

#### Add Keyboard Shortcuts

Edit `client/src/config/content/hotkeys.config.ts`:

```typescript
{
  title: "My Custom Category",
  icon: "🎯",
  shortcuts: [
    { key: "Ctrl+K", action: "Your action" },
  ],
}
```

#### Add Workflow Steps

Edit `client/src/config/content/workflow.config.ts`:

```typescript
{
  title: "My Workflow",
  description: "Description",
  items: [
    { name: "Step 1", desc: "Description" },
  ],
}
```

#### Add Code Examples

Edit `client/src/config/content/scripting.config.ts`:

```typescript
{
  category: "Category Name",
  title: "Example Title",
  description: "What this does",
  language: "csharp",
  code: `
// Your code here
public class Example : MonoBehaviour
{
    void Start() { }
}
`,
}
```

### 3. Configure Deployment

#### For GitHub Pages

Create `.env.production`:

```env
VITE_BASE_PATH=/your-repository-name
```

#### For Custom Domain

Create `.env.production`:

```env
VITE_BASE_PATH=/
```

## Building for Production

```bash
# Build the application
pnpm build

# Preview the production build locally
pnpm preview
```

The built files will be in `dist/public/`.

## Deployment

### GitHub Pages

1. Set `VITE_BASE_PATH` in `.env.production` to match your repository name
2. Push to the main branch
3. GitHub Actions will automatically build and deploy

### Other Platforms

1. Build the application: `pnpm build`
2. Deploy the `dist/public/` directory to your hosting provider

## Common Tasks

### Change Theme Colors

Edit `client/src/index.css`:

```css
.dark {
  --primary: oklch(0.6 0.2 240);    /* Your primary color */
  --accent: oklch(0.55 0.18 160);   /* Your accent color */
}
```

### Add a New Tab

1. Create a new config file in `client/src/config/content/`
2. Define your content structure in `client/src/config/types.ts`
3. Add a new TabsTrigger and TabsContent in `client/src/pages/Home.tsx`

## Getting Help

- **Full Documentation**: See `TEMPLATE_DOCUMENTATION.md`
- **Architecture Details**: See the Architecture section in the full documentation
- **Troubleshooting**: See the Troubleshooting section in the full documentation

## Next Steps

1. Customize the content to match your needs
2. Adjust the theme colors to match your brand
3. Configure deployment for your target platform
4. Build and deploy your customized cheat sheet

For detailed information about the architecture, advanced customization, and best practices, refer to the complete documentation in `TEMPLATE_DOCUMENTATION.md`.
