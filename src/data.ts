// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Sinhle Mkhabela",
  role: "AI Engineer",
  roles: ["AI Engineer", "Fintech Founder", "Full Stack Engineer"],
  location: "Pretoria, South Africa",
  email: "Sinhlemkhabela01@gmail.com",
  phone: "+27 73 986 9091",
  bio: "AI engineer and solo founder building production fintech systems end to end. I own the full SDLC and focus on systems that solve real operational problems. I'm looking to bring that same ownership to a team.",
  available: true,
  links: {
    github: "https://github.com/SinhleM",
    linkedin: "https://www.linkedin.com/in/sinhle-mkhabela-0b6812345/",
    resume: "", // add /resume.pdf to the public folder, then set this to "/resume.pdf"
  },
};

export type Project = {
  name: string;
  tag: string;
  summary: string;
  points: string[];
  stack: string[];
  link?: string;
  repo?: string;
  image?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    name: "Sorae",
    tag: "Fintech SaaS · Founder",
    summary:
      "Bank statement intelligence for lenders. Parses statements from South Africa's 5 major banks into an NCR-aligned affordability report.",
    points: [
      "Full affordability report in under 3 seconds with 95% parsing accuracy",
      "15+ risk signals: payday loans, gambling, chronic deficit, overdraft reliance, income volatility",
      "Fail-safe routing hard-stops unreliable parsers instead of guessing",
      "AI layer explains financial data in plain English, built around POPIA",
    ],
    stack: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Claude Haiku 4.5"],
    link: "https://sorae.co.za",
    image: "/sorae.png",
  },
  {
    name: "Entry",
    tag: "AI · Customs",
    summary:
      "The AI copilot for South African customs clearing. Turns shipment documents into a checked worksheet and SAD 509 data, so declarants clear more entries with less retyping and full traceability.",
    points: [],
    stack: ["Next.js", "TypeScript", "LLMs", "PostgreSQL"],
    image: "/Entry.png",
    status: "Building",
  },
  {
    name: "TenderFill",
    tag: "AI · GovTech",
    summary:
      "Reads a tender with South African suppliers and contractors, flags what could get a bid disqualified (an expired certificate, a missing form, a briefing you can't miss) and helps fix it before the closing date.",
    points: [],
    stack: ["Next.js", "TypeScript", "LLMs", "RAG"],
    image: "/TenderFill.png",
    status: "Building",
  },
  {
    name: "Supplier Risk Agent",
    tag: "AI Agent · MCP",
    summary:
      "An AI agent for South African B2B contracts. A custom MCP server exposes four tools (news, CIPC, financials, risk scoring); the LLM orchestrates the calls and returns a structured risk brief.",
    points: [
      "Custom MCP server with 4 tools: news, CIPC lookups, financials, risk scoring",
      "LLM decides which tools to call and composes a structured brief",
      "FastAPI backend with a Streamlit front end",
    ],
    stack: ["MCP", "AI Agents", "FastAPI", "Streamlit", "Python"],
    repo: "https://github.com/SinhleM/supplier-risk-agent",
  },
  {
    name: "Procurement Intelligence",
    tag: "RAG · LLM",
    summary:
      "A RAG-powered procurement assistant. Upload contracts, invoices and supplier documents, then ask questions in plain English. Every answer cites its source.",
    points: [
      "Retrieval over contracts, invoices and supplier docs with pgvector",
      "sentence-transformers embeddings, Groq-hosted LLM for answers",
      "Every answer cites the exact source document",
    ],
    stack: ["RAG", "FastAPI", "PostgreSQL", "LLMs", "Python"],
    repo: "https://github.com/SinhleM/porcurement-intelligence",
  },
  {
    name: "Real-Time Fraud Detection Pipeline",
    tag: "AI · Streaming ML",
    summary:
      "Streaming pipeline for financial transactions with a Bronze/Silver/Gold medallion architecture and ACID guarantees via Delta Lake.",
    points: [
      "Fraud features: geo-distance, device-switch detection, 5-minute rolling velocity per user",
      "10-minute watermark for late data, schema enforcement and deduplication",
      "Docker Compose orchestration (Zookeeper → Kafka → Spark) with a Streamlit dashboard",
    ],
    stack: ["Kafka", "Spark", "Delta Lake", "Docker", "Streamlit"],
    repo: "https://github.com/SinhleM/streaming-fraud-detection-lakehouse",
  },
];

export const experience = [
  {
    role: "Founder & Engineer",
    company: "Sorae",
    period: "Feb 2026 – Present",
    location: "Pretoria (Remote)",
    link: "https://sorae.co.za",
    skills: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Claude Code"],
    detail:
      "Designed and built the platform end to end: parsing engine, risk pipeline, REST API, dashboard and AI decision layer.",
  },
  {
    role: "Full Stack Developer (Client Project)",
    company: "Omnia Truck and Trailer",
    period: "Jul 2025 – Nov 2025",
    location: "South Africa",
    link: "",
    skills: ["PHP", "MySQL", "Agile", "AI Chatbot"],
    detail:
      "Agile team of 5 building a platform that digitises client data capture and quotation workflows. Built the MySQL/PHP backend and an FAQ-grounded AI chatbot that cut manual staff responses.",
  },
  {
    role: "BSc Computer Science",
    company: "Eduvos",
    period: "2023 – 2026",
    location: "Pretoria",
    link: "https://www.eduvos.com",
    skills: ["C#", "Databases", "AI Techniques"],
    detail:
      "Database Systems, Systems Analysis & Design, AI Techniques, OOP (C#), IT Project Management, 4IR Technologies.",
  },
];

export const skills: Record<string, string[]> = {
  "Software Engineering": ["Python", "TypeScript", "SQL", "React", "Next.js", "FastAPI"],
  "AI & Data": ["LLMs", "AI Agents", "RAG", "MCP", "Claude Code", "Prompt Engineering", "Kafka", "Spark", "Delta Lake", "ETL"],
  "Cloud & Infra": ["AWS", "Docker", "PostgreSQL", "RabbitMQ", "CI/CD"],
  Practices: ["Agile", "Git", "Unit Testing", "Integration Testing", "Regulatory System Design"],
};

export const certifications = [
  { name: "AWS Cloud Practitioner Essentials", issuer: "AWS", link: "" },
  { name: "Python for Data Science, AI & Development", issuer: "IBM", link: "" },
  { name: "Introduction to Data Engineering", issuer: "IBM", link: "" },
  { name: "Programming with JavaScript", issuer: "Meta", link: "" },
];
