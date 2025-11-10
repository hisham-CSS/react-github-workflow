# Migration Guide: Original to Refactored Template

This guide helps you migrate from the original Unity Cheat Sheet to the refactored, configuration-driven version.

## Overview of Changes

The refactored version introduces a configuration-based architecture that separates content from presentation logic. This change improves maintainability and makes customization significantly easier.

## Step-by-Step Migration

### Step 1: Understand the New Structure

The refactored version organizes content into configuration files:

```
Original:                          Refactored:
client/src/pages/Home.tsx         client/src/config/content/
  (500+ lines with mixed            ├── hotkeys.config.ts
   content and JSX)                 ├── workflow.config.ts
                                    └── scripting.config.ts
                                  
                                  client/src/config/
                                    ├── app.config.ts
                                    └── types.ts
                                  
                                  client/src/pages/Home.tsx
                                    (150 lines, data-driven)
```

### Step 2: Migrate Custom Content

If you've customized the original `Home.tsx`, extract your content to the new config files.

#### Migrating Hotkeys

**Original** (in Home.tsx):
```typescript
const hotkeyCategories = [
  {
    title: "Scene Tools",
    icon: "🛠️",
    shortcuts: [
      { key: "Q", action: "Pan" },
    ],
  },
];
```

**Refactored** (in `client/src/config/content/hotkeys.config.ts`):
```typescript
import type { HotkeyCategory } from "../types";

export const hotkeyCategories: HotkeyCategory[] = [
  {
    title: "Scene Tools",
    icon: "🛠️",
    shortcuts: [
      { key: "Q", action: "Pan" },
    ],
  },
];
```

#### Migrating Workflows

**Original** (in Home.tsx):
```typescript
const workflows = [
  {
    title: "Prototyping Approaches",
    description: "Choose the right strategy",
    items: [
      { name: "Rapid Prototyping", desc: "Quick proof of concept" },
    ],
  },
];
```

**Refactored** (in `client/src/config/content/workflow.config.ts`):
```typescript
import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  {
    title: "Prototyping Approaches",
    description: "Choose the right strategy",
    items: [
      { name: "Rapid Prototyping", desc: "Quick proof of concept" },
    ],
  },
];
```

#### Migrating Code Examples

**Original** (in Home.tsx):
```typescript
// Embedded in JSX
<pre>
  <code>{`void Start() { }`}</code>
</pre>
```

**Refactored** (in `client/src/config/content/scripting.config.ts`):
```typescript
import type { ScriptingPattern } from "../types";

export const scriptingPatterns: ScriptingPattern[] = [
  {
    category: "Lifecycle",
    title: "MonoBehaviour Methods",
    description: "Core Unity methods",
    language: "csharp",
    code: `void Start() { }`,
  },
];
```

### Step 3: Configure Deployment

#### Original Configuration

**App.tsx**:
```typescript
<WouterRouter base="/unity-cheat-sheet">
```

**vite.config.ts**:
```typescript
export default defineConfig({
  base: '/unity-cheat-sheet/',
});
```

#### Refactored Configuration

Create `.env.production`:
```env
VITE_BASE_PATH=/unity-cheat-sheet
```

The router and Vite config now read from this environment variable automatically.

### Step 4: Update Site Metadata

#### Original

Hardcoded in Home.tsx:
```typescript
<h1>Unity Cheat Sheet</h1>
<p>For Interaction Designers...</p>
<footer>Unity Cheat Sheet • 2025</footer>
```

#### Refactored

Create/edit `client/src/config/app.config.ts`:
```typescript
export const appConfig: AppConfig = {
  site: {
    title: "Unity Cheat Sheet",
    subtitle: "For Interaction Designers Prototyping Interactive Experiences",
    description: "A comprehensive cheat sheet...",
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
```

### Step 5: Preserve Custom Styling

If you've customized colors in `client/src/index.css`, your changes will work as-is in the refactored version. The CSS structure remains the same.

**No changes needed** for:
- Color variables
- Custom CSS classes
- Tailwind customizations

### Step 6: Test the Migration

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Verify content displays correctly**:
   - Check all hotkey categories
   - Verify workflow sections
   - Test code examples

4. **Check routing**:
   - Navigate between tabs
   - Verify 404 page works

