import Link from "next/link";
import { VantaClouds } from "@/components/vanta-clouds";
import {
  focusAreas,
  githubUrl,
  linkedInUrl,
  projects,
  strengths,
  targets,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <main className="portfolio-shell">
        <VantaClouds />
        <header className="top-nav">
          <Link href="/" className="brand-lockup">
            Harsh Panchal
          </Link>
          <nav className="top-nav__links">
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {linkedInUrl ? (
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            ) : (
              <a href="#contact">LinkedIn</a>
            )}
          </nav>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Harsh Panchal</p>
            <h1>Entry-level IT support energy with a developer&apos;s mindset.</h1>
            <p className="lede">
              I build practical software that reflects how people actually ask
              for help, use systems, and solve day-to-day technical problems. My
              goal is to bring calm troubleshooting, strong communication, and
              hands-on technical thinking into an IT support role.
            </p>

            <div className="hero-actions">
              <Link href="/projects" className="primary-link">
                Explore Projects
              </Link>
              <Link href="/resume" className="secondary-link">
                Resume
              </Link>
              <a href="#contact" className="secondary-link">
                Contact Me
              </a>
            </div>

            <div className="skill-ribbon">
              <span>2025 Graduate</span>
              <span>Computer Programming Diploma</span>
              <span>Toronto Area</span>
            </div>

            <div className="metric-strip">
              <div className="metric-tile">
                <strong>3</strong>
                <span>featured builds</span>
              </div>
              <div className="metric-tile">
                <strong>4</strong>
                <span>target roles</span>
              </div>
              <div className="metric-tile">
                <strong>IT</strong>
                <span>support focus</span>
              </div>
            </div>
          </div>

          <aside className="hero-panel">
            <div className="hero-panel-card top-card">
              <p className="mini-label">Career Direction</p>
              <strong>IT support, service desk, and technical support.</strong>
              <span>
                Built for roles where troubleshooting, communication, and
                practical systems thinking matter every day.
              </span>
            </div>

            <div className="hero-panel-card grid-card">
              <p className="mini-label">Core Focus</p>
              <ul>
                {focusAreas.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </section>

        <section className="summary-grid">
          <article className="glass-card intro-card">
            <p className="section-tag">About</p>
            <h2>Portfolio shaped for recruiters, hiring managers, and support teams.</h2>
            <p>
              My background combines programming fundamentals with hands-on
              project work. I am targeting opportunities where I can support
              users, troubleshoot technical issues, and grow inside a strong IT
              environment.
            </p>
          </article>

          <article className="glass-card">
            <p className="section-tag">Technical Strengths</p>
            <ul className="bullet-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="glass-card">
            <p className="section-tag">Target Roles</p>
            <ul className="bullet-list">
              {targets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-heading">
            <p className="section-tag">Projects</p>
            <h2>Work that connects software skills with support-minded problem solving.</h2>
            <p className="section-copy">
              These projects show how I approach logic, interfaces, workflow,
              and debugging across both business applications and user-facing
              systems.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-header">
                  <span className="project-label">{project.label}</span>
                  <h3>{project.title}</h3>
                </div>
                <p className="project-summary">{project.summary}</p>
                <p className="project-stack">{project.stack}</p>
                <ul className="bullet-list compact">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="feature-demo-card">
            <div>
              <p className="section-tag">Help Desk Demo</p>
              <h3>ResolveIT is the project closest to real service desk work.</h3>
              <p className="section-copy">
                This featured project is set up as the strongest case study in
                the portfolio because it mirrors the kind of intake, triage, and
                status management used by support teams.
              </p>
            </div>
            <div className="feature-demo-actions">
              <Link href="/projects" className="primary-link">
                Open Project Page
              </Link>
              <span className="status-pill">Live demo web version coming next</span>
            </div>
          </div>
        </section>

        <section className="closing-grid">
          <article className="glass-card quote-card">
            <p className="section-tag">Working Style</p>
            <h2>
              I like technical work that ends with the user feeling supported,
              not overwhelmed.
            </h2>
            <p>
              The strongest IT teams solve problems clearly, communicate well,
              and make systems easier to trust. That is the kind of environment
              I want to contribute to.
            </p>
          </article>

          <article id="contact" className="glass-card contact-card">
            <p className="section-tag">Contact</p>
            <h2>Let&apos;s connect.</h2>
            <p>
              Available for entry-level IT support, help desk, technical
              support, and junior developer opportunities.
            </p>
            <a href="mailto:harshpanchal952@gmail.com">harshpanchal952@gmail.com</a>
            <a href="tel:6475942795">647-594-2795</a>
            <div className="social-links">
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
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <p>Harsh Panchal</p>
          <span>Built with Next.js, Vanta, and a focus on practical IT career storytelling.</span>
        </div>
      </footer>
    </>
  );
}
