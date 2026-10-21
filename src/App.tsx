import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import {
  ArrowUpRight, Award, Briefcase, ChevronLeft, ChevronRight, FileDown, Github, Globe, GraduationCap,
  Linkedin, Mail, MapPin, Phone, Rocket, Sparkles,
} from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import contrib from "./contributions.json";
import { certifications, experience, profile, projects, skills } from "./data";
import { IssuerLogo, TechIcon, techUrl } from "./icons";
import { H, Mountains, PEAKS, W } from "./Mountains";

const spring = { type: "spring", stiffness: 300, damping: 30 } as const;

/* Scroll reveal: IntersectionObserver adds .in, CSS does the motion */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- shared pieces ---------- */
function Tip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="group/tip relative inline-flex">
      {children}
      <span className="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-zinc-900 px-2 py-1 text-[11px] font-medium text-zinc-100 opacity-0 shadow-lg transition duration-200 group-hover/tip:translate-y-0 group-hover/tip:opacity-100">
        {label}
      </span>
    </span>
  );
}

function Heading({ label, title, icon, right }: { label: string; title: string; icon: ReactNode; right?: ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <p className="label gap-1.5">{icon}{label}</p>
        <h2 className="title">{title}</h2>
      </div>
      {right}
    </div>
  );
}

function Block({ id, children }: { id?: string; children: ReactNode }) {
  return <section id={id} data-reveal className="frame px-3 py-12 sm:px-5">{children}</section>;
}

/* Original illustration: developer at a desk with an AI chat on screen */
function DeskArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 140" className={className} fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="42" y="16" width="76" height="48" rx="4" fill="var(--screen)" stroke="var(--ink)" strokeWidth="2" />
      <rect x="50" y="24" width="34" height="7" rx="3.5" fill="#a78bfa" opacity=".75" />
      <rect x="70" y="35" width="40" height="7" rx="3.5" fill="#f59e0b" opacity=".6" />
      <rect x="50" y="46" width="28" height="7" rx="3.5" fill="#a78bfa" opacity=".75" />
      <circle cx="104" cy="54" r="1.6" fill="var(--ink)" className="blink" />
      <path d="M80 64v9" stroke="var(--ink)" strokeWidth="2" />
      <ellipse cx="80" cy="45" rx="12" ry="13" fill="var(--ink)" />
      <path d="M67 43a13 13 0 0 1 26 0" stroke="#8b5cf6" strokeWidth="3" />
      <rect x="64" y="40" width="5" height="9" rx="2" fill="#8b5cf6" /><rect x="91" y="40" width="5" height="9" rx="2" fill="#8b5cf6" />
      <path d="M61 88c0-17 8-28 19-28s19 11 19 28v6H61z" fill="var(--shirt)" stroke="var(--ink)" strokeWidth="2" />
      <path d="M26 94h108" stroke="#a16207" strokeWidth="4" />
      <path d="M34 94v40M126 94v40M70 102v32M90 102v32M64 102h32" stroke="var(--muted)" strokeWidth="2" />
      <path d="M118 94v-9h9v9" stroke="var(--muted)" strokeWidth="1.6" /><path d="M120 85c-1-6 2-9 3-11 1 3 4 5 2 11" stroke="#16a34a" strokeWidth="1.6" />
      <rect x="30" y="86" width="16" height="8" rx="1" stroke="var(--muted)" strokeWidth="1.6" />
    </svg>
  );
}

/* ---------- top bar ---------- */
function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 10);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 glass ${scrolled ? "scrolled" : ""}`}>
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4">
        <a href="#top" className="flex items-center gap-2 text-sm font-bold">
          <img src="/favicon-192.png" alt="" className="h-8 w-8 object-contain" />
          <span className={`transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`}>{profile.name}</span>
        </a>
        <nav className="flex items-center gap-1 text-sm font-semibold text-[var(--muted)]">
          {["career", "projects", "contact"].map((s) => (
            <a key={s} href={`#${s}`} className="hidden rounded-md px-2.5 py-1.5 capitalize transition hover:bg-[var(--soft)] hover:text-[var(--fg)] sm:block">{s}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */
