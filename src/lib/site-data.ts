export const githubUrl = "https://github.com/Lucifer-0427";

export const linkedInUrl = "https://www.linkedin.com/in/harsh-panchal-608b11288";

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
    repoUrl: githubUrl,
  },
  {
    slug: "supermarket-website-dynamic-pricing",
    title: "Supermarket Website with Dynamic Pricing",
    label: "Business Logic",
    summary:
      "A retail-focused website that adapts product pricing through business rules, showing practical problem solving beyond static web pages.",
    stack: "JavaScript, HTML, CSS, web logic design",
    highlights: [
      "Focused on conditional pricing behavior and product management scenarios.",
      "Strengthened full-stack thinking, testing habits, and logic design under real-world style constraints.",
    ],
    liveStatus: "Project summary available for portfolio review.",
    detail:
      "This project focuses on conditional logic and pricing behavior rather than just presentation. It shows how product pricing can change based on rules and scenarios, which makes it a good example of business-focused web development. The project highlights reasoning, testing, and building interfaces that respond to underlying logic.",
    repoUrl: githubUrl,
  },
  {
    slug: "space-fighter-game",
    title: "Space Fighter Game",
    label: "Programming Depth",
    summary:
      "A fast-paced C# game project that demonstrates event-driven programming, gameplay systems, and iterative debugging.",
    stack: "C#, MonoGame, collision systems, gameplay loops",
    highlights: [
      "Implemented movement, enemy behavior, collision handling, and score tracking.",
      "Used repeated testing and debugging to improve responsiveness, logic, and game feel.",
    ],
    liveStatus: "Desktop-style project highlighted through portfolio case study.",
    detail:
      "The space fighter game is a programming-focused project built to sharpen logic, systems design, and debugging. It brings together movement, collisions, enemy patterns, and scoring into a complete gameplay loop. It also shows comfort with iteration, because game feel improves through repeated tuning and fixes.",
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