5. **Build for production**:
   ```bash
   pnpm build
   ```

6. **Preview production build**:
   ```bash
   pnpm preview
   ```

## Common Migration Scenarios

### Scenario 1: Custom Hotkey Categories

If you added custom hotkey categories in the original version:

1. Locate your custom categories in the original `Home.tsx`
2. Copy the data structure
3. Add to `client/src/config/content/hotkeys.config.ts`
4. The TypeScript type system will validate your structure

### Scenario 2: Modified Workflow Steps

If you modified the workflow sections:

1. Find your custom workflows in the original `Home.tsx`
2. Extract the data
3. Add to `client/src/config/content/workflow.config.ts`
4. Ensure each workflow has `title`, `description`, and `items`

### Scenario 3: Additional Code Examples

If you added custom code examples:

1. Locate your code snippets in the original `Home.tsx`
2. Structure them according to the `ScriptingPattern` interface
3. Add to `client/src/config/content/scripting.config.ts`
4. Include `category`, `title`, `description`, `language`, and `code`

### Scenario 4: Custom Components

If you created custom React components:

1. Keep your custom components in `client/src/components/`
2. Update imports if you reference configuration data
3. Follow the pattern of accepting data as props
4. Import from `@/config/content` to access configuration

### Scenario 5: GitHub Pages Deployment

If you're currently deployed to GitHub Pages:

1. Create `.env.production` with your repository name:
   ```env
   VITE_BASE_PATH=/your-repository-name
   ```

2. Commit and push to trigger GitHub Actions deployment

3. Verify the site works at `https://yourusername.github.io/your-repository-name/`

## Troubleshooting Migration Issues

### Issue: Content Not Displaying

**Cause**: Configuration files not properly imported or exported.

**Solution**:
1. Verify `client/src/config/content/index.ts` exports all config files
2. Check that `Home.tsx` imports from `@/config/content`
3. Run `pnpm check` to identify TypeScript errors

### Issue: Routing Broken After Deployment

**Cause**: Base path mismatch between environment variable and actual deployment path.

**Solution**:
1. Verify `VITE_BASE_PATH` in `.env.production` matches your deployment path
2. For GitHub Pages, it should match your repository name exactly
3. For custom domains, it should be `/`
4. Rebuild after changing environment variables

### Issue: TypeScript Errors in Config Files

**Cause**: Data structure doesn't match type interfaces.

**Solution**:
1. Check `client/src/config/types.ts` for interface definitions
2. Ensure all required fields are present
3. Use IDE autocomplete to discover available fields
4. Run `pnpm check` to see detailed error messages

### Issue: Styles Not Applied

**Cause**: CSS file not imported or Tailwind not configured.

**Solution**:
1. Verify `client/src/index.css` is imported in `main.tsx`
2. Check that Tailwind plugin is in `vite.config.ts`
3. Ensure `@tailwindcss/vite` is installed

## Benefits After Migration

After completing the migration, you'll benefit from:

**Easier Content Updates**: Edit configuration files instead of navigating through JSX.

**Type Safety**: TypeScript interfaces catch errors before runtime.

**Flexible Deployment**: Change deployment targets without code modifications.

**Better Maintainability**: Clear separation between content and presentation.

**Scalability**: Add new sections or features without refactoring existing code.

**Documentation**: Configuration files serve as self-documenting content structure.

## Rollback Plan

If you need to rollback to the original version:

1. The original files are preserved in your Git history
2. Use `git checkout` to restore the original `Home.tsx`, `App.tsx`, and `vite.config.ts`
3. Remove the `config/` directory if you want to fully revert

However, we recommend giving the refactored version a try, as it significantly improves the development experience.

## Getting Help

If you encounter issues during migration:

1. Check the [TEMPLATE_DOCUMENTATION.md](./TEMPLATE_DOCUMENTATION.md) for detailed architecture information
2. Review the [QUICK_START.md](./QUICK_START.md) for basic setup steps
3. Run `pnpm check` to identify TypeScript errors
4. Check browser console for runtime errors

## Next Steps

After successful migration:

1. Explore the new configuration system
2. Customize content for your specific needs
3. Consider enabling additional features (search, theme switching)
4. Review best practices in the full documentation

Congratulations on migrating to the refactored template! You now have a more maintainable and flexible codebase.
