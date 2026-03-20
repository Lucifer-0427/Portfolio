import Link from "next/link";
import {
  focusAreas,
  githubUrl,
  linkedInUrl,
  projects,
  strengths,
  targets,
} from "@/lib/site-data";

const quickActions = [
  "Ask about Harsh's skills and technical strengths",
  "Review featured projects and support-focused work",
  "Open a resume-ready summary for applications",
  "Send a direct message for job opportunities",
];

export default function Home() {
  const featuredProject = projects[0];

  return (
    <>
      <main className="portfolio-shell terminal-theme">
        <header className="terminal-nav terminal-panel">
          <div className="identity-block">
            <div className="avatar-dot" />
            <div>
              <Link href="/" className="brand-lockup">
                Harsh.ai
              </Link>
              <p className="identity-status">Open to IT support and technical support roles</p>
            </div>
          </div>

          <nav className="top-nav__links">
            <Link href="/projects">Projects</Link>
            <Link href="/resume">Resume</Link>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </header>

        <section className="hero-terminal">
          <div className="assistant-column">
            <div className="assistant-card terminal-panel">
              <div className="terminal-bar">
                <span className="terminal-pill active">Easy</span>
                <span className="terminal-pill">Projects</span>
                <span className="terminal-pill">Resume</span>
              </div>

              <p className="terminal-label">{"// Harsh's AI assistant"}</p>
              <h1>I&apos;m Harsh&apos;s portfolio assistant, built to help teams understand how he works.</h1>
              <p className="lede">
                Computer Programming diploma graduate with a practical,
                support-focused mindset. This portfolio is designed to quickly
                show the projects, troubleshooting habits, and technical
                strengths that matter for entry-level IT roles.
              </p>

              <div className="terminal-list">
                <p className="terminal-section-title">What you can do here</p>
                <ol>
                  {quickActions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>

              <div className="hero-actions">
                <Link href="/projects" className="primary-link">
                  Open Projects
                </Link>
                <Link href="/resume" className="secondary-link">
                  Open Resume
                </Link>
                <a href="#contact" className="secondary-link">
                  Contact
                </a>
              </div>
            </div>

            <div className="metrics-row">
              <article className="metric-console terminal-panel">
                <span className="metric-console__label">Focus</span>
                <strong>IT Support</strong>
                <p>Support workflow, debugging, and user-focused problem solving.</p>
              </article>
              <article className="metric-console terminal-panel">
                <span className="metric-console__label">Education</span>
                <strong>2025 Graduate</strong>
                <p>Computer Programming diploma with hands-on C# and web projects.</p>
              </article>
              <article className="metric-console terminal-panel">
                <span className="metric-console__label">Projects</span>
                <strong>3 Featured</strong>
                <p>Including a help desk ticketing system and logic-heavy app work.</p>
              </article>
            </div>
          </div>

          <aside className="dashboard-column">
            <div className="feature-module terminal-panel">
              <p className="terminal-label">{"// Featured module"}</p>
              <h2>{featuredProject.title}</h2>
              <p>{featuredProject.summary}</p>
              <ul className="bullet-list compact">
                {featuredProject.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="status-row">
                <span className="status-pill">Support Systems</span>
                <span className="status-pill status-pill--green">Case Study Ready</span>
              </div>
            </div>

            <div className="stack-grid">
              <article className="mini-module terminal-panel">
                <p className="terminal-label">{"// Skills"}</p>
                <ul className="bullet-list">
                  {strengths.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="mini-module terminal-panel">
                <p className="terminal-label">{"// Target roles"}</p>
                <ul className="bullet-list">
                  {targets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </aside>
        </section>

        <section className="projects-section">
          <div className="section-heading terminal-panel">
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
              <article className="project-card terminal-panel" key={project.title}>
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
          <article className="quote-card terminal-panel">
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

          <article id="contact" className="contact-card terminal-panel">
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
        <div className="site-footer__inner terminal-panel">
          <p>Harsh.ai</p>
          <span>Terminal-style portfolio with a cleaner recruiter-ready structure.</span>
        </div>
      </footer>
    </>
  );
}
