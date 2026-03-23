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
    <section id="top" className="relative overflow-hidden px-2 pb-6 pt-3 sm:px-4 lg:px-0 lg:pb-10 lg:pt-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_28%,rgba(56,189,248,0.1),transparent_26rem),radial-gradient(circle_at_82%_22%,rgba(139,92,246,0.07),transparent_22rem),radial-gradient(circle_at_78%_74%,rgba(249,115,22,0.08),transparent_18rem)]" />
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[18%] top-[16%] h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative min-h-[76vh] overflow-hidden rounded-[2rem] border border-white/6 bg-[linear-gradient(180deg,rgba(5,8,22,0.68),rgba(5,8,22,0.34))] px-3 py-5 sm:px-4 sm:py-6 lg:min-h-[72vh] lg:px-6 lg:py-6">
        <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:gap-8 xl:grid-cols-[minmax(0,1.14fr)_minmax(26rem,0.86fr)]">
          <div className="order-2 pr-2 lg:order-1 lg:pr-4">
            <HeroArtwork />
          </div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="order-1 flex max-w-[35rem] flex-col justify-start self-start pt-3 sm:pt-5 lg:order-2 lg:pt-0"
          >
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-slate-300 sm:mb-5"
            >
              Full-stack developer
            </motion.p>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-[10.3ch] font-display text-[2.7rem] font-semibold leading-[0.94] tracking-[-0.07em] text-white sm:text-[3.6rem] lg:text-[4.2rem] xl:text-[4.7rem]"
            >
              Building Interfaces, Systems, and Scalable Solutions.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 max-w-[31rem] text-[1.02rem] leading-8 text-slate-300 sm:mt-6 sm:text-[1.12rem]"
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
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-transparent px-7 py-3.5 text-base font-semibold text-slate-100 transition-colors hover:border-cyan-300/40 hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                Contact
                <ChevronDown className="h-4 w-4 opacity-70" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
