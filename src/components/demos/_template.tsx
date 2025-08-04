// Template for creating new component demos
// Copy this file and rename it to your-component-name-demo.tsx

// import { YourComponent } from "@/components/ui/your-component";

export function YourComponentDemo() {
  return (
    <div className="space-y-4">
      {/* Your demo content here */}
      {/* <YourComponent /> */}
      <div className="p-4 border rounded-lg">
        <p>Your component demo goes here</p>
      </div>
    </div>
  );
}

export const yourComponentCode = `import { YourComponent } from "@/components/ui/your-component";

export function YourComponentDemo() {
  return (
    <div className="space-y-4">
      {/* Your demo content here */}
      <YourComponent />
    </div>
  );
}`;
