"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate min-h-[20rem] overflow-hidden rounded-[2.25rem] sm:min-h-[24rem] lg:min-h-[34rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_48%,rgba(56,189,248,0.22),transparent_17rem),radial-gradient(circle_at_40%_68%,rgba(249,115,22,0.16),transparent_15rem),radial-gradient(circle_at_34%_22%,rgba(139,92,246,0.16),transparent_16rem)]" />
      <div className="absolute left-[8%] top-[18%] h-52 w-52 rounded-full bg-cyan-400/14 blur-[92px]" />
      <div className="absolute left-[18%] bottom-[12%] h-40 w-40 rounded-full bg-orange-400/12 blur-[78px]" />
      <div className="absolute left-[14%] top-[8%] h-28 w-28 rounded-full bg-violet-400/10 blur-[52px]" />
      <div className="absolute inset-[0.5rem] rounded-[1.8rem] border border-white/[0.04]" />

      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-y-0 left-[-8%] w-[118%] sm:left-[-6%] sm:w-[114%] lg:left-[-4%] lg:w-[110%]"
          style={{
            WebkitMaskImage:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.08) 100%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 86%, rgba(0,0,0,0.45) 100%)",
            maskImage:
              "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 54%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,0.08) 100%), linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 86%, rgba(0,0,0,0.45) 100%)",
          }}
        >
          <Image
            src="/hero-art-final.png"
            alt="Abstract digital portrait used as the portfolio hero artwork"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-left-center opacity-[0.99]"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_48%,rgba(56,189,248,0.08),transparent_16rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,22,0)_0%,rgba(5,8,22,0)_44%,rgba(5,8,22,0.28)_64%,rgba(5,8,22,0.78)_84%,rgba(5,8,22,0.96)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.16),rgba(5,8,22,0)_18%,rgba(5,8,22,0)_80%,rgba(5,8,22,0.24)_100%)]" />
    </motion.div>
  );
}
