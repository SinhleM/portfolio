import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" target="_blank"><Github className="w-5 h-5 text-muted-foreground hover:text-foreground" /></Link>
          <Link href="#" target="_blank"><Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" /></Link>
          <Link href="#" target="_blank"><Twitter className="w-5 h-5 text-muted-foreground hover:text-foreground" /></Link>
        </div>
      </div>
    </footer>
  );
}