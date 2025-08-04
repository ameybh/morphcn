export interface ComponentMeta {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  difficulty: "beginner" | "intermediate" | "advanced";
}

export const components: ComponentMeta[] = [
  {
    id: "button",
    name: "Button",
    description: "Interactive button component with variants and states",
    category: "Interactive",
    tags: ["click", "form", "action"],
    difficulty: "beginner",
  },
  {
    id: "dropdown-menu",
    name: "Dropdown Menu",
    description: "Collapsible menu with nested items",
    category: "Navigation",
    tags: ["menu", "navigation", "select"],
    difficulty: "intermediate",
  },
  {
    id: "modal",
    name: "Modal",
    description: "Overlay dialog for focused interactions",
    category: "Overlay",
    tags: ["dialog", "overlay", "focus"],
    difficulty: "intermediate",
  },
  {
    id: "popover",
    name: "Popover",
    description: "Floating content triggered by user interaction",
    category: "Overlay",
    tags: ["tooltip", "floating", "trigger"],
    difficulty: "intermediate",
  },
];

export const categories = Array.from(
  new Set(components.map((c) => c.category))
);

export function getComponentById(id: string): ComponentMeta | undefined {
  return components.find((c) => c.id === id);
}

export function getComponentsByCategory(category: string): ComponentMeta[] {
  return components.filter((c) => c.category === category);
}
