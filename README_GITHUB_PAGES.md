# Unity Cheat Sheet - Refactored Template

A configuration-driven Unity reference documentation template with improved routing and content management.

## 🚀 Quick Setup for GitHub Pages

### 1. Configure for Your Repository

Edit `.env.production` and set your repository name:

```env
VITE_BASE_PATH=/your-repository-name
```

For example, if your repo is `github.com/username/unity-docs`, set:
```env
VITE_BASE_PATH=/unity-docs
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Test Locally

```bash
# Development mode
pnpm dev

# Build and preview production
pnpm build
pnpm preview
```

### 4. Deploy to GitHub Pages

The repository includes GitHub Actions workflow that automatically deploys when you push to main:

```bash
git add .
git commit -m "Update content"
git push origin main
```

**Enable GitHub Pages**:
1. Go to your repository Settings → Pages
2. Under "Build and deployment", select **GitHub Actions** as the source
3. Push to main branch to trigger deployment

## 📝 Customizing Content

All content is in configuration files - no React knowledge needed!

### Update Site Information

Edit `client/src/config/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
  site: {
    title: "Your Title",
    subtitle: "Your Subtitle",
    year: 2025,
  },
  // ...
};
```

### Add/Edit Keyboard Shortcuts

Edit `client/src/config/content/hotkeys.config.ts`:

```typescript
{
  title: "Scene Tools",
  icon: "🛠️",
  shortcuts: [
    { key: "Q", action: "Pan" },
    { key: "W", action: "Move" },
    // Add more shortcuts here
  ],
}
```

### Add/Edit Workflows

Edit `client/src/config/content/workflow.config.ts`:

```typescript
{
  title: "Your Workflow",
  description: "Description",
  items: [
    { name: "Step 1", desc: "Description" },
    { name: "Step 2", desc: "Description" },
  ],
}
```

### Add/Edit Code Examples

Edit `client/src/config/content/scripting.config.ts`:

```typescript
{
  category: "Lifecycle",
  title: "MonoBehaviour Methods",
  description: "Core Unity methods",
  language: "csharp",
  code: `
void Start() {
    // Your code here
}
`,
}
```

## 🎨 Customizing Theme

Edit `client/src/index.css` to change colors:

```css
.dark {
  --primary: oklch(0.6 0.2 240);      /* Unity blue */
  --accent: oklch(0.55 0.18 160);     /* Unity green */
  --background: oklch(0.15 0.02 250); /* Dark background */
}
```

## 📁 Project Structure

```
client/src/
├── config/                      # All configuration
│   ├── app.config.ts           # Site settings
│   ├── types.ts                # TypeScript types
│   └── content/                # Content by category
│       ├── hotkeys.config.ts   # Keyboard shortcuts
│       ├── workflow.config.ts  # Workflows
│       └── scripting.config.ts # Code examples
├── pages/
│   └── Home.tsx                # Main page (data-driven)
└── components/
    └── ui/                     # UI components
```

## 🔧 Key Improvements

### Before Refactoring
- ❌ Hardcoded base path in 2 places
- ❌ 504 lines of mixed content and JSX
- ❌ Difficult to update content
- ❌ No type safety

### After Refactoring
- ✅ Environment-based routing via `.env.production`
- ✅ 150 lines of clean component code (70% reduction)
- ✅ Easy content updates in config files
- ✅ Full TypeScript type safety
- ✅ Separated content from presentation

## 📚 Additional Documentation

- **TEMPLATE_DOCUMENTATION.md** - Complete architecture and customization guide
- **QUICK_START.md** - 5-minute getting started guide
- **MIGRATION_GUIDE.md** - Migrating from original version

## ⚠️ Troubleshooting

### Build Errors

If you get TypeScript errors:
```bash
pnpm check
```

### Routing Issues

Make sure `.env.production` matches your repository name exactly:
```env
# Correct
VITE_BASE_PATH=/unity-cheat-sheet

# Wrong (missing slash)
VITE_BASE_PATH=unity-cheat-sheet

# Wrong (trailing slash)
VITE_BASE_PATH=/unity-cheat-sheet/
```

### Assets Not Loading

After changing `.env.production`, rebuild:
```bash
pnpm build
```

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- shadcn/ui components
- Wouter (routing)

## 📄 License

MIT License - Feel free to use and modify for your projects.

---

**Template Version**: 2.0.0 (Refactored)  
**Maintained By**: Manus AI
