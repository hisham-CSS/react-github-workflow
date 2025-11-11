# Stage 1: Beginner Level - Configuration Files

This stage covers the easiest way to customize the template - by editing the configuration files. No knowledge of React or TypeScript is required.

## 1. Site Configuration (`app.config.ts`)

**File**: `client/src/config/app.config.ts`

This file controls the main site settings like title, subtitle, and description.

### Example: Change Site Title

```typescript
// client/src/config/app.config.ts
export const appConfig = {
  site: {
    title: "React GitHub Workflow",
    subtitle: "Deploy React Apps to GitHub Pages",
    description: "A complete guide to deploying React applications to GitHub Pages...",
    year: 2025,
  },
  // ...
};
```

### Available Settings

| Setting | Type | Description |
|---|---|---|
| `site.title` | `string` | The main title of your site (appears in header and browser tab) |
| `site.subtitle` | `string` | Subtitle displayed below the main title |
| `site.description` | `string` | Meta description for SEO |
| `site.year` | `number` | Copyright year in the footer |
| `deployment.basePath` | `string` | Base path for deployment (from `.env` files) |
| `features.search` | `boolean` | Enable/disable search functionality |
| `features.darkMode` | `boolean` | Enable/disable dark mode |
| `features.printMode` | `boolean` | Enable/disable print-friendly mode |
| `theme.defaultTheme` | `"dark" | "light"` | Default theme on first visit |
| `theme.switchable` | `boolean` | Allow users to switch themes |

## 2. Content Files (`client/src/config/content/`)

These files control the content of each tab on the page.

### Quick Reference Tab (`hotkeys.config.ts`)

**File**: `client/src/config/content/hotkeys.config.ts`

Controls the content of the "Quick Reference" tab. You can add sections and items.

#### Example: Add a New Section

```typescript
// client/src/config/content/hotkeys.config.ts
import type { HotkeyCategory } from "../types";

export const hotkeyCategories: HotkeyCategory[] = [
  {
    title: "My New Section",
    icon: "📄",  // Any emoji
    shortcuts: [
      { key: "package.json", action: "Project dependencies and scripts" },
      { key: "vite.config.ts", action: "Build configuration and base path" },
      // ...
    ],
  },
  // ... other categories
];
```

### Workflow Tab (`workflow.config.ts`)

**File**: `client/src/config/content/workflow.config.ts`

Controls the content of the "Workflow" tab. Add step-by-step guides.

#### Example: Add a New Workflow

```typescript
// client/src/config/content/workflow.config.ts
import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  {
    title: "My New Workflow",
    description: "Description of what this workflow does",
    items: [
      { name: "1. Create React App", desc: "Initialize with Vite, CRA, or your preferred tool" },
      { name: "2. Set Repository Name", desc: "Edit .env.production with VITE_BASE_PATH=/your-repo-name" },
      // ...
    ],
  },
  // ... other workflows
];
```

### Template API Tab (`scripting.config.ts`)

**File**: `client/src/config/content/scripting.config.ts`

Controls the content of the "Template API" tab. This is where you can add code examples and API documentation.

#### Example: Add a New Code Example

```typescript
// client/src/config/content/scripting.config.ts
import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  {
    category: "My New Category",
    title: "My New Code Example",
    description: "This is how you do something cool.",
    language: "typescript",  // or "javascript", "bash", "yaml", etc.
    code: `
// Your code example here
function example() {
  console.log("Hello World");
}
`,
  },
  // ... other examples
];
```

## 3. Environment Variables (`.env` files)

These files control environment-specific settings, like the deployment path.

### Development (`.env.development`)

**File**: `.env.development`

Used when running `pnpm dev`.

```env
# .env.development
VITE_BASE_PATH=/
```

### Production (`.env.production`)

**File**: `.env.production`

Used when running `pnpm build`. **This is the most important file to configure for deployment.**

#### Example: Deploy to GitHub Pages

```env
# .env.production
VITE_BASE_PATH=/your-repository-name
```

**Important**: The `VITE_BASE_PATH` must start with a `/` and match your GitHub repository name exactly.

---

This completes Stage 1. Please review and let me know if you have any feedback or if I should proceed to Stage 2: Intermediate Level - Styling and Components.
