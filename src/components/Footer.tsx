import { BriefcaseBusiness, FolderGit2, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer
      id="contact"
      className="rounded-[2rem] border border-white/10 bg-slate-950/70 px-6 py-8 shadow-2xl shadow-black/30 sm:px-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div className="space-y-4">
          <span className="inline-flex rounded-full border border-orange-400/20 bg-orange-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200">
            Contact
          </span>
          <h2 className="max-w-2xl font-display text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl">
            Let’s build something reliable, scalable, and user-focused.
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            I’m interested in roles and projects where thoughtful frontend work, dependable backend
            systems, and technical problem solving all matter.
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:harshpanchal952@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            harshpanchal952@gmail.com
          </a>

          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a
              href="https://github.com/Lucifer-0427"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/40 hover:bg-white/10"
            >
              <FolderGit2 className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-panchal-608b11288"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:border-cyan-300/40 hover:bg-white/10"
            >
              <BriefcaseBusiness className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-xs uppercase tracking-[0.25em] text-slate-500">
        © 2026 Harsh Panchal
      </div>
    </footer>
  );
}
