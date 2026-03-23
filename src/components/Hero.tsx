"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, Mail } from "lucide-react";
import { HeroArtwork } from "@/components/HeroArtwork";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-2 py-4 sm:px-4 lg:px-0 lg:py-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(56,189,248,0.12),transparent_24rem),radial-gradient(circle_at_82%_24%,rgba(139,92,246,0.08),transparent_18rem),radial-gradient(circle_at_74%_76%,rgba(249,115,22,0.08),transparent_18rem)]" />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[16%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative grid min-h-[70vh] items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <HeroArtwork />

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="space-y-7 lg:pr-8"
        >
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[11ch] font-display text-4xl font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-5xl lg:text-[4.6rem]"
          >
            Building Interfaces, Systems, and Scalable Solutions.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            Full-stack developer skilled in frontend, backend, and networking. I build
            responsive interfaces, robust backend systems, and network-aware applications.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <a
              href="mailto:harshpanchal952@gmail.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-transparent px-8 py-4 text-base font-semibold text-slate-100 transition-colors hover:border-cyan-300/40 hover:bg-white/5"
            >
              <Mail className="h-4 w-4" />
              Contact
              <ChevronDown className="h-4 w-4 opacity-70" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
