import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code2, Palette, Route as RouteIcon, Rocket, Sparkles, Cpu } from "lucide-react";
import { appConfig } from "@/config/app.config";
import { Link } from "wouter";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-foreground">Complete Documentation</h1>
                <p className="text-muted-foreground">Comprehensive guides and API reference</p>
              </div>
            </div>
            <Link href="/">
              <a className="text-primary hover:underline">← Back to Home</a>
            </Link>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8">
            <TabsTrigger value="getting-started">
              <Sparkles className="w-4 h-4 mr-2" />
              Getting Started
            </TabsTrigger>
            <TabsTrigger value="configuration">
              <Code2 className="w-4 h-4 mr-2" />
              Configuration
            </TabsTrigger>
            <TabsTrigger value="styling">
              <Palette className="w-4 h-4 mr-2" />
              Styling
            </TabsTrigger>
            <TabsTrigger value="routing">
              <RouteIcon className="w-4 h-4 mr-2" />
              Routing
            </TabsTrigger>
            <TabsTrigger value="deployment">
              <Rocket className="w-4 h-4 mr-2" />
              Deployment
            </TabsTrigger>
            <TabsTrigger value="advanced">
              <Cpu className="w-4 h-4 mr-2" />
              Advanced
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <GettingStartedSection />
          </TabsContent>

          <TabsContent value="configuration">
            <ConfigurationSection />
          </TabsContent>

          <TabsContent value="styling">
            <StylingSection />
          </TabsContent>

          <TabsContent value="routing">
            <RoutingSection />
          </TabsContent>

          <TabsContent value="deployment">
            <DeploymentSection />
          </TabsContent>

          <TabsContent value="advanced">
            <AdvancedSection />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t border-border mt-16 py-6">
        <div className="container text-center text-muted-foreground text-sm">
          <p>{appConfig.site.title} • {appConfig.site.year}</p>
        </div>
      </footer>
    </div>
  );
}

