import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ArrowLeft, Download, ExternalLink, Mail } from "lucide-react";
import { profile } from "./data";
import "./index.css";

const fileName = profile.links.cv.split("/").pop();

function Resume() {
  return (
    <div className="min-h-screen">
      <header className="glass scrolled fixed inset-x-0 top-0 z-40">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between gap-3 px-4">
          <a href="/" className="flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--fg)]">
            <ArrowLeft size={16} /><span>Back<span className="hidden sm:inline"> to portfolio</span></span>
          </a>
          <div className="flex items-center gap-2">
            <a href={profile.links.cv} target="_blank" rel="noreferrer" className="ghost-btn hidden sm:inline-flex"><ExternalLink size={14} />Open</a>
            <a href={profile.links.cv} download={fileName} className="ghost-btn"><Download size={14} />Download</a>
          </div>
        </div>
      </header>

      <main className="frame mx-auto max-w-4xl px-3 pb-10 pt-20 sm:px-5">
        <div className="up flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="label">Resume</p>
            <h1 className="title">{profile.name}</h1>
            <p className="text-sm text-[var(--muted)]">{profile.role} · {profile.location}</p>
          </div>
          <a href={`mailto:${profile.email}`} className="key"><Mail size={14} />Get in touch</a>
        </div>

        <div className="up card mt-6 overflow-hidden" style={{ animationDelay: ".1s" }}>
          <object data={`${profile.links.cv}#view=FitH`} type="application/pdf" className="block h-[calc(100vh-13rem)] min-h-[520px] w-full">
            {/* shown where the browser can't display PDFs inline (most phones) */}
            <div className="flex flex-col items-center gap-4 px-6 py-16 text-center">
              <p className="text-sm text-[var(--muted)]">Your browser can't show the PDF here.</p>
              <div className="flex gap-2">
                <a href={profile.links.cv} target="_blank" rel="noreferrer" className="ghost-btn"><ExternalLink size={14} />Open PDF</a>
                <a href={profile.links.cv} download={fileName} className="ghost-btn"><Download size={14} />Download</a>
              </div>
            </div>
          </object>
        </div>
      </main>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Resume />
  </StrictMode>
);
