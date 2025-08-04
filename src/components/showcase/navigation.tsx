"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter } from "lucide-react";
import Link from "next/link";
import { components, categories } from "@/data/components";

export function ComponentNavigation() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "all" || component.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("all")}
          >
            All
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredComponents.map((component) => (
          <Link key={component.id} href={`/components/${component.id}`}>
            <div className="group border rounded-lg p-4 hover:border-primary/50 transition-colors cursor-pointer">
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {component.name}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {component.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {component.description}
                </p>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {component.category}
                  </Badge>
                  <div className="flex gap-1">
                    {component.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {component.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{component.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No components found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}
