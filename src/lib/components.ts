import { ComponentMeta } from "@/data/components";
import {
  ButtonDemo,
  buttonCode,
  DropdownMenuDemo,
  dropdownMenuCode,
} from "@/components/demos";

export interface ComponentDemo {
  component: ComponentMeta;
  demo: React.ComponentType;
  code: string;
}

// Component demos mapping using separate files
const componentDemos: Record<string, ComponentDemo> = {
  button: {
    component: {
      id: "button",
      name: "Button",
      description: "Interactive button component with variants and states",
      category: "Interactive",
      tags: ["click", "form", "action"],
      difficulty: "beginner",
    },
    demo: ButtonDemo,
    code: buttonCode,
  },
  "dropdown-menu": {
    component: {
      id: "dropdown-menu",
      name: "Dropdown Menu",
      description: "Collapsible menu with nested items",
      category: "Navigation",
      tags: ["menu", "navigation", "select"],
      difficulty: "intermediate",
    },
    demo: DropdownMenuDemo,
    code: dropdownMenuCode,
  },
};

export function getComponentDemo(id: string): ComponentDemo | undefined {
  return componentDemos[id];
}

export function getAllComponentDemos(): ComponentDemo[] {
  return Object.values(componentDemos);
}
