"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CodeViewer } from "@/components/showcase/code-viewer";
import { ComponentDemo } from "@/components/showcase/component-demo";
import { ChevronLeft, Code, Eye } from "lucide-react";
import Link from "next/link";
import { ComponentMeta } from "@/data/components";

interface ComponentLayoutProps {
  component: ComponentMeta;
  children: React.ReactNode;
  code: string;
}

export function ComponentLayout({
  component,
  children,
  code,
}: ComponentLayoutProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/components">
                <Button variant="ghost" size="sm">
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back to Components
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold">{component.name}</h1>
                <p className="text-muted-foreground">{component.description}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowCode(!showCode)}
              className="hidden sm:flex"
            >
              {showCode ? (
                <>
                  <Eye className="h-4 w-4 mr-2" />
                  View Demo
                </>
              ) : (
                <>
                  <Code className="h-4 w-4 mr-2" />
                  View Code
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Toggle */}
      <div className="sm:hidden border-b">
        <div className="container mx-auto px-4 py-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="w-full"
          >
            {showCode ? (
              <>
                <Eye className="h-4 w-4 mr-2" />
                View Demo
              </>
            ) : (
              <>
                <Code className="h-4 w-4 mr-2" />
                View Code
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Demo Section */}
          <div className={`${showCode ? "hidden lg:block" : "block"}`}>
            <ComponentDemo component={component}>{children}</ComponentDemo>
          </div>

          {/* Code Section */}
          <div className={`${showCode ? "block" : "hidden lg:block"}`}>
            <CodeViewer code={code} />
          </div>
        </div>
      </main>
    </div>
  );
}
