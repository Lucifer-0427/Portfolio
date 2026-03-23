"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, FileText, FolderGit2, Globe, RadioTower } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

const statusStyles: Record<Project["status"], string> = {
  Live: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  "In Progress": "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  Private: "border-violet-400/20 bg-violet-400/10 text-violet-300",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 shadow-[0_24px_80px_rgba(2,6,23,0.45)]"
    >
      <div className={`relative isolate h-48 overflow-hidden bg-gradient-to-br ${project.accent.from} ${project.accent.via} ${project.accent.to}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.22),transparent_22rem)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:26px_26px] opacity-50" />
        <div className="absolute inset-0 flex items-end justify-between p-5">
          <div className="space-y-3">
            <span className="inline-flex rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90">
              {project.category}
            </span>
            <div className="flex items-center gap-3 text-white/85">
              <RadioTower className="h-5 w-5" />
              <span className="text-sm font-medium">Case study ready</span>
            </div>
          </div>
          <div className={`rounded-full border border-white/10 bg-black/20 p-3 text-white shadow-xl ${project.accent.glow}`}>
            <FileText className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-white">
            {project.title}
          </h3>
          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[project.status]}`}>
            {project.status}
          </span>
        </div>

        <p className="text-sm leading-7 text-slate-300">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-3 pt-2 sm:grid-cols-3">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
          >
            <FileText className="h-4 w-4" />
            View Case Study
          </Link>

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
            >
              <Globe className="h-4 w-4" />
              Live Demo
            </a>
          ) : null}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-300/40 hover:bg-white/10"
          >
            <FolderGit2 className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors group-hover:text-cyan-200">
          <span>Open project details</span>
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </motion.article>
  );
}
