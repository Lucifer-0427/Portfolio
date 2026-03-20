import Link from "next/link";
import { projects } from "@/lib/site-data";

export default function ProjectsPage() {
  const featuredProject = projects[0];

  return (
    <main className="subpage-shell">
      <section className="subpage-hero">
        <p className="section-tag">Projects</p>
        <h1>Project work that reflects practical troubleshooting and real software logic.</h1>
        <p className="section-copy">
          This page collects the strongest examples from my portfolio with extra
          context on what each build demonstrates.
        </p>
        <div className="hero-actions">
          <Link href="/" className="secondary-link">
            Back Home
          </Link>
          <Link href="/resume" className="primary-link">
            View Resume
          </Link>
        </div>
      </section>

      <section className="featured-case-study">
        <div className="glass-card featured-case-study__main">
          <p className="section-tag">Featured</p>
          <h2>{featuredProject.title}</h2>
          <p className="section-copy">{featuredProject.summary}</p>
          <p className="project-stack">{featuredProject.stack}</p>
          <ul className="bullet-list">
            {featuredProject.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>

        <aside className="glass-card live-demo-card">
          <p className="section-tag">Live Demo Card</p>
          <h2>Help desk demo direction</h2>
          <p>
            The current version is the strongest portfolio case study because it
            already captures the right workflow. The next build step is a fully
            deployed demo version tuned for direct browser access.
          </p>
          <span className="status-pill">Demo version in progress</span>
        </aside>
      </section>

      <section className="project-grid">
        {projects.slice(1).map((project) => (
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
      </section>
    </main>
  );
}
