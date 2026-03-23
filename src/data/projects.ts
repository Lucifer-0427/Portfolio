export type ProjectCategory = "Frontend" | "Backend" | "Full Stack" | "Networking";

export type ProjectStatus = "Live" | "In Progress" | "Private";

export type Project = {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  status: ProjectStatus;
  techStack: string[];
  image: string;
  liveUrl?: string;
  githubUrl: string;
  featured: boolean;
  features: string[];
  architecture: string[];
  challenges: string[];
  role: string;
  year: string;
  overview: string[];
  previews: Array<{
    title: string;
    description: string;
  }>;
  accent: {
    from: string;
    via: string;
    to: string;
    glow: string;
  };
};

export const projectCategories: Array<ProjectCategory | "All"> = [
  "All",
  "Frontend",
  "Backend",
  "Full Stack",
  "Networking",
];

export const projects: Project[] = [
  {
    slug: "intelligrocer",
    title: "IntelliGrocer",
    description:
      "A multi-role supermarket operations platform with shopper, employee, and manager workflows connected through inventory, pricing, tasks, and reporting.",
    fullDescription:
      "IntelliGrocer is a full-stack supermarket platform built to show how connected systems should behave when different users depend on the same operational data. Shoppers browse products, place orders, and see approved offers. Employees manage tasks, schedules, and shelf activity. Managers control inventory, pricing recommendations, staffing, and reports from one coordinated system.",
    category: "Full Stack",
    status: "In Progress",
    techStack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: "/projects/intelligrocer.svg",
    githubUrl: "https://github.com/Lucifer-0427/IntelliGrocer",
    featured: true,
    features: [
      "Role-based dashboards for shopper, employee, and manager experiences",
      "Manager-approved pricing recommendations that flow into the shopper UI",
      "Inventory editing, task assignment, schedule visibility, and order management",
      "Responsive layouts that work across desktop and phone views",
    ],
    architecture: [
      "Role-based React frontend with dedicated dashboard flows",
      "Express API layer handling auth, inventory, pricing, scheduling, and orders",
      "MongoDB collections shared across shopper, employee, and manager workflows",
      "Pricing logic that evaluates stock, demand, and expiry pressure before manager approval",
    ],
    challenges: [
      "Keeping shopper-facing offers, inventory counts, and manager actions synchronized without fake disconnected logic",
      "Designing three dashboards that felt consistent but still matched each user's job",
      "Improving pricing behavior so approved changes would not immediately loop into opposite recommendations",
    ],
    role: "Full-stack developer",
    year: "2026",
    overview: [
      "I built IntelliGrocer to show more than UI polish. The goal was to model a believable retail system where multiple users affect the same data in different ways.",
      "The strongest part of the project is the workflow connection: a manager can approve a price change, inventory can shift, and the shopper experience updates with the live offer instead of pretending the systems are separate.",
    ],
    previews: [
      {
        title: "Shopper Experience",
        description: "Product browsing, offers, category browsing, cart flow, and order tracking.",
      },
      {
        title: "Employee Workspace",
        description: "Task management, schedule visibility, stock checks, and cleaner mobile-first operational layouts.",
      },
      {
        title: "Manager Operations",
        description: "Inventory control, pricing approvals, reports, and full oversight of store workflows.",
      },
    ],
    accent: {
      from: "from-cyan-400/80",
      via: "via-blue-500/70",
      to: "to-violet-500/70",
      glow: "shadow-cyan-500/20",
    },
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
