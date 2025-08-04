import { notFound } from "next/navigation";
import { ComponentLayout } from "@/components/showcase/component-layout";
import { getComponentDemo } from "@/lib/components";

interface ComponentPageProps {
  params: Promise<{
    component: string;
  }>;
}

export default async function ComponentPage({ params }: ComponentPageProps) {
  const { component } = await params;
  const demo = getComponentDemo(component);

  if (!demo) {
    notFound();
  }

  const DemoComponent = demo.demo;

  return (
    <ComponentLayout component={demo.component} code={demo.code}>
      <DemoComponent />
    </ComponentLayout>
  );
}
