"use client";

import Link from "next/link";
import { Menu, FileDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#connect", label: "Connect" },
  { href: "#certifications", label: "Certifications" },
];

const handleScroll = (e) => {
  e.preventDefault();
  const href = e.currentTarget.href;
  const targetId = href.replace(/.*#/, "");
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center space-x-2"
          >
            <span className="font-bold text-xl">Portfolio</span>
          </Link>
          <nav className="hidden md:flex ml-10 space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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
            <a href="/Sinhle Mkhabela - CV.pdf" download="Sinhle Mkhabela - CV.pdf" target="_blank" rel="noopener noreferrer">
              <FileDown className="mr-2 h-4 w-4" />
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
                <Link
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="mb-6 flex items-center space-x-2"
                >
                  <span className="font-bold text-lg">YourName</span>
                </Link>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={handleScroll}
                      className="text-lg font-medium hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {/* Mobile Resume Link */}
                  <a
                    href="/Sinhle Mkhabela - CV.pdf"
                    download="Sinhle Mkhabela - CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-primary hover:underline"
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