function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span key={i} initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: "-100%", opacity: 0 }} transition={spring}
          className="whitespace-nowrap font-semibold text-[var(--fg)]">
          {profile.roles[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const socials = [
  { label: "LinkedIn", href: profile.links.linkedin, Icon: Linkedin, tip: "Connect on LinkedIn" },
  { label: "GitHub", href: profile.links.github, Icon: Github, tip: "See my code" },
  { label: "Sorae", href: "https://sorae.co.za", Icon: Rocket, tip: "sorae.co.za" },
  { label: "Email", href: `mailto:${profile.email}`, Icon: Mail, tip: profile.email },
];

function Hero() {
  return (
    <section id="top" className="pt-14">
      <div className="frame banner relative flex h-60 items-center justify-center overflow-hidden">
        {/* TEMP: your image. Swap back to <DeskArt className="up h-36 sm:h-44" /> to compare */}
        <img src="/hero.png" alt="" className="up h-48 sm:h-56 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]" />
      </div>
      <div className="frame px-3 pb-8 pt-7 sm:px-5">
        <h1 className="up text-4xl font-extrabold tracking-tight sm:text-[2.75rem]" style={{ animationDelay: ".05s" }}>{profile.name}</h1>
        <p className="up mt-2 text-lg text-[var(--muted)] sm:text-xl" style={{ animationDelay: ".15s" }}>{profile.roles.join(" • ")}</p>
        <div className="up mt-5 flex flex-wrap items-center gap-2.5" style={{ animationDelay: ".25s" }}>
          <a href="#contact" className="key"><Briefcase size={14} />Available for Hire</a>
          <span className="text-sm text-[var(--muted)]">or</span>
          <a href={`mailto:${profile.email}?subject=Hello%20Sinhle`} className="key"><Mail size={14} />Email Me</a>
        </div>
        <p className="up mt-7 text-lg leading-[2.3rem] tracking-wide text-[var(--muted)] sm:text-xl" style={{ animationDelay: ".35s" }}>
          <Sparkles size={16} className="mr-1 inline text-violet-500" />
          Currently an <RotatingRole /> building{" "}
          <a href="https://sorae.co.za" target="_blank" rel="noreferrer" className="shine-btn">Sorae <ArrowUpRight size={15} /></a>{" "}
          — AI-powered bank statement intelligence for South African lenders.
        </p>
        <p className="up mt-3 flex items-center gap-1.5 text-sm text-[var(--muted)]" style={{ animationDelay: ".4s" }}>
          <MapPin size={14} /> {profile.location}
        </p>
      </div>
      <div className="frame flex flex-wrap justify-center gap-x-7 gap-y-3 border-y border-[var(--line)] py-3.5 text-sm font-semibold text-[var(--muted)]">
        {socials.map(({ label, href, Icon, tip }) => (
          <Tip key={label} label={tip}>
            <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 transition hover:-translate-y-0.5 hover:text-[var(--fg)]">
              <Icon size={18} /><span className="hidden sm:inline">{label}</span>
            </a>
          </Tip>
        ))}
      </div>
    </section>
  );
}

/* ---------- career on the mountains ---------- */
// Layout (px): box height, mountain height, resting heights of the small labels
const BOX = 400;
const MTN = 250;
const restTop = [118, 92, 128];
const anchor = ["-30px", "-50%", "calc(-100% + 30px)"]; // left / centre / right aligned on their peak
const CYCLE = 5000;

function Career() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % experience.length), CYCLE);
    return () => clearTimeout(t);
  }, [active, paused]);

  const peakTop = (i: number) => BOX - MTN + (PEAKS[i].y / H) * MTN;
  const peakLeft = (i: number) => `${(PEAKS[i].x / W) * 100}%`;

  return (
    <Block id="career">
      <Heading
        label="So Far"
        title="Career"
        icon={<Briefcase size={12} />}
        right={profile.links.resume ? (
          <div className="flex items-center gap-3 text-sm text-[var(--muted)]">
            <span className="hidden sm:inline">Need a copy?</span>
            <a href={profile.links.resume} className="key"><FileDown size={14} />Resume</a>
          </div>
        ) : undefined}
      />

      <div className="relative mt-6" style={{ height: BOX }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div className="absolute inset-x-0 bottom-0" style={{ height: MTN }}><Mountains /></div>

        {experience.map((x, i) => {
          const on = active === i;
          const top = on ? 16 : restTop[i];
          const Logo = x.company === "Eduvos" ? GraduationCap : Briefcase;
          return (
            <div key={x.company}>
              <span className={`career-line ${on ? "on" : ""}`} style={{ left: peakLeft(i), top: top + 16, height: peakTop(i) - top - 16 }} />
              <button
                onClick={() => setActive(i)}
                aria-expanded={on}
                aria-label={`${x.company}, ${x.role}`}
                className={`career-card ${on ? "on" : ""}`}
                style={{ left: peakLeft(i), top, transform: `translateX(${anchor[i]})` }}
              >
                <span className="flex items-center gap-3">
                  <Logo size={on ? 20 : 14} className="shrink-0 text-[var(--fg)]" />
                  <span className="min-w-0 text-left">
                    <span className={`flex items-center gap-2 font-semibold ${on ? "text-[13px]" : "text-xs"}`}>
                      <span className="truncate">{x.company}</span>
                      {on && x.link && (
                        <a href={x.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} aria-label="Website" className="text-[var(--muted)] hover:text-[var(--fg)]"><Globe size={14} /></a>
                      )}
                      {on && (
                        <a href={profile.links.linkedin} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} aria-label="LinkedIn" className="text-[var(--muted)] hover:text-[var(--fg)]"><Linkedin size={13} /></a>
                      )}
                    </span>
                    {on && <span className="pop block text-[13px] font-semibold text-[var(--muted)]">{x.role}</span>}
                  </span>
                </span>
                {on && (
                  <span className="pop mt-1 block whitespace-nowrap text-left text-[13px] font-semibold text-[var(--muted)]">
                    {x.period} • {x.location}
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>
    </Block>
  );
}

/* ---------- skills ---------- */
function Skills() {
  return (
    <Block>
      <Heading label="Core" title="Skills" icon={<Sparkles size={12} />} />
      <div className="mt-6 space-y-5">
        {Object.entries(skills).map(([group, list]) => (
          <div key={group}>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">{group}</p>
            <div className="flex flex-wrap gap-1.5">
              {list.map((s) => (
                techUrl[s]
                  ? <a key={s} href={techUrl[s]} target="_blank" rel="noreferrer" title={`Open ${s}`} className="chip group hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50"><TechIcon name={s} />{s}<ArrowUpRight size={11} className="-ml-0.5 text-[var(--muted)] opacity-0 transition group-hover:opacity-100" /></a>
                  : <span key={s} className="chip"><TechIcon name={s} />{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
}

/* ---------- projects slider ---------- */
const gradients = ["bg-[#DBEAFB]"];

function ProjectPreview({ name, points, image }: { name: string; points: string[]; image?: string }) {
  if (image) {
    return (
      <div className="flex h-full flex-col bg-white">
        <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-50 px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-3 truncate rounded bg-white px-2 py-0.5 font-mono text-[10px] text-zinc-500 ring-1 ring-zinc-200">{name.toLowerCase().replace(/[^a-z]/g, "")}.co.za</span>
        </div>
        <img src={image} alt={`${name} screenshot`} draggable={false} className="min-h-0 w-full flex-1 object-cover object-top" />
      </div>
    );
  }
  return (
    <div className="flex h-full flex-col bg-zinc-50 text-zinc-700">
      <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-white px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" /><span className="h-2.5 w-2.5 rounded-full bg-amber-400" /><span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
        <span className="ml-3 truncate rounded bg-zinc-100 px-2 py-0.5 font-mono text-[10px] text-zinc-500">{name.toLowerCase().replace(/[^a-z]/g, "")}.app</span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-4 pb-32 sm:gap-2.5 sm:p-6 sm:pb-36">
        {points.length ? points.slice(0, 3).map((p, i) => (
          <motion.div key={p} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 + i * 0.08 }}
            className="flex items-start gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-[11px] shadow-sm sm:text-xs">
            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />{p}
          </motion.div>
        )) : <p className="m-auto font-hand text-3xl text-zinc-400">coming soon…</p>}
      </div>
    </div>
  );
}

function Projects() {
  const [[i, dir], set] = useState<[number, number]>([0, 1]);
  const p = projects[i];
  const go = (d: number) => set(([v]) => [(v + d + projects.length) % projects.length, d]);
  return (
    <Block id="projects">
      <Heading label="Featured" title="Projects" icon={<Rocket size={12} />} />
      <div className={`relative mt-6 aspect-[4/4.2] overflow-hidden rounded-2xl p-5 sm:aspect-[16/11] sm:p-12 ${gradients[i % gradients.length]}`}>
                <AnimatePresence mode="popLayout" custom={dir} initial={false}>
          <motion.div
            key={p.name}
            custom={dir}
            variants={{
              enter: (d: number) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0, scale: 0.92, rotate: d > 0 ? 2 : -2 }),
              center: { x: 0, opacity: 1, scale: 1, rotate: 0 },
              exit: (d: number) => ({ x: d > 0 ? "-60%" : "60%", opacity: 0, scale: 0.92, rotate: d > 0 ? -2 : 2 }),
            }}
            initial="enter" animate="center" exit="exit" transition={spring}
            drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.25}
            onDragEnd={(_, info) => { if (info.offset.x < -60) go(1); else if (info.offset.x > 60) go(-1); }}
            className="relative h-full w-full cursor-grab overflow-hidden rounded-xl bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,.45)] active:cursor-grabbing"
          >
            <ProjectPreview name={p.name} points={p.points} image={p.image} />
            <div className="absolute inset-x-0 bottom-0 border-t border-white/20 bg-zinc-950/85 p-4 text-white backdrop-blur-xl sm:p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-xl font-bold sm:text-2xl">{p.name}</h3>
                <span className="shrink-0 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-0.5 text-[10px] font-semibold">{p.status ?? p.tag}</span>
              </div>
              <p className="mt-1 line-clamp-2 text-xs text-white/80 sm:text-sm">{p.summary}</p>
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {p.stack.map((s) => <span key={s} className="flex items-center gap-1 rounded bg-white/15 px-1.5 py-0.5 text-[10px]"><TechIcon name={s} size={10} />{s}</span>)}
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" onPointerDown={(e) => e.stopPropagation()} className="ml-auto flex items-center gap-1 text-xs font-semibold underline-offset-2 hover:underline"><Github size={13} />Code</a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" onPointerDown={(e) => e.stopPropagation()} className={`${p.repo ? "" : "ml-auto "}flex items-center gap-1 text-xs font-semibold underline-offset-2 hover:underline`}><Globe size={13} />Website</a>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => go(-1)} aria-label="Previous project" className="navbtn left-2 sm:left-3"><ChevronLeft size={20} /></button>
        <button onClick={() => go(1)} aria-label="Next project" className="navbtn right-2 sm:right-3"><ChevronRight size={20} /></button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {projects.map((x, n) => (
          <button key={x.name} onClick={() => set([n, n > i ? 1 : -1])} aria-label={`Go to ${x.name}`}
            className={`h-2.5 rounded-full border border-[var(--muted)] transition-all duration-300 ${n === i ? "w-6 bg-[var(--muted)]" : "w-2.5"}`} />
        ))}
      </div>
    </Block>
  );
}

/* ---------- GitHub graph: snapshot from scripts/fetch-contributions.mjs, refreshed live when possible ---------- */
type Day = { date: string; count: number; level: number };
function Contributions() {
  const [data, setData] = useState<{ total: number; days: Day[] }>(contrib);
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://github-contributions-api.jogruber.de/v4/${contrib.user}?y=last`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((j: { total: Record<string, number>; contributions: Day[] }) => {
        if (j.contributions?.length) setData({ total: j.total.lastYear ?? Object.values(j.total)[0], days: j.contributions });
      })
      .catch(() => { /* keep snapshot */ });
    return () => ctrl.abort();
  }, []);

  const { weeks, months } = useMemo(() => {
    const days = data.days;
    const pad = new Date(days[0].date).getDay();
    const cells: (Day | null)[] = [...Array(pad).fill(null), ...days];
    const weeks: (Day | null)[][] = [];
    for (let k = 0; k < cells.length; k += 7) weeks.push(cells.slice(k, k + 7));
    const months: { label: string; col: number }[] = [];
    weeks.forEach((w, col) => {
      const d = w.find(Boolean);
      if (!d) return;
      const label = new Date(d.date).toLocaleString("en", { month: "short" });
      if (months[months.length - 1]?.label !== label) months.push({ label, col });
    });
    return { weeks, months: months.filter((m, k) => k === 0 || m.col - months[k - 1].col >= 3) };
  }, [data]);

  return (
    <Block>
      <Heading label="Contributions" title="GitHub" icon={<Github size={12} />} />
      <div className="mt-6 overflow-x-auto pb-2">
        <div className="relative mb-1.5 h-3 w-max text-[10px] text-[var(--muted)]" style={{ width: weeks.length * 13 }}>
          {months.map((m) => <span key={m.label + m.col} className="absolute" style={{ left: m.col * 13 }}>{m.label}</span>)}
        </div>
        <div className="flex w-max gap-[3px]">
          {weeks.map((w, k) => (
            <div key={k} className="flex flex-col gap-[3px]">
              {w.map((d, j) => d
                ? <span key={j} title={`${d.count} contribution${d.count === 1 ? "" : "s"} on ${d.date}`} className={`gh l${d.level} h-[10px] w-[10px] rounded-[2px] transition hover:scale-125`} />
                : <span key={j} className="h-[10px] w-[10px]" />)}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)]">
        <span><b className="text-[var(--fg)]">{data.total}</b> contributions in the last year on{" "}
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="font-semibold text-[var(--fg)] underline underline-offset-2">GitHub</a></span>
        <span className="flex items-center gap-1">Less {[0, 1, 2, 3, 4].map((l) => <span key={l} className={`gh l${l} h-[10px] w-[10px] rounded-[2px]`} />)} More</span>
      </div>
    </Block>
  );
}

/* ---------- certifications ---------- */
function Certs() {
  return (
    <Block>
      <Heading label="Paper of" title="Certifications" icon={<Award size={12} />} />
      <div className="mt-6 divide-y divide-[var(--line)]">
        {certifications.map((c) => (
          <a key={c.name} href={c.link || undefined} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-lg px-2 py-4 transition hover:bg-[var(--soft)]">
            <IssuerLogo issuer={c.issuer} />
            <div className="flex-1">
              <p className="text-sm font-semibold">{c.name}</p>
              <p className="text-xs text-[var(--muted)]">@ {c.issuer}</p>
            </div>
            <ArrowUpRight size={16} className="text-[var(--muted)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--fg)]" />
          </a>
        ))}
      </div>
    </Block>
  );
}

/* ---------- footer ---------- */
function Footer() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch { /* ignore */ }
  };
  return (
    <footer id="contact" data-reveal className="frame px-3 pt-14 sm:px-5">
      <div className="flex flex-col items-center gap-6 sm:flex-row">
        <img src="/hero.png" alt="" className="h-32" />
        <div className="w-full border-[var(--line)] text-center sm:border-l sm:pl-6 sm:text-left">
          <p className="label justify-center sm:justify-start">Socials</p>
          <div className="mt-2 flex justify-center gap-3 text-[var(--muted)] sm:justify-start">
            {socials.map(({ label, href, Icon }) => (
              <Tip key={label} label={label}><a href={href} target="_blank" rel="noreferrer" aria-label={label} className="transition hover:-translate-y-0.5 hover:text-[var(--fg)]"><Icon size={18} /></a></Tip>
            ))}
          </div>
          <p className="mt-2 text-xs text-[var(--muted)]">{profile.roles.join(" • ")}</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2 sm:justify-start">
            <a href={`mailto:${profile.email}`} className="key"><Mail size={14} />Let's Talk</a>
            <button onClick={copy} className="key">{copied ? "Copied ✓" : "Copy email"}</button>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="key"><Phone size={14} />Call</a>
          </div>
        </div>
      </div>
      <p className="bigname mt-12 select-none text-center text-[23vw] font-extrabold leading-none tracking-tighter sm:text-[10.5rem]">Sinhle</p>
    </footer>
  );
}

/* ---------- app ---------- */
export default function App() {

  // Smooth scrolling (skipped for reduced-motion users)
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.1, anchors: true });
    let id = 0;
    const raf = (t: number) => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); };
  }, []);

  useReveal();


  return (
    <>
      <div className="ripples" aria-hidden><span /><span /><span /></div>
      <TopBar />
      <main className="mx-auto max-w-3xl overflow-x-clip px-2 sm:px-0">
        <Hero />
        <Career />
        <Skills />
        <Projects />
        <Contributions />
        <Certs />
        <Footer />
      </main>
    </>
  );
}
