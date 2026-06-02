export type Article = {
  slug: string;
  title: string;
  kicker: string;
  date: string;
  readTime: string;
  summary: string;
  image: string;
  tags: string[];
  featured?: boolean;
};

export type Project = {
  title: string;
  role: string;
  summary: string;
  image: string;
  tags: string[];
  href?: string;
};

export const articles: Article[] = [
  {
    slug: "rekindle-product-design",
    title: "Rekindle and Designing User-Centric Applications",
    kicker: "Product Design",
    date: "June 2026",
    readTime: "7 min read",
    summary:
      "A product-design essay on building user-centered software for older adults, using Rekindle's calm elder display, voice navigation, family workflows, and AI translation layer as the example.",
    image: "/rekindle-product-design.svg",
    tags: ["Product design", "Accessibility", "Rekindle"],
    featured: true,
  },
  {
    slug: "agents",
    title: "Building Agentic Systems",
    kicker: "AI Engineering",
    date: "February 2026",
    readTime: "8 min read",
    summary:
      "A practical breakdown of graph-based AI agents, ephemeral memory, validation loops, and the parts that matter when moving from demos to production systems.",
    image: "/agent_workflow(2).png",
    tags: ["LangGraph", "LLMs", "Workflow design"],
    featured: true,
  },
  {
    slug: "proxmox",
    title: "Proxmox, DevOps, and Personal Cloud Environments",
    kicker: "Infrastructure",
    date: "January 2026",
    readTime: "6 min read",
    summary:
      "Notes from turning an old laptop into a personal cloud environment with Proxmox, Jenkins, VM templates, Tailscale, and self-hosted services.",
    image: "/PVE_environment.png",
    tags: ["Proxmox", "DevOps", "Homelab"],
    featured: true,
  },
];

export const projects: Project[] = [
  {
    title: "Personal Cloud Environment",
    role: "Infrastructure and automation",
    summary:
      "Self-hosted Proxmox environment with Jenkins-backed VM provisioning, service hosting, and remote access through private networking.",
    image: "/PVE_environment.png",
    tags: ["Proxmox", "Jenkins", "Tailscale"],
    href: "/writing/proxmox",
  },
  {
    title: "Agent Workflow Builder",
    role: "AI systems architecture",
    summary:
      "Agentic workflow patterns for intent parsing, document generation, validation, and tool execution using typed graph state.",
    image: "/agent_workflow(2).png",
    tags: ["Agents", "LangGraph", "Python"],
    href: "/writing/agents",
  },
  {
    title: "Portfolio Delivery Pipeline",
    role: "Deployment and operations",
    summary:
      "Portfolio deployed through a Jenkins project onto a Debian VM, keeping the site close to the infrastructure it documents.",
    image: "/Jenkins.png",
    tags: ["Next.js", "CI/CD", "Debian"],
  },
];
