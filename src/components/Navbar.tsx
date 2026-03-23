"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BriefcaseBusiness, FolderGit2, Mail, Menu, X } from "lucide-react";

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
    icon: FolderGit2,
  },
  {
    href: "https://www.linkedin.com/in/harsh-panchal-608b11288",
    label: "LinkedIn",
    icon: BriefcaseBusiness,
  },
  {
    href: "mailto:harshpanchal952@gmail.com",
    label: "Email",
    icon: Mail,
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl rounded-[1.75rem] border border-white/10 bg-slate-950/55 px-4 py-4 shadow-[0_18px_60px_rgba(2,6,23,0.38)] backdrop-blur-xl sm:px-6">
        <div className="flex items-center justify-between gap-4 lg:grid lg:grid-cols-[1fr_auto_1fr]">
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {links.map((link, index) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-full px-4 py-2.5 text-[1.02rem] font-medium tracking-[0.02em] text-slate-200 transition-all hover:bg-white/5 hover:text-white ${
                index === 0 ? "border border-white/12 bg-white/[0.06] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/"
          className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_45%),linear-gradient(180deg,rgba(15,23,42,0.95),rgba(2,6,23,0.95))] font-display text-sm font-semibold tracking-[0.3em] text-white shadow-[0_8px_24px_rgba(6,182,212,0.15)] lg:justify-self-center"
          aria-label="Harsh Panchal home"
        >
          HP
        </Link>

        <div className="hidden items-center justify-end gap-4 lg:flex">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={social.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-transparent text-slate-100 transition-all hover:border-white/10 hover:bg-white/5 hover:text-cyan-200"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition-colors hover:border-cyan-300/30 lg:hidden"
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
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.href.startsWith("http") ? "_blank" : undefined}
                        rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        aria-label={social.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300"
                      >
                        <Icon className="h-4 w-4" />
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