function GettingStartedSection() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Welcome to React GitHub Workflow</CardTitle>
          <CardDescription>
            A production-ready template for deploying React applications to GitHub Pages with automated workflows.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3>What is this template?</h3>
          <p>
            React GitHub Workflow is a configuration-driven template that makes it easy to create and deploy documentation sites,
            portfolios, or any React application to GitHub Pages. It uses modern tools like Vite, TypeScript, Tailwind CSS, and
            GitHub Actions to provide a seamless development and deployment experience.
          </p>

          <h3>Key Features</h3>
          <ul>
            <li><strong>Configuration-driven</strong>: All content is defined in config files—no need to touch React components</li>
            <li><strong>Automated deployment</strong>: Push to main branch and GitHub Actions handles the rest</li>
            <li><strong>TypeScript</strong>: Full type safety with autocomplete in your IDE</li>
            <li><strong>Modern styling</strong>: Tailwind CSS with OKLCH color space for consistent, beautiful colors</li>
            <li><strong>Component library</strong>: shadcn/ui components ready to use</li>
            <li><strong>Lightweight routing</strong>: Wouter for fast, simple navigation</li>
            <li><strong>Demo support</strong>: Serve standalone HTML files for AR/VR demos</li>
          </ul>

          <h3>Quick Start</h3>
          <ol>
            <li>Clone or fork this repository</li>
            <li>Edit <code>.env.production</code> to match your GitHub repository name</li>
            <li>Customize <code>client/src/config/app.config.ts</code> with your site details</li>
            <li>Add your content to the config files in <code>client/src/config/content/</code></li>
            <li>Push to GitHub and enable GitHub Pages (Settings → Pages → Source: GitHub Actions)</li>
          </ol>

          <h3>Project Structure</h3>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`react-github-workflow/
├── client/
│   ├── public/              # Static files (HTML demos, images)
│   │   ├── ar-demo.html     # Standalone AR demo
│   │   └── docs/            # Documentation markdown files
│   ├── src/
│   │   ├── components/      # React components
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── config/          # Configuration files
│   │   │   ├── app.config.ts      # Main site config
│   │   │   ├── types.ts           # TypeScript interfaces
│   │   │   └── content/           # Content configs
│   │   │       ├── hotkeys.config.ts
│   │   │       ├── workflow.config.ts
│   │   │       └── scripting.config.ts
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   └── demos/       # Demo pages
│   │   ├── App.tsx          # Router configuration
│   │   └── index.css        # Global styles & theme
│   └── index.html
├── .github/workflows/
│   └── deploy.yml           # GitHub Actions workflow
├── .env.development         # Dev environment config
├── .env.production          # Production environment config
├── vite.config.ts           # Vite build configuration
└── package.json`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function ConfigurationSection() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Configuration API</CardTitle>
          <CardDescription>
            Complete reference for all configuration options and objects. All configuration is centralized in <code>client/src/config/</code> for easy management.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="multiple" className="space-y-4">
            <ConfigAccordionItem
              value="appconfig"
              title="AppConfig Object"
              filePath="client/src/config/app.config.ts"
              description="The main configuration object for your site. Controls the title, subtitle, description, and feature flags."
              properties={[
                { name: "site.title", type: "string", description: "Main title displayed in header and browser tab" },
                { name: "site.subtitle", type: "string", description: "Subtitle displayed below the main title" },
                { name: "site.description", type: "string", description: "Meta description for SEO" },
                { name: "site.year", type: "number", description: "Copyright year in footer" },
                { name: "deployment.basePath", type: "string", description: "Base path from environment variables (auto-configured)" },
                { name: "features.search", type: "boolean", description: "Enable search functionality (future feature)" },
                { name: "features.darkMode", type: "boolean", description: "Enable dark mode support" },
                { name: "features.printMode", type: "boolean", description: "Enable print-friendly mode" },
                { name: "theme.defaultTheme", type: "'dark' | 'light'", description: "Default theme for first-time visitors" },
                { name: "theme.switchable", type: "boolean", description: "Allow users to switch themes" },
              ]}
              example={`import type { AppConfig } from "./types";

export const appConfig: AppConfig = {
  site: {
    title: "My Awesome Project",
    subtitle: "Building the future, one commit at a time",
    description: "A comprehensive guide to modern web development",
    year: 2025,
  },
  // ...
};`}
              useCases={[
                "Rebranding: Change title and subtitle to match your project",
                "SEO Optimization: Update description for better search rankings",
                "Feature Flags: Enable/disable features without code changes",
                "Theme Control: Set default theme based on your design",
              ]}
            />

            <ConfigAccordionItem
              value="hotkeycategory"
              title="HotkeyCategory Object"
              filePath="client/src/config/content/hotkeys.config.ts"
              description="Defines the content for the 'Quick Reference' tab. It is an array of HotkeyCategory objects."
              properties={[
                { name: "title", type: "string", description: "The title of the category section" },
                { name: "icon", type: "string", description: "An emoji to be displayed next to the title" },
                { name: "shortcuts", type: "Hotkey[]", description: "An array of Hotkey objects" },
              ]}
              example={`import type { HotkeyCategory } from "../types";

export const hotkeyCategories: HotkeyCategory[] = [
  {
    title: "My Favorite Tools",
    icon: "🛠️",
    shortcuts: [
      { key: "VS Code", action: "My favorite code editor" },
      { key: "Figma", action: "For all my design needs" },
    ],
  },
];`}
              useCases={[
                "Create a cheat sheet for your project's tools",
                "List keyboard shortcuts for your application",
                "Provide a quick reference for common commands",
              ]}
            />

            <ConfigAccordionItem
              value="workflow"
              title="Workflow Object"
              filePath="client/src/config/content/workflow.config.ts"
              description="Defines the content for the 'Workflow' tab. It is an array of Workflow objects, each representing a step-by-step guide."
              properties={[
                { name: "title", type: "string", description: "The title of the workflow" },
                { name: "description", type: "string", description: "A brief description of the workflow" },
                { name: "items", type: "WorkflowItem[]", description: "An array of WorkflowItem objects" },
              ]}
              example={`import type { Workflow } from "../types";

export const workflows: Workflow[] = [
  {
    title: "My Content Creation Workflow",
    description: "How I create and publish new content.",
    items: [
      { name: "1. Brainstorm Ideas", desc: "Come up with a list of topics." },
      { name: "2. Write Draft", desc: "Write the first draft in Markdown." },
      { name: "3. Review and Edit", desc: "Proofread and make improvements." },
      { name: "4. Publish", desc: "Push to GitHub to deploy." },
    ],
  },
];`}
              useCases={[
                "Document a development process",
                "Create a tutorial for new users",
                "Outline a series of steps for a complex task",
              ]}
            />

            <ConfigAccordionItem
              value="types"
              title="TypeScript Interfaces"
              filePath="client/src/config/types.ts"
              description="Defines all the TypeScript interfaces used in the configuration files. You can extend these to add custom properties."
              properties={[
                { name: "AppConfig", type: "interface", description: "Main application configuration" },
                { name: "HotkeyCategory", type: "interface", description: "A category of hotkeys" },
                { name: "Hotkey", type: "interface", description: "A single hotkey or command" },
                { name: "Workflow", type: "interface", description: "A workflow or process" },
                { name: "WorkflowItem", type: "interface", description: "A step in a workflow" },
                { name: "ScriptingPattern", type: "interface", description: "A code example for the Template API tab" },
              ]}
              example={`// Add a new property to the Hotkey interface
export interface Hotkey {
  key: string;
  action: string;
  category?: string;  // Your new optional property
}

// Or create a completely new interface for a new section
export interface CustomSection {
  title: string;
  items: CustomItem[];
}

export interface CustomItem {
  name: string;
  value: string;
}`}
              useCases={[
                "Add custom fields to existing content objects",
                "Create new content types for custom sections",
                "Enforce type safety across your configuration",
              ]}
            />
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

