# Cheat Sheet Template

A configuration-driven, type-safe template for creating interactive documentation and cheat sheets. This template demonstrates itself - the content you see is a guide on how to use this template!

## ✨ Features

- **Configuration-Driven**: All content in separate config files - no React knowledge needed
- **Type-Safe**: Full TypeScript support with interfaces for validation
- **Flexible Routing**: Environment-based deployment to GitHub Pages or custom domains
- **Modern Stack**: React 19, TypeScript, Vite 7, Tailwind CSS 4
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Easy Customization**: Change colors, content, and structure with simple config edits

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/yourusername/react-github-workflow.git
cd react-github-workflow
pnpm install
```

### 2. Configure for Your Repository

Edit `.env.production`:

```env
VITE_BASE_PATH=/your-repository-name
```

### 3. Customize Content

Edit files in `client/src/config/`:

- `app.config.ts` - Site title, subtitle, and settings
- `content/hotkeys.config.ts` - Keyboard shortcuts or quick reference items
- `content/workflow.config.ts` - Step-by-step workflows or processes
- `content/scripting.config.ts` - Code examples and patterns

### 4. Test Locally

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
```

### 5. Deploy to GitHub Pages

```bash
git add .
git commit -m "Customize content"
git push origin main
```

Enable GitHub Pages:
1. Go to repository Settings → Pages
2. Set source to **GitHub Actions**
3. Wait for deployment to complete

Your site will be live at: `https://yourusername.github.io/your-repository-name/`

## 📁 Project Structure

```
client/src/
├── config/                      # All configuration
│   ├── app.config.ts           # Site settings
│   ├── types.ts                # TypeScript interfaces
│   └── content/                # Content by category
│       ├── hotkeys.config.ts   # Quick reference items
│       ├── workflow.config.ts  # Step-by-step guides
│       └── scripting.config.ts # Code examples
├── pages/
│   └── Home.tsx                # Main page (data-driven)
└── components/
    └── ui/                     # UI components (shadcn/ui)
```

## 🎨 Customization Examples

### Change Site Title

Edit `client/src/config/app.config.ts`:

```typescript
export const appConfig: AppConfig = {
  site: {
    title: "My Awesome Cheat Sheet",
    subtitle: "Quick Reference Guide",
    year: 2025,
  },
  // ...
};
```

### Add a Category

Edit `client/src/config/content/hotkeys.config.ts`:

```typescript
{
  title: "My Category",
  icon: "🎯",
  shortcuts: [
    { key: "Item 1", action: "Description of item 1" },
    { key: "Item 2", action: "Description of item 2" },
  ],
}
```

### Add a Workflow

Edit `client/src/config/content/workflow.config.ts`:

```typescript
{
  title: "My Process",
  description: "How to do something",
  items: [
    { name: "Step 1", desc: "First step" },
    { name: "Step 2", desc: "Second step" },
  ],
}
```

### Add Code Examples

Edit `client/src/config/content/scripting.config.ts`:

```typescript
{
  category: "Examples",
  title: "My Code Pattern",
  description: "What this demonstrates",
  language: "typescript",
  code: `
function example() {
  console.log("Hello World");
}
`,
}
```

### Customize Colors

Edit `client/src/index.css`:

```css
.dark {
  --primary: oklch(0.6 0.2 240);      /* Your primary color */
  --accent: oklch(0.55 0.18 160);     /* Your accent color */
  --background: oklch(0.15 0.02 250); /* Background color */
}
```

## 🛠️ Available Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm preview   # Preview production build
pnpm check     # TypeScript type checking
pnpm format    # Format code with Prettier
```

## 📚 Documentation

- **README_GITHUB_PAGES.md** - Detailed GitHub Pages setup
- **TEMPLATE_DOCUMENTATION.md** - Complete architecture guide
- **QUICK_START.md** - 5-minute getting started guide
- **MIGRATION_GUIDE.md** - Migrating from other versions

## 🎯 Use Cases

This template is perfect for:

- **Technical Documentation**: API references, command cheat sheets
- **Learning Resources**: Tutorial guides, quick reference cards
- **Team Knowledge**: Internal documentation, onboarding guides
- **Personal Projects**: Study notes, code snippets collections

## 🔧 Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Wouter** - Lightweight routing

## ⚠️ Important Notes

### Repository Name

Make sure `.env.production` matches your GitHub repository name exactly:

- ✅ Correct: `VITE_BASE_PATH=/react-github-workflow`
- ❌ Wrong: `VITE_BASE_PATH=react-github-workflow` (missing slash)
- ❌ Wrong: `VITE_BASE_PATH=/react-github-workflow/` (trailing slash)

### After Changing .env

Always rebuild after changing environment files:

```bash
pnpm build
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - Feel free to use this template for any project.

## 🙏 Credits

Built with modern web technologies and best practices. Template architecture designed for ease of use and maintainability.

---

**Template Version**: 2.0.0  
**Last Updated**: November 2025

## 💡 Tips

- Use the live site as a reference while customizing
- Check TypeScript errors with `pnpm check` before deploying
- Test locally with `pnpm dev` before pushing
- Keep content organized in logical categories
- Follow the existing type interfaces for new content

**Need help?** Check the documentation files or open an issue!
