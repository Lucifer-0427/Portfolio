import { Code2, Network, Server } from "lucide-react";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillGlobe } from "@/components/SkillGlobe";

const capabilityGroups = [
  {
    title: "Frontend",
    summary:
      "Responsive interfaces with strong hierarchy, reusable components, polished interactions, and clean user flows.",
    icon: Code2,
    items: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Component architecture"],
  },
  {
    title: "Backend",
    summary:
      "API design, authentication, stateful workflow logic, data persistence, and services that support real use cases.",
    icon: Server,
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "Operational business logic"],
  },
  {
    title: "Networking",
    summary:
      "Infrastructure awareness, monitoring-oriented thinking, troubleshooting habits, and network-aware app design.",
    icon: Network,
    items: ["TCP/IP fundamentals", "Connectivity debugging", "Monitoring concepts", "System awareness", "Troubleshooting mindset"],
  },
];

const skillNodes = [
  {
    label: "Next.js",
    category: "Frontend",
    accent: "rgba(244, 244, 245, 0.96)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    label: "React",
    category: "Frontend",
    accent: "rgba(96, 165, 250, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    label: "Tailwind",
    category: "Frontend",
    accent: "rgba(34, 211, 238, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    label: "TypeScript",
    category: "Frontend",
    accent: "rgba(59, 130, 246, 0.96)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    label: "JavaScript",
    category: "Frontend",
    accent: "rgba(250, 204, 21, 0.96)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    label: "Node.js",
    category: "Backend",
    accent: "rgba(74, 222, 128, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    label: "Express",
    category: "Backend",
    accent: "rgba(148, 163, 184, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    label: "MongoDB",
    category: "Database",
    accent: "rgba(52, 211, 153, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    label: "Python",
    category: "Backend",
    accent: "rgba(96, 165, 250, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    label: "C#",
    category: "Programming",
    accent: "rgba(192, 132, 252, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  {
    label: "C++",
    category: "Programming",
    accent: "rgba(129, 140, 248, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  {
    label: "C",
    category: "Programming",
    accent: "rgba(148, 163, 184, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
  {
    label: "Git",
    category: "Workflow",
    accent: "rgba(251, 146, 60, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    label: "Docker",
    category: "Infrastructure",
    accent: "rgba(56, 189, 248, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    label: "Linux",
    category: "Networking",
    accent: "rgba(250, 204, 21, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  {
    label: "Nginx",
    category: "Networking",
    accent: "rgba(74, 222, 128, 0.9)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
  },
  {
    label: "Postman",
    category: "Testing",
    accent: "rgba(251, 146, 60, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  },
  {
    label: "GitHub",
    category: "Workflow",
    accent: "rgba(244, 244, 245, 0.94)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  {
    label: "MySQL",
    category: "Database",
    accent: "rgba(56, 189, 248, 0.95)",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-4 pb-16 pt-2 sm:px-6 lg:px-8 lg:gap-24 lg:pt-2">
        <Hero />

        <section id="about" className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <SectionHeading
            eyebrow="About"
            title="Full-stack thinking with real operational awareness."
            description="I'm most interested in building complete systems. That means frontend work that feels intentional, backend logic that behaves reliably, and the kind of technical judgment that comes from understanding how the whole stack fits together."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Approach</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I like products that feel believable. Good software should not just look modern, it
                should reflect how real users, workflows, and systems actually behave.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-300">Focus</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                My strongest work sits where UI polish, backend coordination, and technical problem
                solving need to support each other instead of being treated separately.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-200">Current direction</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                I'm building public work gradually and only showcasing projects that are actually on
                GitHub. That keeps the portfolio honest and lets every case study carry real technical weight.
              </p>
            </div>
          </div>
        </section>

        <FeaturedProjects />

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Skills Globe"
            title="The interactive globe is back."
            description="You wanted to keep this piece, and I agree it adds personality without turning the portfolio into visual clutter. It now sits as a focused technical section instead of being mixed into the old theme."
          />
          <SkillGlobe skills={skillNodes} />
        </section>

        <section className="space-y-10">
          <SectionHeading
            eyebrow="Capabilities"
            title="Frontend, backend, and networking in one technical profile."
            description="I don't want the portfolio to read like I only style interfaces. The real value is being able to move between product experience, backend behavior, and systems thinking without losing coherence."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {capabilityGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
                >
                  <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{group.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="articles" className="rounded-[2rem] border border-white/10 bg-white/[0.04] px-6 py-8 sm:px-8">
          <SectionHeading
            eyebrow="Articles"
            title="Write-ups will be added as more public projects ship."
            description="I'm not filling this section with fake thought pieces. As new GitHub-backed projects go live, I'll add architecture notes, debugging write-ups, and technical breakdowns that reflect real work."
          />
        </section>

        <Footer />
      </main>
    </div>
  );
}
