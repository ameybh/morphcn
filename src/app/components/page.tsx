import { ComponentNavigation } from "@/components/showcase/navigation";

export default function ComponentsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Component Showcase</h1>
            <p className="text-muted-foreground">
              Explore and interact with our collection of UI components. Each
              component is fully functional and includes live demos with source
              code.
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <ComponentNavigation />
      </main>
    </div>
  );
}
