export const githubUrl = "https://github.com/Lucifer-0427";

export const linkedInUrl = "https://www.linkedin.com/in/harsh-panchal-608b11288";

export const emailAddress = "harshpanchal952@gmail.com";

export const phoneNumber = "647-594-2795";

export type Project = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  stack: string;
  highlights: string[];
  liveStatus: string;
  detail: string;
  repoUrl: string;
  liveUrl?: string;
  role: string;
  timeline: string;
  category: string;
  challenge: string;
  learning: string;
  capabilities: string[];
  accent: string;
};

export const strengths = [
  "Troubleshooting and technical problem solving",
  "Windows environment familiarity",
  "C#, JavaScript, HTML, CSS, and SQL",
  "ASP.NET Core MVC, debugging, and project delivery",
];

export const skillsUniverse = [
  {
    label: "JavaScript",
    category: "Language",
    accent: "#ffd43b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "TypeScript",
    category: "Language",
    accent: "#4dabf7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    label: "React",
    category: "Frontend",
    accent: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "C#",
    category: "Language",
    accent: "#845ef7",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    label: "Git",
    category: "Version Control",
    accent: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    label: "MySQL",
    category: "Database",
    accent: "#4dd4ac",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    label: "Java",
    category: "Language",
    accent: "#ff922b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    label: "Python",
    category: "Language",
    accent: "#ffd43b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    label: "Go",
    category: "Language",
    accent: "#74c0fc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
  },
  {
    label: "MongoDB",
    category: "Database",
    accent: "#69db7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
  },
  {
    label: "Kotlin",
    category: "Language",
    accent: "#e879f9",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
  },
  {
    label: "Redis",
    category: "Database",
    accent: "#ff6b6b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  },
];

export const projects: Project[] = [
  {
    slug: "intelligrocer-supermarket-operations-platform",
    title: "IntelliGrocer Supermarket Operations Platform",
    label: "Flagship Project",
    summary:
      "A full-stack supermarket platform with separate shopper, employee, and manager experiences built around inventory control, staffing, orders, analytics, and dynamic pricing workflow.",
    stack: "React, Node.js, Express, MongoDB, Chart.js, Axios",
    highlights: [
      "Built three connected user experiences in one system: shopper storefront, employee workspace, and manager operations dashboard.",
      "Implemented manager-approved dynamic pricing so discounts and price changes go live in the shopper experience.",
      "Connected real workflows for inventory control, task assignment, scheduling, checkout, order history, and sales reporting.",
    ],
    liveStatus: "Local demo is fully working. Best next step is a clean public repo, screenshots, and optional deployment.",
    detail:
      "IntelliGrocer is the strongest example of my full-stack and workflow design ability. Instead of building a single dashboard, I designed a supermarket platform where each role solves a different operational problem. Managers can approve pricing suggestions, update inventory, assign tasks, and review reports. Employees can track work, review schedules, and flag stock issues. Shoppers can browse products, add items to cart, place orders, and see live promotional pricing after manager approval. The project demonstrates practical business logic, role-based UI design, and tight integration between frontend workflows and backend data.",
    repoUrl: "https://github.com/Lucifer-0427/IntelliGrocer",
    role: "Lead developer",
    timeline: "2026",
    category: "Full-stack workflow platform",
    challenge:
      "The hardest part was keeping three different user experiences connected without making the logic feel fake or disconnected. Inventory changes, manager pricing approvals, staff workflows, and shopper-facing offers all needed to affect each other in believable ways.",
    learning:
      "This project sharpened my thinking around role-based systems, operational UX, and how business logic should drive interface decisions. It also pushed me to improve deployment readiness, database setup, and production-style debugging.",
    capabilities: [
      "Role-based dashboards for shopper, employee, and manager workflows",
      "Manager-approved dynamic pricing linked to shopper-facing promotions",
      "Inventory management, scheduling, task assignment, orders, and reporting",
    ],
    accent: "#3755c3",
  },
  {
    slug: "resolveit-help-desk-ticketing-system",
    title: "ResolveIT Help Desk Ticketing System",
    label: "Featured Project",
    summary:
      "A service desk dashboard designed around real internal IT workflow, from intake and triage to status tracking and resolution.",
    stack: "ASP.NET Core MVC, C#, Razor, custom CSS",
    highlights: [
      "Built a ticket flow with categories, priorities, service snapshots, and practical issue states.",
      "Modeled realistic requests like VPN instability, password resets, and device support incidents.",
    ],
    liveStatus: "Demo concept ready. Next step is a deployable web demo version.",
    detail:
      "ResolveIT is designed as a realistic internal support workflow project. The focus is on practical issue intake, categorization, triage, and status updates that feel close to an actual help desk environment. It is the strongest portfolio piece for showing workflow thinking, structured problem solving, and how software can support technical operations.",
    role: "Designer and developer",
    timeline: "2025",
    category: "Support operations system",
    challenge:
      "The challenge was making the interface feel like a real internal support tool instead of a school CRUD app. Ticket states, categories, and support context all needed to feel plausible to someone familiar with IT support.",
    learning:
      "It helped me think more clearly about operational software, issue triage, and how information hierarchy affects speed in support workflows.",
    capabilities: [
      "Ticket intake, categorization, and priority-driven workflow design",
      "Issue tracking UI shaped around practical internal IT support scenarios",
      "System-oriented interface structure with service desk style status handling",
    ],
    accent: "#506076",
    repoUrl: githubUrl,
  },
];

export const targets = [
  "IT Support Specialist",
  "Help Desk Technician",
  "Service Desk Analyst",
  "Technical Support Representative",
];

export const focusAreas = [
  "Support workflow thinking",
  "Debugging and issue triage",
  "Clear, user-friendly interfaces",
  "Practical C# project work",
];
