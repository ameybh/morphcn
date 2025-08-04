# Component Showcase

A modern, interactive showcase of UI components built with Next.js, TypeScript, and Tailwind CSS. Each component includes live demos with source code, making it perfect for developers to understand and implement modern web interfaces.

## Features

- 🎨 **Live Demos**: Interact with components in real-time
- 📝 **Source Code**: View implementation details with syntax highlighting
- 📱 **Mobile Responsive**: Works seamlessly on all devices
- 🔍 **Search & Filter**: Find components by name, description, or tags
- 🏷️ **Categorized**: Components organized by type and difficulty
- 🌙 **Dark Mode**: Built-in theme support
- 📋 **Copy Code**: One-click code copying functionality

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── [component]/          # Dynamic component pages
│   │   │   └── page.tsx
│   │   └── page.tsx              # Components listing page
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/
│   ├── demos/                    # Component demo files
│   │   ├── button-demo.tsx       # Button component demo
│   │   ├── dropdown-menu-demo.tsx # Dropdown menu demo
│   │   ├── _template.tsx         # Template for new demos
│   │   └── index.ts              # Demo exports
│   ├── showcase/                 # Showcase-specific components
│   │   ├── component-demo.tsx    # Demo container
│   │   ├── component-layout.tsx  # Component page layout
│   │   ├── code-viewer.tsx       # Code display component
│   │   └── navigation.tsx        # Component browser
│   ├── ui/                       # Reusable UI components
│   └── theme/                    # Theme components
├── data/
│   └── components.ts             # Component metadata
└── lib/
    ├── utils.ts                  # Utility functions
    └── components.ts             # Component demo mapping
```

## Adding New Components

### 1. Create UI Component

Add your component to `src/components/ui/`:

```typescript
// src/components/ui/your-component.tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface YourComponentProps {
  // ... props
}

export function YourComponent({ ...props }: YourComponentProps) {
  return (
    // ... implementation
  );
}
```

### 2. Create Demo Component

Create a demo file in `src/components/demos/`:

```typescript
// src/components/demos/your-component-demo.tsx
import { YourComponent } from "@/components/ui/your-component";

export function YourComponentDemo() {
  return (
    <div className="space-y-4">
      <YourComponent />
      {/* Add more demo variations */}
    </div>
  );
}

export const yourComponentCode = `import { YourComponent } from "@/components/ui/your-component";

export function YourComponentDemo() {
  return (
    <div className="space-y-4">
      <YourComponent />
    </div>
  );
}`;
```

### 3. Add to Demo Exports

Update `src/components/demos/index.ts`:

```typescript
// Add your export
export { YourComponentDemo, yourComponentCode } from "./your-component-demo";
```

### 4. Define Component Metadata

Add to `src/data/components.ts`:

```typescript
{
  id: "your-component",
  name: "Your Component",
  description: "Brief description of what it does",
  category: "Category Name",
  tags: ["tag1", "tag2"],
  difficulty: "beginner" | "intermediate" | "advanced"
}
```

### 5. Map Component Demo

Add to `src/lib/components.ts`:

```typescript
"your-component": {
  component: {
    // ... metadata from step 4
  },
  demo: YourComponentDemo,
  code: yourComponentCode,
}
```

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/component-showcase.git
cd component-showcase

# Install dependencies
npm install
# or
yarn install
# or
bun install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the showcase.

### Building for Production

```bash
npm run build
npm start
```

## Contributing

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-component`)
3. **Add** your component following the structure above
4. **Test** your component thoroughly
5. **Commit** your changes (`git commit -m 'Add amazing component'`)
6. **Push** to the branch (`git push origin feature/amazing-component`)
7. **Open** a Pull Request

### Guidelines

- Follow the existing code style and structure
- Ensure components are accessible and mobile-responsive
- Include comprehensive demos showing different states/variants
- Add appropriate TypeScript types
- Test on multiple browsers and devices
- Include clear, well-documented code examples

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [shadcn/ui](https://ui.shadcn.com/) for component inspiration
