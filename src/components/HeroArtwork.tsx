"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate min-h-[19rem] overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,28,0.82),rgba(4,7,18,0.56))] shadow-[0_30px_90px_rgba(2,6,23,0.42)] sm:min-h-[23rem] lg:min-h-[31rem]"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_22%_46%,rgba(56,189,248,0.18),transparent_17rem),radial-gradient(circle_at_44%_66%,rgba(249,115,22,0.14),transparent_15rem),radial-gradient(circle_at_38%_18%,rgba(139,92,246,0.14),transparent_16rem)]" />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/6" />
      <div className="absolute left-[8%] top-[18%] h-44 w-44 rounded-full bg-cyan-400/12 blur-[80px]" />
      <div className="absolute left-[22%] bottom-[14%] h-36 w-36 rounded-full bg-orange-400/10 blur-[70px]" />
      <div className="absolute left-[12%] top-[8%] h-24 w-24 rounded-full bg-violet-400/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0">
          <Image
            src="/hero-art-final.png"
            alt="Abstract digital portrait used as the portfolio hero artwork"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-left-center opacity-[0.98]"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_48%,rgba(56,189,248,0.06),transparent_15rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.02),rgba(5,8,22,0)_18%,rgba(5,8,22,0)_54%,rgba(5,8,22,0.52)_74%,rgba(5,8,22,0.94)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.12),rgba(5,8,22,0)_24%,rgba(5,8,22,0)_76%,rgba(5,8,22,0.28))]" />
    </motion.div>
  );
}
