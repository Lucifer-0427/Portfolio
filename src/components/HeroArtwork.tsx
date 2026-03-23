"use client";

import { motion } from "framer-motion";
const particles = [
  { top: "9%", left: "14%", size: 8, delay: 0 },
  { top: "14%", left: "28%", size: 10, delay: 0.08 },
  { top: "24%", left: "12%", size: 6, delay: 0.14 },
  { top: "32%", left: "58%", size: 11, delay: 0.18 },
  { top: "41%", left: "70%", size: 7, delay: 0.06 },
  { top: "55%", left: "20%", size: 9, delay: 0.22 },
  { top: "68%", left: "10%", size: 7, delay: 0.16 },
  { top: "76%", left: "58%", size: 8, delay: 0.28 },
  { top: "83%", left: "37%", size: 6, delay: 0.12 },
];

const strands = [
  { className: "left-[0%] top-[70%] w-40 rotate-[16deg]", delay: 0.1 },
  { className: "left-[6%] top-[28%] w-56 rotate-[22deg]", delay: 0.2 },
  { className: "left-[16%] top-[52%] w-64 -rotate-[10deg]", delay: 0.28 },
  { className: "left-[28%] top-[20%] w-44 rotate-[68deg]", delay: 0.05 },
  { className: "left-[52%] top-[52%] w-48 -rotate-[28deg]", delay: 0.18 },
  { className: "left-[62%] top-[78%] w-36 rotate-[12deg]", delay: 0.24 },
];

export function HeroArtwork() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative isolate min-h-[20rem] overflow-hidden sm:min-h-[24rem] lg:min-h-[33rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_38%,rgba(34,211,238,0.22),transparent_18rem),radial-gradient(circle_at_58%_58%,rgba(251,146,60,0.18),transparent_16rem),radial-gradient(circle_at_46%_18%,rgba(139,92,246,0.16),transparent_16rem)]" />
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />

      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full min-h-[inherit]"
      >
        <div className="absolute inset-y-0 left-[6%] w-[72%] rounded-[2.2rem] bg-[linear-gradient(90deg,rgba(7,14,32,0.62),rgba(7,14,32,0.04))]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.05)_1px,transparent_1px)] bg-[size:44px_44px] opacity-18" />
        <div className="absolute bottom-[8%] right-[-4%] h-[34%] w-[42%] rounded-full bg-cyan-400/8 blur-3xl" />
        <div className="absolute top-[10%] left-[2%] h-[26%] w-[26%] rounded-full bg-violet-500/8 blur-3xl" />

        {strands.map((strand) => (
          <motion.div
            key={strand.className}
            animate={{ opacity: [0.15, 0.48, 0.2] }}
            transition={{ duration: 6.5, delay: strand.delay, repeat: Infinity, ease: "easeInOut" }}
            className={`absolute h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent ${strand.className}`}
          />
        ))}

        {particles.map((node) => (
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

        <svg viewBox="0 0 760 860" className="absolute inset-0 h-full w-full" aria-hidden="true">
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
              d="M122 194L198 152L306 138L402 172L470 238L520 314L546 400L532 488L486 570L450 632L405 714L330 778L244 766L178 694L136 612L102 546L78 460L84 362L96 282Z"
              fill="url(#meshFill)"
              fillOpacity="0.16"
              stroke="url(#meshStroke)"
              strokeWidth="1.4"
            />
            <path
              d="M258 182L338 180L408 226L458 294L474 360L454 434L420 486L382 528L346 560L324 618L286 646L230 644L194 584L180 500L186 418L202 340L230 274Z"
              fill="rgba(255,255,255,0.08)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.2"
            />
            <path
              d="M396 236L474 290L526 360L542 432L520 500L468 548L412 570L374 596L338 594L324 566L348 514L402 474L444 432L462 382L446 326L408 278L372 240Z"
              fill="rgba(251,146,60,0.18)"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="1.15"
            />
            <path
              d="M252 246L324 212L396 228L438 270L462 338L448 390L420 434L374 470L320 492L264 484L224 444L208 380L216 312Z"
              fill="rgba(125,211,252,0.14)"
              stroke="rgba(255,255,255,0.14)"
              strokeWidth="1.1"
            />

            {[
              [122, 194, 198, 152],
              [198, 152, 306, 138],
              [306, 138, 402, 172],
              [402, 172, 470, 238],
              [470, 238, 520, 314],
              [520, 314, 546, 400],
              [546, 400, 532, 488],
              [532, 488, 486, 570],
              [486, 570, 450, 632],
              [450, 632, 405, 714],
              [405, 714, 330, 778],
              [330, 778, 244, 766],
              [244, 766, 178, 694],
              [178, 694, 136, 612],
              [136, 612, 102, 546],
              [102, 546, 78, 460],
              [78, 460, 84, 362],
              [84, 362, 96, 282],
              [96, 282, 122, 194],
              [198, 152, 230, 274],
              [230, 274, 324, 212],
              [324, 212, 396, 236],
              [396, 236, 474, 290],
              [474, 290, 526, 360],
              [526, 360, 542, 432],
              [542, 432, 520, 500],
              [520, 500, 468, 548],
              [468, 548, 412, 570],
              [412, 570, 382, 528],
              [382, 528, 320, 492],
              [320, 492, 264, 484],
              [264, 484, 224, 444],
              [224, 444, 208, 380],
              [208, 380, 216, 312],
              [216, 312, 252, 246],
              [186, 418, 264, 484],
              [202, 340, 320, 492],
              [180, 500, 230, 644],
              [230, 644, 286, 646],
              [286, 646, 338, 594],
              [338, 594, 412, 570],
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
              [122, 194],
              [198, 152],
              [306, 138],
              [402, 172],
              [470, 238],
              [520, 314],
              [546, 400],
              [532, 488],
              [486, 570],
              [450, 632],
              [405, 714],
              [330, 778],
              [244, 766],
              [178, 694],
              [136, 612],
              [102, 546],
              [78, 460],
              [84, 362],
              [96, 282],
              [230, 274],
              [324, 212],
              [396, 236],
              [474, 290],
              [526, 360],
              [542, 432],
              [520, 500],
              [468, 548],
              [412, 570],
              [382, 528],
              [320, 492],
              [264, 484],
              [224, 444],
              [208, 380],
              [216, 312],
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

          <g opacity="0.34">
            {[
              [468, 620, 744, 702],
              [516, 570, 732, 640],
              [560, 520, 712, 594],
              [606, 484, 734, 540],
              [636, 618, 756, 664],
              [560, 666, 736, 730],
              [614, 732, 758, 786],
            ].map((line, index) => (
              <line
                key={`network-${index}`}
                x1={line[0]}
                y1={line[1]}
                x2={line[2]}
                y2={line[3]}
                stroke="rgba(125,211,252,0.28)"
                strokeWidth="1"
              />
            ))}
            {[
              [468, 620],
              [516, 570],
              [560, 520],
              [606, 484],
              [636, 618],
              [560, 666],
              [614, 732],
              [744, 702],
              [732, 640],
              [712, 594],
              [734, 540],
              [736, 730],
              [758, 786],
            ].map((point, index) => (
              <circle
                key={`network-node-${index}`}
                cx={point[0]}
                cy={point[1]}
                r={index % 3 === 0 ? 5 : 3.6}
                fill={index % 2 === 0 ? "rgba(255,244,214,0.9)" : "rgba(125,211,252,0.92)"}
              />
            ))}
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}
