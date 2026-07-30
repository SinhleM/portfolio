"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, FileText } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "certifications", label: "Certifications" },
];

export default function Header() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  // Smooth-scroll only when the target is on this page; otherwise let Next
  // route to "/#id" so the links still work from a project detail page.
  const handleScroll = (e) => {
    if (!onHome) return;
    const targetId = e.currentTarget.href.replace(/.*#/, "");
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;
    e.preventDefault();
    window.scrollTo({ top: targetElement.offsetTop, behavior: "smooth" });
  };

  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Sinhle Mkhabela</span>
          </Link>
          <nav className="hidden md:flex ml-10 space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={hrefFor(link.id)}
                onClick={handleScroll}
                className="transition-colors hover:text-foreground text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Resume Button */}
          <Button asChild size="sm" className="hidden md:flex" variant={undefined}>
            <a href="/Sinhle_Mkhabela_CV.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              Resume
            </a>
          </Button>

          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className={undefined}>
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64">
                <Link href="/" className="mb-6 flex items-center space-x-2">
                  <span className="font-bold text-lg">Sinhle Mkhabela</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.id}
                      href={hrefFor(link.id)}
                      onClick={handleScroll}
                      className="text-lg font-medium hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {/* Mobile Resume Link */}
                  <a
                    href="/Sinhle_Mkhabela_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:underline"
                  >
                    Resume
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}