"use client";

import { motion } from "framer-motion";

const nodes = [
  { top: "12%", left: "22%", size: 10, delay: 0 },
  { top: "24%", left: "70%", size: 12, delay: 0.15 },
  { top: "38%", left: "46%", size: 14, delay: 0.05 },
  { top: "55%", left: "20%", size: 9, delay: 0.2 },
  { top: "64%", left: "68%", size: 11, delay: 0.12 },
  { top: "78%", left: "42%", size: 10, delay: 0.18 },
];

const beams = [
  "left-[19%] top-[19%] w-52 rotate-[18deg]",
  "left-[35%] top-[34%] w-48 -rotate-[28deg]",
  "left-[23%] top-[58%] w-44 rotate-[15deg]",
  "left-[45%] top-[24%] w-40 rotate-[62deg]",
];

export function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-cyan-950/30"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24rem),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_18rem),linear-gradient(160deg,rgba(15,23,42,0.86),rgba(2,6,23,0.96))]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:44px_44px] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.1),transparent_50%)]" />

      <motion.div
        animate={{ rotate: [0, 4, -2, 0], y: [0, -6, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="relative mx-auto flex aspect-square max-w-[28rem] items-center justify-center"
      >
        <div className="absolute inset-[11%] rounded-[2.4rem] border border-cyan-400/20 bg-cyan-400/5 shadow-[0_0_80px_rgba(6,182,212,0.08)]" />
        <div className="absolute inset-[20%] rounded-[2rem] border border-violet-400/20 bg-violet-400/5" />
        <div className="absolute inset-[29%] rounded-[1.75rem] border border-orange-300/15 bg-orange-300/5" />

        {beams.map((beam) => (
          <motion.div
            key={beam}
            animate={{ opacity: [0.25, 0.6, 0.25] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent ${beam}`}
          />
        ))}

        {nodes.map((node) => (
          <motion.span
            key={`${node.top}-${node.left}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0.35, 1, 0.45], scale: [0.92, 1.08, 0.96] }}
            transition={{
              duration: 4.6,
              delay: node.delay,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            className="absolute rounded-full border border-cyan-300/40 bg-cyan-300/70 shadow-[0_0_22px_rgba(34,211,238,0.65)]"
            style={{ top: node.top, left: node.left, width: node.size, height: node.size }}
          />
        ))}

        <div className="absolute inset-x-[24%] top-[17%] h-[56%] rounded-[45%] border border-white/10 bg-gradient-to-b from-white/5 to-transparent blur-sm" />
        <div className="absolute inset-x-[32%] bottom-[16%] h-[18%] rounded-full border border-cyan-300/15 bg-cyan-300/10 blur-xl" />

        <div className="relative z-10 max-w-[12rem] space-y-3 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.48em] text-cyan-300/80">
            Systems Thinking
          </p>
          <h3 className="font-display text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            HP
          </h3>
          <p className="text-sm leading-6 text-slate-300">
            Interface clarity, backend logic, and infrastructure awareness in one build mindset.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
