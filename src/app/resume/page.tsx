import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";

const skillGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind CSS", "Responsive UI", "Component systems"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "REST APIs", "Authentication", "MongoDB"],
  },
  {
    title: "Additional",
    items: ["JavaScript", "TypeScript", "Python", "C#", "C++", "C", "Git", "Linux"],
  },
];

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-8 shadow-2xl shadow-black/30 sm:px-8">
          <SectionHeading
            eyebrow="Resume"
            title="Harsh Panchal"
            description="Full-stack developer interested in frontend, backend, and system-aware product building. This page is a clean portfolio-ready summary until a downloadable PDF version is added."
          />

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Toronto, ON
            </span>
            <a
              href="mailto:harshpanchal952@gmail.com"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/40 hover:text-white"
            >
              harshpanchal952@gmail.com
            </a>
            <a
              href="https://github.com/Lucifer-0427"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/40 hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-panchal-608b11288"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/40 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <SectionHeading
              eyebrow="Summary"
              title="Developer focused on complete systems."
              description="I build projects that connect interface quality, backend behavior, and real workflow logic instead of treating them as separate pieces."
            />

            <div className="mt-8 space-y-4 text-sm leading-8 text-slate-300 sm:text-base">
              <p>
                My strongest public project is IntelliGrocer, a multi-role supermarket platform with shopper,
                employee, and manager experiences connected through inventory, pricing, and operations data.
              </p>
              <p>
                I care about building software that feels believable. That means responsive UI, dependable
                backend logic, and enough systems awareness to make product behavior feel grounded in reality.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
            <SectionHeading
              eyebrow="Featured Work"
              title="Current public project"
              description="I only show work that is actually public, so this section stays honest."
            />

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                IntelliGrocer
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Multi-role supermarket operations platform with pricing approvals, inventory control,
                employee workflows, and responsive dashboards.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Next.js", "React", "Node.js", "Express", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 sm:p-8">
          <SectionHeading
            eyebrow="Skills"
            title="Core technical stack"
            description="A practical snapshot of the tools and languages I’m working with."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
