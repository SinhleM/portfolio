// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally merge Tailwind CSS classes.
 * It's a key part of the shadcn/ui setup.
 *
 * @param {ClassValue[]} inputs - An array of class names to merge.
 * @returns {string} The merged string of class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
