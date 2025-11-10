
export interface Hotkey {
  key: string;
  action: string;
  description?: string;
}

export interface HotkeyCategory {
  title: string;
  icon: string;
  shortcuts: Hotkey[];
}

export interface WorkflowItem {
  name: string;
  desc: string;
  icon?: string;
}

export interface Workflow {
  title: string;
  description: string;
  items: WorkflowItem[];
}

export interface ScriptingPattern {
  category: string;
  title: string;
  description: string;
  code: string;
  language: string;
  notes?: string[];
}

export interface AppConfig {
  site: {
    title: string;
    subtitle: string;
    description: string;
    year: number;
  };
  deployment: {
    basePath: string;
  };
  features: {
    search: boolean;
    darkMode: boolean;
    printMode: boolean;
  };
  theme: {
    defaultTheme: "light" | "dark";
    switchable: boolean;
  };
}
