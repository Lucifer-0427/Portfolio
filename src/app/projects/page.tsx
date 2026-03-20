import Link from "next/link";
import { githubUrl, projects } from "@/lib/site-data";

export default function ProjectsPage() {
  const featuredProject = projects[0];

  return (
    <main className="subpage-shell terminal-theme">
      <section className="subpage-hero terminal-panel">
        <p className="terminal-label">{"// Projects.json"}</p>
        <h1>Work samples organized like a clean technical knowledge base.</h1>
        <p className="section-copy">
          This page focuses on clarity: what each project is, what it
          demonstrates, and why it matters for IT support and technical work.
        </p>
        <div className="hero-actions">
          <Link href="/" className="secondary-link">
            Back Home
          </Link>
          <Link href="/resume" className="primary-link">
            Open Resume
          </Link>
        </div>
      </section>

      <section className="featured-case-study">
        <div className="featured-case-study__main terminal-panel">
          <p className="terminal-label">{"// Featured case study"}</p>
          <h2>{featuredProject.title}</h2>
          <p className="section-copy">{featuredProject.summary}</p>
          <p className="project-stack">{featuredProject.stack}</p>
          <ul className="bullet-list">
            {featuredProject.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <div className="project-actions">
            <Link href={`/projects/${featuredProject.slug}`} className="primary-link">
              Open Project Page
            </Link>
            <a href={featuredProject.repoUrl} target="_blank" rel="noreferrer" className="secondary-link">
              View on GitHub
            </a>
          </div>
        </div>

        <aside className="live-demo-card terminal-panel">
          <p className="terminal-label">{"// Demo status"}</p>
          <h2>Help desk demo direction</h2>
          <p>
            This project is the strongest fit for a live demo because it mirrors
            real intake, triage, and support queue workflow.
          </p>
          <span className="status-pill status-pill--green">Deployable web demo next</span>
        </aside>
      </section>

      <section className="project-grid">
        {projects.slice(1).map((project) => (
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
      </section>

      <section className="glass-panel project-links-note">
        <p className="terminal-label">{"// Repositories"}</p>
        <h2>Project source links can point directly to each repository.</h2>
        <p className="section-copy">
          Right now the GitHub buttons use your main profile so the interaction is already live.
          Once you give me the exact repo links, I can connect each project card to its own repository.
        </p>
        <a href={githubUrl} target="_blank" rel="noreferrer" className="secondary-link">
          Open GitHub Profile
        </a>
      </section>
    </main>
  );
}
