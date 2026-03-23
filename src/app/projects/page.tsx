"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projectCategories, projects } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<(typeof projectCategories)[number]>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <section className="rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-8 shadow-2xl shadow-black/30 sm:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Case studies built around real public work."
            description="This page lists only projects that are actually public on GitHub. As more repositories go live, this grid can grow without changing the design system."
          />
        </section>

        <section className="space-y-8">
          <div className="flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={[
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  activeFilter === category
                    ? "border-cyan-300/40 bg-cyan-400/10 text-cyan-200"
                    : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white",
                ].join(" ")}
              >
                {category}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid gap-6"
            >
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)
              ) : (
                <div className="rounded-[1.75rem] border border-dashed border-white/15 bg-white/[0.03] p-8 text-center">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
                    More public work is coming.
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    I’m keeping the portfolio honest, so categories without a public GitHub-backed
                    project stay empty until there is real work to show.
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </section>

        <Footer />
      </main>
    </div>
  );
}
