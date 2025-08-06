import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
        <p className="text-sm text-muted-foreground ml-8">
          &copy; {new Date().getFullYear()} Sinhle Mkhabela. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            sinhlemkhabela01@gmail.com
          </span>
          <Link href="mailto:sinhlemkhabela01@gmail.com">
            <Mail className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://github.com/SinhleM" target="_blank">
            <Github className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </Link>
          <Link href="https://www.linkedin.com/in/sinhle-mkhabela-0b6812345/" target="_blank">
            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
