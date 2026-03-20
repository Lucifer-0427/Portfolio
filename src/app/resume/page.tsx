import Link from "next/link";
import { githubUrl, linkedInUrl, strengths, targets } from "@/lib/site-data";

export default function ResumePage() {
  return (
    <main className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-tag">Resume</p>
        <h1>Resume-ready summary for IT support and technical support applications.</h1>
        <p className="section-copy">
          This page is designed to make your background easy to scan for hiring
          managers and recruiters.
        </p>
        <div className="hero-actions">
          <Link href="/" className="secondary-link">
            Back Home
          </Link>
          <Link href="/projects" className="primary-link">
            View Projects
          </Link>
        </div>
      </section>

      <section className="resume-layout">
        <article className="glass-card resume-card">
          <p className="section-tag">Profile</p>
          <h2>Harsh Panchal</h2>
          <p>
            Computer Programming diploma graduate focused on troubleshooting,
            technical support, and practical software problem solving. Looking
            for entry-level opportunities in IT support, help desk, service
            desk, and technical support roles.
          </p>
        </article>

        <article className="glass-card resume-card">
          <p className="section-tag">Education</p>
          <h2>Computer Programming Diploma</h2>
          <p>Graduated in 2025</p>
        </article>

        <article className="glass-card resume-card">
          <p className="section-tag">Technical Strengths</p>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="glass-card resume-card">
          <p className="section-tag">Target Roles</p>
          <ul className="bullet-list">
            {targets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="glass-card resume-card">
          <p className="section-tag">Contact</p>
          <a href="mailto:harshpanchal952@gmail.com">harshpanchal952@gmail.com</a>
          <a href="tel:6475942795">647-594-2795</a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {linkedInUrl ? (
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : (
            <span className="social-placeholder">LinkedIn URL needed</span>
          )}
        </article>
      </section>
    </main>
  );
}
