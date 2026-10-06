import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Home } from "@/components/home";
import { WORK, getProject } from "@/lib/work";

// Shareable link to a project: the home page, rendered with that project already open
export const dynamicParams = false;

export function generateStaticParams() {
  return WORK.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: `${project.name} — Christian Lund`, description: project.summary };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  if (!getProject(params.slug)) notFound();
  return <Home />;
}
