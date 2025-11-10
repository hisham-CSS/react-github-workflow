
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Code2, BookOpen, Workflow, Sparkles, Box, ExternalLink } from "lucide-react";
import { appConfig } from "@/config/app.config";
import { hotkeyCategories, workflows, scriptingPatterns } from "@/config/content";
import type { HotkeyCategory, Workflow as WorkflowType, ScriptingPattern } from "@/config/types";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">{appConfig.site.title}</h1>
              <p className="text-muted-foreground">{appConfig.site.subtitle}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <Tabs defaultValue="hotkeys" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="hotkeys" className="flex items-center gap-1 sm:gap-2">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Quick Reference</span>
              <span className="sm:hidden text-xs">Quick</span>
            </TabsTrigger>
            <TabsTrigger value="workflow" className="flex items-center gap-1 sm:gap-2">
              <Workflow className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Workflow</span>
              <span className="sm:hidden text-xs">Flow</span>
            </TabsTrigger>
            <TabsTrigger value="scripting" className="flex items-center gap-1 sm:gap-2">
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Template API</span>
              <span className="sm:hidden text-xs">API</span>
            </TabsTrigger>
            <TabsTrigger value="demos" className="flex items-center gap-1 sm:gap-2">
              <Box className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Live Demos</span>
              <span className="sm:hidden text-xs">Demos</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hotkeys" className="space-y-6">
            <HotkeysSection categories={hotkeyCategories} />
          </TabsContent>

          <TabsContent value="workflow" className="space-y-6">
            <WorkflowSection workflows={workflows} />
          </TabsContent>

          <TabsContent value="scripting" className="space-y-6">
            <ScriptingSection patterns={scriptingPatterns} />
          </TabsContent>

          <TabsContent value="demos" className="space-y-8">
            <DemosSection />
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

function HotkeysSection({ categories }: { categories: HotkeyCategory[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card key={category.title} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <span className="text-2xl">{category.icon}</span>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {category.shortcuts.map((shortcut) => (
                <div key={shortcut.key} className="flex items-center justify-between gap-2">
                  <Badge variant="secondary" className="font-mono text-xs whitespace-nowrap">
                    {shortcut.key}
                  </Badge>
                  <span className="text-sm text-muted-foreground text-right">{shortcut.action}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function WorkflowSection({ workflows }: { workflows: WorkflowType[] }) {
  return (
    <div className="space-y-6">
      {workflows.map((workflow) => (
        <Card key={workflow.title} className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-xl">{workflow.title}</CardTitle>
            <CardDescription>{workflow.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workflow.items.map((item) => (
                <div key={item.name} className="border-l-2 border-accent pl-4 py-2">
                  <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function ScriptingSection({ patterns }: { patterns: ScriptingPattern[] }) {
  // Group patterns by category
  const groupedPatterns = patterns.reduce((acc, pattern) => {
    if (!acc[pattern.category]) {
      acc[pattern.category] = [];
    }
    acc[pattern.category].push(pattern);
    return acc;
  }, {} as Record<string, ScriptingPattern[]>);

  return (
    <Accordion type="multiple" className="space-y-4">
      {Object.entries(groupedPatterns).map(([category, categoryPatterns]) => (
        <AccordionItem key={category} value={category} className="border border-border rounded-lg !border-b">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="text-xs">
                {categoryPatterns.length}
              </Badge>
              <span className="text-lg font-semibold">{category}</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6">
              {categoryPatterns.map((pattern) => (
                <Card key={pattern.title} className="bg-card/50 border-border">
                  <CardHeader>
                    <CardTitle className="text-base">{pattern.title}</CardTitle>
                    <CardDescription className="text-sm">{pattern.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-xs">
                      <code>{pattern.code}</code>
                    </pre>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}


function DemosSection() {
  return (
    <div className="space-y-6">
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 mb-6">
        <p className="text-sm text-blue-600 dark:text-blue-400">
          <strong>Note:</strong> Demos open in separate pages for best performance and to avoid conflicts with A-Frame/AR.js.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Box className="w-5 h-5" />
              A-Frame VR Scene
            </CardTitle>
            <CardDescription className="text-sm">
              Interactive 3D/VR scene with animated objects. Works in VR headsets and browsers.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/demos/aframe">
              <Button className="w-full gap-2">
                Launch Demo
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Box className="w-5 h-5" />
              AR.js Augmented Reality
            </CardTitle>
            <CardDescription className="text-sm">
              Marker-based AR experience using your device camera. Best on mobile.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a href={`${window.location.origin}${appConfig.deployment.basePath}ar-demo.html`} target="_blank" rel="noopener noreferrer">
              <Button className="w-full gap-2">
                Launch Demo
                <ExternalLink className="w-4 h-4" />
              </Button>
            </a>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Box className="w-5 h-5" />
              3D Canvas Animation
            </CardTitle>
            <CardDescription className="text-sm">
              Animated 3D graphics using pure canvas - no Three.js needed!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/demos/3d">
              <Button className="w-full gap-2">
                Launch Demo
                <ExternalLink className="w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
