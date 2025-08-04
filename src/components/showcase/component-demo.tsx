import { ComponentMeta } from "@/data/components";
import { Badge } from "@/components/ui/badge";

interface ComponentDemoProps {
  component: ComponentMeta;
  children: React.ReactNode;
}

export function ComponentDemo({ component, children }: ComponentDemoProps) {
  return (
    <div className="space-y-6">
      {/* Component Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 flex-wrap">
          <Badge variant="secondary">{component.category}</Badge>
          <Badge variant="outline">{component.difficulty}</Badge>
          {component.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {/* Demo Area */}
      <div className="border rounded-lg p-8 bg-card/50 min-h-[400px] flex items-center justify-center">
        <div className="w-full max-w-md">{children}</div>
      </div>

      {/* Usage Notes */}
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">Usage</h3>
        <p className="text-sm text-muted-foreground">
          Interact with the component above to see it in action. The component
          is fully functional and demonstrates real-world usage patterns.
        </p>
      </div>
    </div>
  );
}
