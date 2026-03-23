"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate min-h-[20rem] overflow-hidden rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(8,12,28,0.86),rgba(4,7,18,0.68))] shadow-[0_30px_90px_rgba(2,6,23,0.42)] sm:min-h-[24rem] lg:min-h-[33rem]"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_18%_40%,rgba(56,189,248,0.14),transparent_18rem),radial-gradient(circle_at_58%_60%,rgba(249,115,22,0.12),transparent_16rem),radial-gradient(circle_at_52%_20%,rgba(139,92,246,0.12),transparent_16rem)]" />
      <div className="absolute inset-[1px] rounded-[calc(2rem-1px)] border border-white/6" />
      <div className="absolute inset-x-[6%] bottom-[7%] h-20 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-[8%] top-[10%] h-24 w-24 rounded-full bg-violet-400/10 blur-3xl" />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/hero-art-final.png"
          alt="Abstract digital portrait used as the portfolio hero artwork"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-left-center opacity-[0.98]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0.06),rgba(5,8,22,0)_28%,rgba(5,8,22,0)_72%,rgba(5,8,22,0.12))]" />
    </motion.div>
  );
}
