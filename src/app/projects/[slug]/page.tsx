import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProject } from "@/lib/projects";
import { resolveProject } from "@/lib/projectAssets";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Sinhle Mkhabela`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = resolveProject(slug);

  if (!project) notFound();

  return (
    <article className="container mx-auto max-w-[90%] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to projects
        </Link>

        {/* Header */}
        <div className="mb-10">
          <div className="text-sm font-mono text-muted-foreground mb-3">
            {project.index}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          {project.liveUrl && (
            <Button asChild size="sm" variant={undefined} className={undefined}>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Globe className="mr-2 h-4 w-4" /> Visit live site
              </Link>
            </Button>
          )}
          {project.repoUrl && (
            <Button asChild size="sm" variant="outline" className={undefined}>
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> View repository
              </Link>
            </Button>
          )}
        </div>

        {/* Metrics */}
        {project.metrics.length > 0 && (
          <div
            className={`grid grid-cols-2 ${
              project.metrics.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
            } gap-px bg-border border border-border mb-12`}
          >
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-background p-6 text-center">
                <div className="text-3xl md:text-4xl font-bold tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground mt-2 leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lead screenshot — first gallery shot, or the standalone image */}
        {(project.gallery?.[0] || project.imageUrl) && (
          <figure className="mb-12">
            <div className="border border-border overflow-hidden">
              <Image
                src={project.gallery?.[0]?.src ?? project.imageUrl!}
                alt={
                  project.gallery?.[0]?.alt ?? `${project.title} screenshot`
                }
                width={1900}
                height={1070}
                priority
                className="w-full h-auto"
              />
            </div>
            {project.gallery?.[0]?.caption && (
              <figcaption className="text-sm text-muted-foreground mt-3">
                {project.gallery[0].caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Narrative */}
        <div className="space-y-10 mb-12">
          {project.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="text-xl md:text-2xl font-semibold mb-3">
                {s.heading}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Remaining gallery shots */}
        {project.gallery && project.gallery.length > 1 && (
          <div className="border-t border-border pt-10 mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-6">
              Inside the product
            </h2>
            <div className="space-y-10">
              {project.gallery.slice(1).map((shot) => (
                <figure key={shot.src}>
                  <div className="border border-border overflow-hidden">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      width={1900}
                      height={1070}
                      className="w-full h-auto"
                    />
                  </div>
                  <figcaption className="text-sm text-muted-foreground mt-3">
                    {shot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* Stack */}
        <div className="border-t border-border pt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            Built with
          </h2>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
