import fs from "node:fs";
import path from "node:path";
import { projects, getProject, type Project } from "./projects";

/**
 * Screenshots are referenced by filename before they necessarily exist on
 * disk. Resolving against /public here means a not-yet-added image falls back
 * to the placeholder instead of rendering as a broken image.
 *
 * Server-only: relies on fs, so callers must be server components.
 */
function exists(src?: string | null): boolean {
  if (!src) return false;
  const file = decodeURIComponent(src.replace(/^\//, ""));
  return fs.existsSync(path.join(process.cwd(), "public", file));
}

function resolve(project: Project): Project {
  return {
    ...project,
    imageUrl: exists(project.imageUrl) ? project.imageUrl : null,
    gallery: (project.gallery ?? []).filter((shot) => exists(shot.src)),
  };
}

export function resolveProjects(): Project[] {
  return projects.map(resolve);
}

export function resolveProject(slug: string): Project | undefined {
  const project = getProject(slug);
  return project ? resolve(project) : undefined;
}
