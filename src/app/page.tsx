import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Eye, Palette } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Component Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of reusable UI components with live demos and
            source code. Perfect for developers looking to understand and
            implement modern web interfaces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/components">
              <Button size="lg" className="group">
                Browse Components
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Eye className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Live Demos</h3>
            <p className="text-muted-foreground">
              Interact with components in real-time to see how they behave and
              respond to user input.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Source Code</h3>
            <p className="text-muted-foreground">
              View the implementation details with syntax highlighting and
              copy-to-clipboard functionality.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Palette className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold">Modern Design</h3>
            <p className="text-muted-foreground">
              Built with modern design principles and accessible patterns for
              production-ready components.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
