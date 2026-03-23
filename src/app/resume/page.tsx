import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  emailAddress,
  githubUrl,
  linkedInUrl,
  phoneNumber,
  strengths,
  targets,
} from "@/lib/site-data";

export default function ResumePage() {
  return (
    <>
      <SiteHeader active="resume" />

      <main className="page-shell page-stack">
        <section className="subpage-hero">
          <span className="eyebrow">Resume</span>
          <h1>Quick recruiter summary with the details that matter most.</h1>
          <p>
            This page keeps the signal high: background, strengths, target roles, and the kind
            of work I want to keep growing into.
          </p>
          <div className="action-row">
            <Link href="/" className="button button--secondary">
              Back Home
            </Link>
            <Link href="/projects" className="button button--primary">
              Open Projects
            </Link>
          </div>
        </section>

        <section className="resume-grid">
          <article className="editorial-card">
            <span className="section-kicker">Profile</span>
            <h2>Harsh Panchal</h2>
            <p>
              Computer Programming graduate with a strong interest in technical support,
              full-stack development, debugging, and user-aware system design. I enjoy
              practical work that improves workflows and makes software easier to trust.
            </p>
          </article>

          <article className="editorial-card editorial-card--soft">
            <span className="section-kicker">Education</span>
            <h2>Computer Programming Diploma</h2>
            <p>Graduated in 2025 and continued building portfolio projects focused on realistic workflows.</p>
          </article>

          <article className="editorial-card">
            <span className="section-kicker">Technical strengths</span>
            <ul className="plain-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="editorial-card editorial-card--soft">
            <span className="section-kicker">Target roles</span>
            <ul className="plain-list">
              {targets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="editorial-card resume-contact">
            <span className="section-kicker">Contact</span>
            <h2>Reach out directly.</h2>
            <div className="contact-links contact-links--stack">
              <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
              <a href={`tel:${phoneNumber.replace(/-/g, "")}`}>{phoneNumber}</a>
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </article>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
