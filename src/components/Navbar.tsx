"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#top", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#articles", label: "Articles" },
];

const socials = [
  {
    href: "https://github.com/Lucifer-0427",
    label: "GitHub",
    mark: "GH",
  },
  {
    href: "https://www.linkedin.com/in/harsh-panchal-608b11288",
    label: "LinkedIn",
    mark: "in",
  },
  {
    href: "https://x.com",
    label: "Twitter",
    mark: "X",
  },
  {
    href: "mailto:harshpanchal952@gmail.com",
    label: "Email",
    mark: "@",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-4 pt-5 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl border-b border-white/8 bg-[linear-gradient(180deg,rgba(5,8,22,0.62),rgba(5,8,22,0.18))] px-1 pb-3 backdrop-blur-md">
        <div className="relative flex items-center justify-between gap-4">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            {links.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`relative pb-2 text-[1.02rem] font-medium tracking-[0.01em] text-slate-200 transition-colors hover:text-white ${
                  index === 0 ? "text-white" : ""
                }`}
              >
                {link.label}
                {index === 0 ? (
                  <span className="absolute inset-x-0 -bottom-px h-px bg-white/85" />
                ) : null}
              </Link>
            ))}
          </nav>

          <Link
            href="/"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-display text-sm font-semibold tracking-[0.28em] text-white lg:absolute lg:left-1/2 lg:-translate-x-1/2"
            aria-label="Harsh Panchal home"
          >
            HP
          </Link>

          <div className="hidden items-center gap-3 lg:flex">
            {socials.map((social) => {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={social.label}
                  className="inline-flex h-9 min-w-9 items-center justify-center rounded-full border border-white/8 bg-white/[0.03] px-2 text-[0.72rem] font-semibold tracking-[0.08em] text-slate-100 transition-all hover:-translate-y-0.5 hover:border-cyan-300/30 hover:text-cyan-200"
                >
                  {social.mark}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors hover:border-cyan-300/30 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-white/10 pt-4 lg:hidden"
            >
              <div className="space-y-5 pb-2">
                <nav className="grid gap-2">
                  {links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="flex flex-wrap gap-3">
                  {socials.map((social) => {
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.label}
                        className="inline-flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 text-xs font-semibold tracking-[0.08em] text-slate-300"
                      >
                        {social.mark}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