// Helper component for consistent accordion items
interface ConfigAccordionItemProps {
  value: string;
  title: string;
  filePath: string;
  description: string;
  properties: Array<{ name: string; type: string; description: string }>;
  example: string;
  useCases: string[];
}

function ConfigAccordionItem({ value, title, filePath, description, properties, example, useCases }: ConfigAccordionItemProps) {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger>
        <div className="flex items-center gap-2">
          <Badge>Object</Badge>
          <span className="font-semibold">{title}</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="space-y-4">
        <p><strong>File:</strong> <code>{filePath}</code></p>
        <p>{description}</p>

        <h4>Properties</h4>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th>Property</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {properties.map(prop => (
                <tr key={prop.name}>
                  <td><code>{prop.name}</code></td>
                  <td><code>{prop.type}</code></td>
                  <td>{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h4>Example</h4>
        <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">{example}</pre>

        <h4>Use Cases</h4>
        <ul>
          {useCases.map(useCase => <li key={useCase}>{useCase}</li>)}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

function StylingSection() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Styling Guide</CardTitle>
          <CardDescription>
            Learn how to customize the visual appearance of your site using Tailwind CSS, OKLCH colors, and shadcn/ui components.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3>Theme Customization with OKLCH</h3>
          <p>
            This template uses the modern OKLCH color space for more consistent and perceptually uniform colors. All theme colors are defined as CSS variables in <code>client/src/index.css</code>.
          </p>

          <h4>How to Change Colors</h4>
          <ol>
            <li>Open <code>client/src/index.css</code></li>
            <li>Modify the color values in the <code>.dark</code> or <code>:root</code> (light) class</li>
            <li>Use a visual tool like <a href="https://oklch.com/" target="_blank" rel="noopener noreferrer">oklch.com</a> to pick your colors</li>
          </ol>

          <h4>Example: Change Primary Color</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`/* client/src/index.css */

.dark {
  --primary: oklch(0.7 0.2 280);          /* A nice purple */
  --primary-foreground: oklch(0.98 0 0);  /* Text on primary */
  --accent: oklch(0.65 0.2 140);          /* Teal accent color */
  --accent-foreground: oklch(0.98 0 0);   /* Text on accent */
  --background: oklch(0.15 0.02 250);     /* Dark background */
  --foreground: oklch(0.95 0.01 250);     /* Light text */
  /* ... more colors */
}`}
          </pre>

          <h3>Using shadcn/ui Components</h3>
          <p>
            The template includes a set of pre-built components from <a href="https://ui.shadcn.com/" target="_blank" rel="noopener noreferrer">shadcn/ui</a>. You can find them in <code>client/src/components/ui/</code>.
          </p>

          <h4>Available Components</h4>
          <ul>
            <li>Accordion</li>
            <li>Badge</li>
            <li>Button</li>
            <li>Card</li>
            <li>Tabs</li>
            <li>Tooltip</li>
          </ul>

          <h4>Example: Use Card and Button</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Custom Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a card with a button.</p>
        <Button className="mt-4">Click Me</Button>
      </CardContent>
    </Card>
  );
}`}
          </pre>

          <h3>Custom CSS Classes</h3>
          <p>
            You can add your own custom utility classes using Tailwind CSS's <code>@layer</code> directive in <code>client/src/index.css</code>.
          </p>

          <h4>Example: Create a Custom Button Style</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`/* client/src/index.css */

@layer components {
  .btn-custom {
    @apply px-4 py-2 rounded-lg bg-primary text-primary-foreground;
    @apply hover:bg-primary/90 transition-colors;
  }
  
  .card-gradient {
    @apply bg-gradient-to-br from-primary/10 to-accent/10;
    @apply border border-primary/20;
  }
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function RoutingSection() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Routing Guide</CardTitle>
          <CardDescription>
            Master navigation and page creation with Wouter, a lightweight and minimalist routing library for React.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3>How Routing Works</h3>
          <p>
            All routes are defined in <code>client/src/App.tsx</code> using the <code>&lt;Route&gt;</code> component from Wouter. The <code>&lt;Switch&gt;</code> component ensures that only the first matching route is rendered.
          </p>

          <h4>Adding a New Page</h4>
          <ol>
            <li>
              <strong>Create the page component</strong>
              <p>Create a new <code>.tsx</code> file in <code>client/src/pages/</code>. For example, <code>client/src/pages/AboutPage.tsx</code>.</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`// client/src/pages/AboutPage.tsx

export default function AboutPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold">About Us</h1>
      <p className="text-muted-foreground">This is the about page.</p>
    </div>
  );
}`}
              </pre>
            </li>
            <li>
              <strong>Add the route in <code>App.tsx</code></strong>
              <p>Import your new page component and add a new <code>&lt;Route&gt;</code> to the <code>&lt;Switch&gt;</code>.</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`// client/src/App.tsx

import { Router as WouterRouter, Route, Switch } from "wouter";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage"; // Import your new page
import { appConfig } from "@/config/app.config";

function Router() {
  return (
    <WouterRouter base={appConfig.deployment.basePath}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={AboutPage} /> {/* Add your new route */}
        {/* ... other routes */}
      </Switch>
    </WouterRouter>
  );
}`}
              </pre>
            </li>
          </ol>

          <h3>Navigation with Links</h3>
          <p>
            Use the <code>&lt;Link&gt;</code> component from Wouter to create navigation links. This will prevent full page reloads and provide a smoother user experience.
          </p>

          <h4>Example: Create a Navigation Menu</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`import { Link } from "wouter";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <Link href="/">
        <a className="text-primary hover:underline">Home</a>
      </Link>
      <Link href="/about">
        <a className="text-primary hover:underline">About</a>
      </Link>
      <Link href="/demos/aframe">
        <a className="text-primary hover:underline">VR Demo</a>
      </Link>
    </nav>
  );
}`}
          </pre>

          <h3>Dynamic Routes</h3>
          <p>
            Wouter supports dynamic routes with parameters. Use the <code>useParams</code> hook to access the parameters in your component.
          </p>

          <h4>Example: Blog Post Page</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`import { Route, useParams } from "wouter";

// Define the page component
function BlogPost() {
  const { id } = useParams();
  return <div>Blog Post ID: {id}</div>;
}

// Add the route in App.tsx
<Route path="/blog/:id" component={BlogPost} />

// Link to it
<Link href="/blog/123">View Post 123</Link>`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}

