# Unity Cheat Sheet Template (Refactored)

A professionally refactored, configuration-driven web application template for creating comprehensive Unity reference documentation. This template separates content from code, enabling easy customization without requiring deep React or TypeScript knowledge.

## ✨ What's New in This Refactored Version

### Configuration-Based Routing
- **Environment-driven base paths** instead of hardcoded values
- **Flexible deployment** to GitHub Pages, custom domains, or subdirectories
- **Zero code changes** needed for different hosting scenarios

### Data-Driven Content Management
- **Separated content from presentation logic**
- **Type-safe configuration files** for hotkeys, workflows, and code examples
- **Easy updates** without touching React components
- **Structured data** with TypeScript interfaces for validation

### Improved Architecture
- **Modular component structure** with clear separation of concerns
- **Centralized configuration** in dedicated config files
- **Reusable components** that accept data as props
- **Maintainable codebase** with reduced complexity

## 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

See [QUICK_START.md](./QUICK_START.md) for a complete getting started guide.

## 📁 Project Structure

```
client/src/
├── config/                      # All configuration files
│   ├── app.config.ts           # Site-wide settings
│   ├── types.ts                # TypeScript interfaces
│   └── content/                # Content organized by category
│       ├── hotkeys.config.ts   # Keyboard shortcuts
│       ├── workflow.config.ts  # Workflow guidance
│       └── scripting.config.ts # Code examples
├── pages/
│   └── Home.tsx                # Main page (now data-driven)
└── components/
    └── ui/                     # shadcn/ui components
```

## 🎯 Key Features

### Easy Customization
- Update content by editing configuration files
- No need to understand React component structure
- Type-safe with autocomplete support in modern IDEs

### Flexible Deployment
- Works on GitHub Pages with repository-specific paths
- Supports custom domains at root path
- Can be deployed to subdirectories
- Same codebase for all deployment scenarios

### Professional Architecture
- Separation of concerns (content, configuration, presentation)
- Type-safe data structures
- Modular and maintainable code
- Follows React best practices

## 📝 Customization Guide

### Update Site Information

Edit `client/src/config/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
  site: {
    title: "Your Custom Title",
    subtitle: "Your Custom Subtitle",
    year: 2025,
  },
  // ...
};
```

### Add Content

**Hotkeys** (`client/src/config/content/hotkeys.config.ts`):
```typescript
{
  title: "Scene Tools",
  icon: "🛠️",
  shortcuts: [
    { key: "Q", action: "Pan" },
    { key: "W", action: "Move" },
  ],
}
```

**Workflows** (`client/src/config/content/workflow.config.ts`):
```typescript
{
  title: "Development Pipeline",
  description: "Standard workflow",
  items: [
    { name: "Step 1", desc: "Description" },
  ],
}
```

**Code Examples** (`client/src/config/content/scripting.config.ts`):
```typescript
{
  category: "Lifecycle",
  title: "MonoBehaviour Methods",
  description: "Core Unity methods",
  language: "csharp",
  code: `void Start() { }`,
}
```

## 🚢 Deployment

### GitHub Pages

1. Create `.env.production`:
   ```env
   VITE_BASE_PATH=/your-repository-name
   ```

2. Push to main branch (GitHub Actions handles deployment)

### Custom Domain

1. Create `.env.production`:
   ```env
   VITE_BASE_PATH=/
   ```

2. Build and deploy:
   ```bash
   pnpm build
   # Deploy dist/public/ to your hosting provider
   ```

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Get started in 5 minutes
- **[TEMPLATE_DOCUMENTATION.md](./TEMPLATE_DOCUMENTATION.md)** - Complete documentation
  - Architecture details
  - Configuration system
  - Component structure
  - Best practices
  - Troubleshooting

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Wouter** - Lightweight routing

## 📊 Comparison: Original vs Refactored

| Aspect | Original | Refactored |
|--------|----------|------------|
| **Base Path** | Hardcoded in 2 places | Environment variable |
| **Content Location** | Mixed with JSX (500+ lines) | Separate config files |
| **Customization** | Edit React components | Edit config files |
| **Type Safety** | Inline data | TypeScript interfaces |
| **Maintainability** | Difficult | Easy |
| **Deployment Flexibility** | GitHub Pages only | Any platform |

## 🎨 Customization Examples

### Change Theme Colors

Edit `client/src/index.css`:

```css
.dark {
  --primary: oklch(0.6 0.2 240);    /* Your color */
  --accent: oklch(0.55 0.18 160);   /* Your color */
}
```

### Enable Theme Switching

Edit `client/src/config/app.config.ts`:

```typescript
theme: {
  defaultTheme: "dark",
  switchable: true,  // Enable theme toggle
}
```

Then uncomment `switchable` in `client/src/App.tsx`.

## 🔧 Development Commands

```bash
pnpm dev       # Start dev server
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm check     # TypeScript type checking
pnpm format    # Format code with Prettier
```

## 📖 Migration from Original

If you're migrating from the original version:

1. **Content**: Move your custom content to the new config files
2. **Routing**: Set `VITE_BASE_PATH` environment variable
3. **Theme**: Your existing theme customizations in CSS will work as-is
4. **Components**: Custom UI components remain compatible

See the full documentation for detailed migration guidance.

## 🤝 Contributing

Contributions are welcome! Please ensure:
- Code follows existing patterns
- TypeScript types are properly defined
- Documentation is updated for new features

## 📄 License

MIT License - Feel free to use and modify for your projects.

## 🙏 Acknowledgments

This refactored template builds upon the original Unity Cheat Sheet by improving architecture, maintainability, and ease of customization while preserving all original functionality.

---

**Need Help?** Check the [complete documentation](./TEMPLATE_DOCUMENTATION.md) or open an issue.
