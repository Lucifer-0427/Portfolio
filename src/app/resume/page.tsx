import Link from "next/link";
import { githubUrl, linkedInUrl, strengths, targets } from "@/lib/site-data";

export default function ResumePage() {
  return (
    <main className="subpage-shell terminal-theme">
      <section className="subpage-hero terminal-panel">
        <p className="terminal-label">{"// Resume.md"}</p>
        <h1>Resume-ready summary designed for quick recruiter scanning.</h1>
        <p className="section-copy">
          This page keeps the most useful information visible: your background,
          technical strengths, target roles, and contact details.
        </p>
        <div className="hero-actions">
          <Link href="/" className="secondary-link">
            Back Home
          </Link>
          <Link href="/projects" className="primary-link">
            Open Projects
          </Link>
        </div>
      </section>

      <section className="resume-layout">
        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Profile"}</p>
          <h2>Harsh Panchal</h2>
          <p>
            Computer Programming diploma graduate focused on troubleshooting,
            technical support, and practical software problem solving. Looking
            for entry-level opportunities in IT support, help desk, service
            desk, and technical support roles.
          </p>
        </article>

        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Education"}</p>
          <h2>Computer Programming Diploma</h2>
          <p>Graduated in 2025</p>
        </article>

        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Technical strengths"}</p>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Target roles"}</p>
          <ul className="bullet-list">
            {targets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Contact"}</p>
          <a href="mailto:harshpanchal952@gmail.com">harshpanchal952@gmail.com</a>
          <a href="tel:6475942795">647-594-2795</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={linkedInUrl} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </article>
      </section>
    </main>
  );
}
