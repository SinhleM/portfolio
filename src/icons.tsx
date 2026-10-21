import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import {
  SiApachekafka, SiApachespark, SiClaude, SiDocker, SiFastapi, SiGit, SiGithubactions, SiLangchain,
  SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPython, SiRabbitmq, SiReact, SiStreamlit, SiTypescript,
} from "react-icons/si";
import {
  Bot, Brain, Database, FlaskConical, GitBranch, Layers, MessageSquare, Network, Plug, Scale, Sparkles,
  TestTube2, Users, Workflow, Code2, GraduationCap,
} from "lucide-react";

type Tech = { Icon: IconType | typeof Bot; color: string };

/** Logo + brand colour for each skill name used in data.ts */
export const tech: Record<string, Tech> = {
  Python: { Icon: SiPython, color: "#3776ab" },
  TypeScript: { Icon: SiTypescript, color: "#3178c6" },
  SQL: { Icon: Database, color: "#f59e0b" },
  React: { Icon: SiReact, color: "#0ea5e9" },
  "Next.js": { Icon: SiNextdotjs, color: "currentColor" },
  FastAPI: { Icon: SiFastapi, color: "#009688" },
  LLMs: { Icon: Brain, color: "#a855f7" },
  "AI Agents": { Icon: Bot, color: "#8b5cf6" },
  RAG: { Icon: Layers, color: "#ec4899" },
  MCP: { Icon: Plug, color: "#6366f1" },
  "Claude Code": { Icon: SiClaude, color: "#d97757" },
  "Prompt Engineering": { Icon: Sparkles, color: "#eab308" },
  Kafka: { Icon: SiApachekafka, color: "currentColor" },
  Spark: { Icon: SiApachespark, color: "#e25a1c" },
  "Delta Lake": { Icon: Network, color: "#00add4" },
  ETL: { Icon: Workflow, color: "#14b8a6" },
  AWS: { Icon: FaAws, color: "#ff9900" },
  Docker: { Icon: SiDocker, color: "#2496ed" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  RabbitMQ: { Icon: SiRabbitmq, color: "#ff6600" },
  "CI/CD": { Icon: SiGithubactions, color: "#2088ff" },
  Agile: { Icon: Users, color: "#22c55e" },
  Git: { Icon: SiGit, color: "#f05032" },
  "Unit Testing": { Icon: TestTube2, color: "#84cc16" },
  "Integration Testing": { Icon: FlaskConical, color: "#06b6d4" },
  "Regulatory System Design": { Icon: Scale, color: "#64748b" },
  PHP: { Icon: SiPhp, color: "#777bb4" },
  MySQL: { Icon: SiMysql, color: "#4479a1" },
  "AI Chatbot": { Icon: MessageSquare, color: "#8b5cf6" },
  "C#": { Icon: Code2, color: "#68217a" },
  Databases: { Icon: Database, color: "#f59e0b" },
  "AI Techniques": { Icon: Brain, color: "#a855f7" },
  Streamlit: { Icon: SiStreamlit, color: "#ff4b4b" },
  LangChain: { Icon: SiLangchain, color: "#1c3c3c" },
  "Claude Haiku 4.5": { Icon: SiClaude, color: "#d97757" },
  "Branching": { Icon: GitBranch, color: "#f05032" },
  Education: { Icon: GraduationCap, color: "#6366f1" },
};

export function TechIcon({ name, size = 13 }: { name: string; size?: number }) {
  const t = tech[name];
  if (!t) return <span className="inline-block h-2 w-2 rounded-full bg-zinc-400" />;
  const { Icon, color } = t;
  return <Icon size={size} style={{ color }} aria-hidden />;
}

/** Official site for each skill. Concepts without one simply aren't links. */
export const techUrl: Record<string, string> = {
  Python: "https://www.python.org/",
  TypeScript: "https://www.typescriptlang.org/",
  SQL: "https://en.wikipedia.org/wiki/SQL",
  React: "https://react.dev/",
  "Next.js": "https://nextjs.org/",
  FastAPI: "https://fastapi.tiangolo.com/",
  LLMs: "https://en.wikipedia.org/wiki/Large_language_model",
  "AI Agents": "https://www.anthropic.com/research/building-effective-agents",
  RAG: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
  MCP: "https://modelcontextprotocol.io/",
  "Claude Code": "https://www.anthropic.com/claude-code",
  "Prompt Engineering": "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
  Kafka: "https://kafka.apache.org/",
  Spark: "https://spark.apache.org/",
  "Delta Lake": "https://delta.io/",
  ETL: "https://en.wikipedia.org/wiki/Extract,_transform,_load",
  AWS: "https://aws.amazon.com/",
  Docker: "https://www.docker.com/",
  PostgreSQL: "https://www.postgresql.org/",
  RabbitMQ: "https://www.rabbitmq.com/",
  "CI/CD": "https://github.com/features/actions",
  Agile: "https://agilemanifesto.org/",
  Git: "https://git-scm.com/",
};

/** Issuer logo tile for the certifications list */
export function IssuerLogo({ issuer }: { issuer: string }) {
  const base = "grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[var(--line)] bg-white shadow-sm";
  if (issuer === "AWS") return <span className={base}><FaAws size={24} color="#232f3e" aria-label="AWS" /></span>;
  if (issuer === "Meta") return <span className={base}><SiMeta size={22} color="#0467df" aria-label="Meta" /></span>;
  if (issuer === "IBM")
    return (
      <span className={base} aria-label="IBM">
        <span className="text-[13px] font-black tracking-tight text-[#0f62fe]">IBM</span>
      </span>
    );
  return <span className={`${base} text-xs font-bold`}>{issuer.slice(0, 2)}</span>;
}
