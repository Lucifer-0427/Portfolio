"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { HeroArtwork } from "@/components/HeroArtwork";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-slate-950/60 px-6 py-8 shadow-2xl shadow-black/30 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(56,189,248,0.12),transparent_26rem),radial-gradient(circle_at_85%_20%,rgba(139,92,246,0.1),transparent_22rem),radial-gradient(circle_at_85%_82%,rgba(249,115,22,0.08),transparent_16rem)]" />
      <motion.div
        animate={{ opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-8 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <HeroArtwork />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="space-y-6"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300"
          >
            Full-Stack Developer
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl font-display text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl"
          >
            Building Interfaces, Systems, and Scalable Solutions.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Full-stack developer skilled in frontend, backend, and networking. I build
            responsive interfaces, robust backend systems, and network-aware applications.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:harshpanchal952@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-cyan-300/40 hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 sm:grid-cols-3"
          >
            {[
              ["Frontend", "Responsive UI, design systems, motion, and component architecture"],
              ["Backend", "API logic, auth, stateful workflows, and data coordination"],
              ["Networking", "Troubleshooting mindset, systems awareness, and infrastructure thinking"],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">{title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{copy}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
