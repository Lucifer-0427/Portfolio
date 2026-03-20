import Link from "next/link";
import { SkillsUniverse } from "@/components/skills-universe";
import { VantaClouds } from "@/components/vanta-clouds";
import {
  focusAreas,
  githubUrl,
  linkedInUrl,
  projects,
  skillsUniverse,
} from "@/lib/site-data";

export default function Home() {
  const featuredProject = projects[0];

  return (
    <>
      <main className="portfolio-shell clean-theme">
        <VantaClouds />
        <header className="portfolio-nav glass-panel">
          <div>
            <Link href="/" className="brand-lockup">
              Harsh Panchal
            </Link>
            <p className="identity-status">Open to IT support and technical support roles</p>
          </div>

          <nav className="top-nav__links">
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href={linkedInUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </nav>
        </header>

        <section className="hero-clean">
          <div className="hero-copy">
            <p className="terminal-label">{"// Portfolio"}</p>
            <h1>IT support focused portfolio with practical projects and interactive technical depth.</h1>
            <p className="lede">
              Computer Programming diploma graduate building toward a career in
              IT support, service desk, and technical support. The goal of this
              site is simple: show real project work, strong troubleshooting
              instincts, and a clean technical presentation.
            </p>
            <div className="hero-actions">
              <Link href="/projects" className="primary-link">
                View Projects
              </Link>
              <Link href="/resume" className="secondary-link">
                View Resume
              </Link>
              <a href="#contact" className="secondary-link">
                Contact
              </a>
            </div>
          </div>

          <aside className="hero-side">
            <article className="metric-console glass-panel">
              <span className="metric-console__label">Focus</span>
              <strong>IT Support</strong>
              <p>Support workflow, debugging, and user-focused problem solving.</p>
            </article>
            <article className="metric-console glass-panel">
              <span className="metric-console__label">Education</span>
              <strong>2025 Graduate</strong>
              <p>Computer Programming diploma with hands-on C# and web projects.</p>
            </article>
            <article className="metric-console glass-panel">
              <span className="metric-console__label">Featured</span>
              <strong>{featuredProject.title}</strong>
              <p>{featuredProject.summary}</p>
            </article>
          </aside>
        </section>

        <SkillsUniverse skills={skillsUniverse} />

        <section className="projects-section">
          <div className="section-heading glass-panel">
            <p className="terminal-label">{"// Featured builds"}</p>
            <h2>Projects that connect software logic with support-minded execution.</h2>
            <p className="section-copy">
              The goal is not just to build things that work, but to show calm
              technical thinking, clear workflow design, and problem-solving
              that feels useful in a real environment.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card glass-panel" key={project.title}>
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
        </section>

        <section className="closing-grid">
          <article className="quote-card glass-panel">
            <p className="terminal-label">{"// Working style"}</p>
            <h2>Clear communication, technical patience, and practical follow-through.</h2>
            <p>
              I&apos;m most interested in work where solving the problem matters,
              but so does how supported the user feels during that process.
            </p>
            <ul className="bullet-list">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article id="contact" className="contact-card glass-panel">
            <p className="terminal-label">{"// Contact"}</p>
            <h2>Message Harsh directly.</h2>
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
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </article>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner glass-panel">
          <p>Harsh Panchal</p>
          <span>Portfolio site with interactive skills universe and project-focused storytelling.</span>
        </div>
      </footer>
    </>
  );
}