function DeploymentSection() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Deployment Guide</CardTitle>
          <CardDescription>
            Everything you need to know about deploying to GitHub Pages with GitHub Actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3>Environment Variables</h3>
          <p>
            The most important step for a successful deployment is to set the <code>VITE_BASE_PATH</code> in <code>.env.production</code>. This must match your GitHub repository name exactly.
          </p>

          <h4>Example: Set Repository Name</h4>
          <p>If your repository is <code>https://github.com/your-username/my-awesome-project</code>, you must set the <code>VITE_BASE_PATH</code> as follows:</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`# .env.production

VITE_BASE_PATH=/my-awesome-project`}
          </pre>

          <h3>GitHub Actions Workflow</h3>
          <p>
            The template includes a pre-configured GitHub Actions workflow in <code>.github/workflows/deploy.yml</code> that automatically builds and deploys your application when you push to the <code>main</code> branch.
          </p>

          <h4>How It Works</h4>
          <ol>
            <li><strong>Push to main</strong>: When you push changes to the <code>main</code> branch, the workflow is triggered.</li>
            <li><strong>Build</strong>: It checks out your code, installs dependencies, and builds the application.</li>
            <li><strong>Deploy</strong>: The built files are deployed to the <code>gh-pages</code> branch, which is then served by GitHub Pages.</li>
          </ol>

          <h4>Example: Add a Test Step</h4>
          <p>You can customize the workflow to add steps for testing, linting, or other checks.</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`# .github/workflows/deploy.yml

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      # ... (checkout, setup node, setup pnpm)

      - name: Install dependencies
        run: pnpm install

      - name: Run tests
        run: pnpm test # Your test command here

      - name: Build
        run: pnpm build

      # ... (upload artifact)`}
          </pre>

          <h3>Serving Standalone HTML Files</h3>
          <p>
            A unique feature of this template is the ability to serve standalone HTML files alongside your React application. This is perfect for demos that use libraries like A-Frame or AR.js that may conflict with React.
          </p>

          <h4>How It Works</h4>
          <ol>
            <li>
              <strong>Place HTML file in <code>client/public/</code></strong>
              <p>Any files in this directory are served directly by the web server.</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`client/public/
├── ar-demo.html
├── vr-demo.html
└── my-demo.html`}
              </pre>
            </li>
            <li>
              <strong>Link to it with basePath handling</strong>
              <p>To ensure the link works in both development and production, you need to handle the <code>basePath</code>.</p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`import { appConfig } from "@/config/app.config";

<a 
  href={\`\${window.location.origin}\${appConfig.deployment.basePath === '/' ? '' : appConfig.deployment.basePath}/my-demo.html\`}
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>Launch Demo</Button>
</a>`}
              </pre>
            </li>
            <li>
              <strong>Why the basePath logic?</strong>
              <ul>
                <li>In development: <code>basePath = "/"</code> → Link: <code>http://localhost:3000/my-demo.html</code></li>
                <li>In production: <code>basePath = "/repo-name"</code> → Link: <code>https://username.github.io/repo-name/my-demo.html</code></li>
              </ul>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  );
}

