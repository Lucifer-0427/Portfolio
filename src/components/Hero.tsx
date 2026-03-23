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
    <section id="top" className="relative overflow-hidden px-2 pb-3 pt-4 sm:px-4 lg:px-0 lg:pb-6 lg:pt-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(56,189,248,0.12),transparent_24rem),radial-gradient(circle_at_82%_24%,rgba(139,92,246,0.08),transparent_18rem),radial-gradient(circle_at_74%_76%,rgba(249,115,22,0.08),transparent_18rem)]" />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[16%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(7,10,26,0.78),rgba(3,7,18,0.62))] px-4 py-6 shadow-[0_24px_90px_rgba(2,6,23,0.34)] sm:px-6 sm:py-7 lg:px-8 lg:py-8">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-20" />
        <div className="relative grid items-start gap-8 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] lg:gap-10 xl:grid-cols-[minmax(0,1.06fr)_minmax(26rem,0.94fr)]">
          <div className="order-2 lg:order-1">
            <HeroArtwork />
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="order-1 flex max-w-[36rem] flex-col justify-start self-start pt-2 sm:pt-4 lg:order-2 lg:pt-8 xl:pt-10"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-cyan-300 sm:mb-5"
            >
              Full-stack developer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[10.5ch] font-display text-[2.7rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-[3.55rem] lg:text-[4.35rem] xl:text-[4.75rem]"
            >
              Building Interfaces, Systems, and Scalable Solutions.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[33rem] text-[1.02rem] leading-8 text-slate-300 sm:mt-6 sm:text-lg"
            >
              Full-stack developer skilled in frontend, backend, and networking. I build
              responsive interfaces, robust backend systems, and network-aware applications.
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap gap-3.5 sm:mt-8"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-base font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
              >
                View Projects
              </Link>
              <a
                href="mailto:harshpanchal952@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/[0.03] px-7 py-3.5 text-base font-semibold text-slate-100 transition-colors hover:border-cyan-300/40 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                Contact
                <ChevronDown className="h-4 w-4 opacity-70" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 flex flex-wrap gap-3 text-sm text-slate-400 sm:mt-8"
            >
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                Frontend
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                Backend
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">
                Networking
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
