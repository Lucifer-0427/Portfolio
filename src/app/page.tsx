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
            <p className="identity-status">Computer Programming graduate building practical, polished software projects</p>
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
            <h1>Practical software projects, thoughtful interfaces, and interactive technical depth.</h1>
            <p className="lede">
              I build projects that focus on logic, usability, and clean
              execution. This site is meant to show real work, a steady problem
              solving approach, and the kind of technical curiosity that keeps
              improving with every build.
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
              <span className="metric-console__label">Approach</span>
              <strong>Problem Solving</strong>
              <p>Workflow thinking, debugging, and user-aware technical decisions.</p>
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
            <h2>Projects built around software logic, experimentation, and usable design.</h2>
            <p className="section-copy">
              Each project highlights a different kind of technical thinking,
              from business logic and systems workflow to interactive builds and
              game mechanics.
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
                <div className="project-actions">
                  <Link href={`/projects/${project.slug}`} className="secondary-link">
                    View Project
                  </Link>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="secondary-link">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-grid">
          <article className="quote-card glass-panel">
            <p className="terminal-label">{"// Working style"}</p>
            <h2>Clear thinking, steady iteration, and a strong eye for practical details.</h2>
            <p>
              I enjoy work that rewards curiosity, care, and improvement over
              time, especially when a project becomes easier to use because of
              the technical choices behind it.
            </p>
            <ul className="bullet-list">
              {focusAreas.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article id="contact" className="contact-card glass-panel">
            <p className="terminal-label">{"// Contact"}</p>
            <h2>Get in touch.</h2>
            <p>
              Open to new opportunities, collaborations, and conversations about
              projects, development, and technical work.
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