function AdvancedSection() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Advanced Topics</CardTitle>
          <CardDescription>
            Deep dives into advanced features like external API integration, custom components, and performance optimization.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <h3>Fetch External API Data</h3>
          <p>
            You can easily integrate with external APIs to display dynamic content in your application. Use the <code>useEffect</code> and <code>useState</code> hooks to fetch and manage data.
          </p>

          <h4>Example: GitHub Repositories</h4>
          <p>This example shows how to fetch and display a list of repositories from the GitHub API.</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

export default function GitHubRepos({ username }: { username: string }) {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(\`https://api.github.com/users/\${username}/repos\`)
      .then(res => res.json())
      .then(data => {
        setRepos(data);
        setLoading(false);
      });
  }, [username]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {repos.map(repo => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
          <p>{repo.description}</p>
        </div>
      ))}
    </div>
  );
}`}
          </pre>

          <h3>Create Custom Components</h3>
          <p>
            Build reusable components with TypeScript and Tailwind CSS to keep your codebase clean and maintainable. Place your custom components in <code>client/src/components/</code>.
          </p>

          <h4>Example: FeatureCard Component</h4>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`// client/src/components/FeatureCard.tsx

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-card border border-border rounded-lg hover:border-primary transition-colors">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

// Usage in another component
<FeatureCard 
  icon="🚀"
  title="Fast Deployment"
  description="Deploy to GitHub Pages in seconds"
/>`}
          </pre>

          <h3>Code Splitting & Lazy Loading</h3>
          <p>
            Optimize the performance of your application by code-splitting your routes. This means that the code for each page is only loaded when the user navigates to it. The template uses React's <code>lazy</code> and <code>Suspense</code> features for this.
          </p>

          <h4>Example: Lazy Load Pages</h4>
          <p>Modify <code>client/src/App.tsx</code> to lazy load your page components.</p>
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
{`import { lazy, Suspense } from 'react';
import { Router as WouterRouter, Route, Switch } from 'wouter';

// Lazy load page components
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const AFrameDemoPage = lazy(() => import('./pages/demos/AFrameDemoPage'));

function Router() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WouterRouter base={appConfig.deployment.basePath}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/demos/aframe" component={AFrameDemoPage} />
        </Switch>
      </WouterRouter>
    </Suspense>
  );
}`}
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}