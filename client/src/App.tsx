import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Router as WouterRouter, Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import AFrameDemoPage from "./pages/demos/AFrameDemoPage";
import ARDemoPage from "./pages/demos/ARDemoPage";
import ThreeDemoPage from "./pages/demos/ThreeDemoPage";
import DocsPage from "./pages/DocsPage";
import { appConfig } from "@/config/app.config";

function Router() {
  return (
    <WouterRouter base={appConfig.deployment.basePath}>
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/demos/aframe"} component={AFrameDemoPage} />
        <Route path={"/demos/ar"} component={ARDemoPage} />
        <Route path={"/demos/3d"} component={ThreeDemoPage} />
        <Route path={"/docs"} component={DocsPage} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="dark"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
