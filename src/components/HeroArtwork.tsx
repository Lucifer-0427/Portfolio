"use client";

import { motion } from "framer-motion";

const nodes = [
  { top: "14%", left: "18%", size: 9, delay: 0 },
  { top: "22%", left: "31%", size: 12, delay: 0.08 },
  { top: "28%", left: "55%", size: 10, delay: 0.15 },
  { top: "35%", left: "68%", size: 13, delay: 0.05 },
  { top: "47%", left: "45%", size: 11, delay: 0.2 },
  { top: "58%", left: "22%", size: 8, delay: 0.12 },
  { top: "67%", left: "63%", size: 10, delay: 0.18 },
  { top: "79%", left: "36%", size: 9, delay: 0.24 },
];

const beams = [
  "left-[8%] top-[22%] w-48 rotate-[18deg]",
  "left-[22%] top-[38%] w-56 -rotate-[18deg]",
  "left-[18%] top-[60%] w-44 rotate-[26deg]",
  "left-[38%] top-[24%] w-52 rotate-[58deg]",
  "left-[52%] top-[46%] w-40 -rotate-[34deg]",
];

export function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate min-h-[21rem] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.92))] p-2 shadow-[0_28px_80px_rgba(2,6,23,0.42)] sm:min-h-[24rem] lg:min-h-[30rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_34%,rgba(34,211,238,0.18),transparent_18rem),radial-gradient(circle_at_58%_48%,rgba(251,146,60,0.14),transparent_16rem),radial-gradient(circle_at_44%_20%,rgba(139,92,246,0.14),transparent_15rem)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_55%)]" />
      <div className="absolute inset-[1.1rem] rounded-[1.5rem] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full min-h-[inherit]"
      >
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:42px_42px] opacity-28" />
        <div className="absolute bottom-[10%] right-[-6%] h-[28%] w-[48%] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute top-[8%] left-[6%] h-[20%] w-[22%] rounded-full bg-violet-500/10 blur-3xl" />

        {beams.map((beam) => (
          <motion.div
            key={beam}
            animate={{ opacity: [0.15, 0.48, 0.2] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent ${beam}`}
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
            className="absolute rounded-full border border-cyan-200/40 bg-cyan-200/80 shadow-[0_0_24px_rgba(125,211,252,0.65)]"
            style={{ top: node.top, left: node.left, width: node.size, height: node.size }}
          />
        ))}

        <svg viewBox="0 0 700 780" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <defs>
            <linearGradient id="meshFill" x1="10%" y1="5%" x2="90%" y2="85%">
              <stop offset="0%" stopColor="rgba(125,211,252,0.95)" />
              <stop offset="38%" stopColor="rgba(96,165,250,0.75)" />
              <stop offset="62%" stopColor="rgba(251,146,60,0.72)" />
              <stop offset="100%" stopColor="rgba(251,191,36,0.42)" />
            </linearGradient>
            <linearGradient id="meshStroke" x1="20%" y1="10%" x2="80%" y2="80%">
              <stop offset="0%" stopColor="rgba(125,211,252,0.85)" />
              <stop offset="55%" stopColor="rgba(192,132,252,0.55)" />
              <stop offset="100%" stopColor="rgba(251,146,60,0.65)" />
            </linearGradient>
            <filter id="meshGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="14" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#meshGlow)" opacity="0.92">
            <path
              d="M162 172L232 134L326 128L405 156L456 219L493 278L514 358L503 436L468 506L432 558L397 630L330 687L255 678L196 622L166 548L127 502L106 423L115 340L136 254Z"
              fill="url(#meshFill)"
              fillOpacity="0.2"
              stroke="url(#meshStroke)"
              strokeWidth="1.4"
            />
            <path
              d="M282 164L339 168L401 212L441 268L452 324L435 382L408 421L373 449L340 470L322 518L291 538L243 536L219 495L206 429L210 370L221 310L246 258L266 210Z"
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.2"
            />
            <path
              d="M398 214L462 258L500 316L511 371L496 430L450 472L404 491L374 508L345 508L334 487L349 452L390 424L428 395L443 356L429 312L397 276L368 236Z"
              fill="rgba(251,146,60,0.18)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.15"
            />
            <path
              d="M268 220L324 196L387 208L422 242L440 296L432 336L409 369L367 395L324 412L276 404L247 374L238 328L245 279Z"
              fill="rgba(125,211,252,0.14)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1.1"
            />

            {[
              [162, 172, 232, 134],
              [232, 134, 326, 128],
              [326, 128, 405, 156],
              [405, 156, 456, 219],
              [456, 219, 493, 278],
              [493, 278, 514, 358],
              [514, 358, 503, 436],
              [503, 436, 468, 506],
              [468, 506, 432, 558],
              [432, 558, 397, 630],
              [397, 630, 330, 687],
              [330, 687, 255, 678],
              [255, 678, 196, 622],
              [196, 622, 166, 548],
              [166, 548, 127, 502],
              [127, 502, 106, 423],
              [106, 423, 115, 340],
              [115, 340, 136, 254],
              [136, 254, 162, 172],
              [232, 134, 266, 210],
              [266, 210, 324, 196],
              [324, 196, 398, 214],
              [398, 214, 462, 258],
              [462, 258, 500, 316],
              [500, 316, 511, 371],
              [511, 371, 496, 430],
              [496, 430, 450, 472],
              [450, 472, 404, 491],
              [404, 491, 373, 449],
              [373, 449, 324, 412],
              [324, 412, 276, 404],
              [276, 404, 247, 374],
              [247, 374, 238, 328],
              [238, 328, 245, 279],
              [245, 279, 268, 220],
              [210, 370, 278, 404],
              [221, 310, 324, 412],
              [206, 429, 243, 536],
              [243, 536, 291, 538],
              [291, 538, 345, 508],
              [345, 508, 404, 491],
            ].map((line, index) => (
              <line
                key={index}
                x1={line[0]}
                y1={line[1]}
                x2={line[2]}
                y2={line[3]}
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="1"
              />
            ))}

            {[
              [162, 172],
              [232, 134],
              [326, 128],
              [405, 156],
              [456, 219],
              [493, 278],
              [514, 358],
              [503, 436],
              [468, 506],
              [432, 558],
              [397, 630],
              [330, 687],
              [255, 678],
              [196, 622],
              [166, 548],
              [127, 502],
              [106, 423],
              [115, 340],
              [136, 254],
              [266, 210],
              [324, 196],
              [398, 214],
              [462, 258],
              [500, 316],
              [511, 371],
              [496, 430],
              [450, 472],
              [404, 491],
              [373, 449],
              [324, 412],
              [276, 404],
              [247, 374],
              [238, 328],
              [245, 279],
            ].map((point, index) => (
              <circle
                key={index}
                cx={point[0]}
                cy={point[1]}
                r={index % 4 === 0 ? 5 : 3}
                fill={index % 3 === 0 ? "rgba(125,211,252,0.95)" : "rgba(255,244,214,0.88)"}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
