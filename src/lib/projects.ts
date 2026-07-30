export type Metric = { value: string; label: string };
export type Section = { heading: string; body: string };
export type Shot = { src: string; alt: string; caption: string };

export type Project = {
  slug: string;
  index: string;
  title: string;
  /** One-line outcome, used on the landing card. */
  tagline: string;
  /** Longer intro, used at the top of the detail page. */
  summary: string;
  /** Shown on the landing card as a compact proof strip. */
  highlights: string[];
  metrics: Metric[];
  sections: Section[];
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  /** Filename in /public. Null until a screenshot exists. */
  imageUrl?: string | null;
  /** Additional product shots rendered as a gallery on the detail page. */
  gallery?: Shot[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "sorae",
    index: "01",
    title: "Sorae",
    tagline:
      "Bank statement intelligence that turns a raw PDF into a lender-ready affordability decision in under three seconds.",
    summary:
      "A financial intelligence platform South African lenders use to automate affordability decisions. Built end to end, solo, from the parsing engine through the REST API to the dashboard.",
    highlights: ["5 major SA banks", "<3s to report", "95% accuracy", "NCR-aligned"],
    metrics: [
      { value: "5", label: "major SA banks parsed" },
      { value: "<3s", label: "to a full affordability report" },
      { value: "95%", label: "parsing accuracy" },
      { value: "15+", label: "risk signals surfaced" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "South African lenders vet affordability by reading bank statements by hand. It is slow, inconsistent between assessors, and the regulatory bar (NCR affordability rules) makes getting it wrong expensive.",
      },
      {
        heading: "What I built",
        body: "A platform that ingests a PDF bank statement from any of the 5 major SA banks and returns a full NCR-aligned affordability report in under 3 seconds. Parsing runs behind fail-safe routing that hard stops an unreliable parser instead of guessing at a number a credit decision depends on.",
      },
      {
        heading: "The risk engine",
        body: "A risk analysis pipeline surfaces 15+ signals a human reader would take an hour to find, including payday loan cycling, gambling activity, chronic deficit, overdraft reliance and income volatility, cutting vetting time directly.",
      },
      {
        heading: "Decisions in plain English",
        body: "A REST API and dashboard workflow drops into existing lending onboarding, and an AI decision layer (Claude Haiku 4.5) translates the financial picture into plain English for non-technical staff, with data handled under POPIA.",
      },
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "PDF Processing",
      "Claude Haiku 4.5",
      "AWS",
      "Docker",
    ],
    liveUrl: "https://sorae.co.za",
    imageUrl: "/decisionpage.png",
    gallery: [
      {
        src: "/decisionpage.png",
        alt: "Sorae affordability decision screen showing an A grade and credit officer verdict",
        caption:
          "The decision view. An affordability grade, an NCR maximum installment, and a plain-English verdict a credit officer can act on without reading the statement.",
      },
      {
        src: "/keymetricspage.png",
        alt: "Sorae key financial metrics dashboard",
        caption:
          "Headline metrics across income, expenses, balance and risk, including debt-to-income, income volatility and returned debits.",
      },
      {
        src: "/salarypage.png",
        alt: "Sorae transaction ledger with verified income markers",
        caption:
          "The transaction audit. Every figure in the report traces back to the underlying transactions, with recurring salary deposits flagged as verified income.",
      },
      {
        src: "/analysetab.png",
        alt: "Sorae statement upload screen",
        caption:
          "Where it starts: a PDF bank statement in, a full report out. Credits are only deducted on a successful analysis, never on a rejected file.",
      },
      {
        src: "/landingpage.png",
        alt: "Sorae marketing landing page",
        caption: "The product front door.",
      },
    ],
    featured: true,
  },
  {
    slug: "fraud-detection",
    index: "02",
    title: "Real-Time Fraud Detection System",
    tagline:
      "A streaming system that flags fraudulent transactions as they happen, not hours later in a batch job.",
    summary:
      "An end-to-end streaming system that scores transactions for fraud in real time, built on a medallion architecture with full ACID guarantees and an audit-ready output layer.",
    highlights: ["Real-time scoring", "ACID guarantees", "Fully containerised"],
    metrics: [
      { value: "3", label: "layer medallion architecture" },
      { value: "5min", label: "rolling velocity window per user" },
      { value: "10min", label: "watermark for late arrivals" },
    ],
    sections: [
      {
        heading: "The problem",
        body: "Fraud caught in a nightly batch is fraud caught too late. Detecting it as transactions arrive means handling out-of-order events, duplicates and schema drift without corrupting the record you later have to audit.",
      },
      {
        heading: "How it detects fraud",
        body: "The feature extraction layer scores each transaction on geo-distance jumps between consecutive purchases, device switch detection via window functions, and 5-minute rolling velocity metrics per user, producing the feature set a downstream ML model scores against.",
      },
      {
        heading: "Keeping the data trustworthy",
        body: "A Bronze/Silver/Gold medallion architecture on Delta Lake gives full ACID guarantees. A 10-minute watermark absorbs late-arriving events, with schema enforcement and transaction deduplication so the Gold layer stays audit-ready rather than merely populated.",
      },
      {
        heading: "Running it reliably",
        body: "The whole system is containerised with Docker Compose using deterministic startup ordering (Zookeeper to Kafka to Spark) to eliminate cold-start race conditions, with live monitoring surfaced through a Streamlit dashboard.",
      },
    ],
    stack: [
      "Python",
      "Apache Kafka",
      "Apache Spark",
      "Delta Lake",
      "Docker",
      "Streamlit",
    ],
    repoUrl: "https://github.com/SinhleM/fraud-detection-pipeline",
    imageUrl: "/Screenshot 2026-02-26 112539.png",
  },
  {
    slug: "github-activity-dashboard",
    index: "03",
    title: "GitHub Activity Dashboard",
    tagline:
      "A dashboard that turns raw GitHub API data into a readable view of where development time actually goes.",
    summary:
      "A tool for tracking commit and contribution activity across repositories, built to answer where effort is actually being spent rather than where it feels like it is.",
    highlights: ["Live GitHub API", "Contribution tracking"],
    metrics: [],
    sections: [
      {
        heading: "What it does",
        body: "Pulls commit and contribution activity across repositories through the GitHub API and presents it as a single view of development activity over time, making patterns visible that are invisible commit by commit.",
      },
      {
        heading: "How it is built",
        body: "A FastAPI backend handles API access and aggregation with Pandas, refreshed on a schedule through GitHub Actions so the dashboard reflects current activity without manual triggering.",
      },
    ],
    stack: ["Python", "FastAPI", "Pandas", "GitHub Actions"],
    repoUrl: "https://github.com/SinhleM/github-activity-tracker",
    imageUrl: "/cropped-localhost_5173_(1600 X 900).png",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
