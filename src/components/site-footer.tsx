import Link from "next/link";
import { githubUrl, linkedInUrl } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__inner">
        <div>
          <p className="site-footer__name">Harsh Panchal</p>
          <p className="site-footer__copy">
            Portfolio focused on practical systems, cleaner interfaces, and polished project storytelling.
          </p>
        </div>

        <div className="site-footer__links">
          <Link href="/projects">Projects</Link>
          <Link href="/resume">Resume</Link>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="mailto:harshpanchal952@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
