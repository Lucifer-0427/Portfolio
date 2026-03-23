import Link from "next/link";
import { githubUrl, linkedInUrl } from "@/lib/site-data";

type SiteHeaderProps = {
  active?: "home" | "projects" | "resume";
};

export function SiteHeader({ active = "home" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="page-shell site-header__inner">
        <div className="site-brand">
          <Link href="/" className="site-brand__name">
            Harsh Panchal
          </Link>
          <p className="site-brand__status">
            Software Developer / IT Support / Full Stack Learner
          </p>
        </div>

        <nav className="site-nav" aria-label="Primary">
          <Link href="/" className={active === "home" ? "is-active" : undefined}>
            Home
          </Link>
          <Link href="/projects" className={active === "projects" ? "is-active" : undefined}>
            Projects
          </Link>
          <Link href="/resume" className={active === "resume" ? "is-active" : undefined}>
            Resume
          </Link>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:harshpanchal952@gmail.com" className="site-nav__cta">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
