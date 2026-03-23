import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { githubUrl, projects } from "@/lib/site-data";

export default function ProjectsPage() {
  const featuredProject = projects[0];

  return (
    <>
      <SiteHeader active="projects" />

      <main className="page-shell page-stack">
        <section className="subpage-hero">
          <span className="eyebrow">Projects</span>
          <h1>Case studies designed to show how I think, not just what I built.</h1>
          <p>
            This page focuses on project quality, system reasoning, and the practical decisions
            behind each build. The goal is to make the work feel clear, grounded, and recruiter-friendly.
          </p>
          <div className="action-row">
            <Link href="/" className="button button--secondary">
              Back Home
            </Link>
            <Link href="/resume" className="button button--primary">
              Open Resume
            </Link>
          </div>
        </section>

        <section
          className="project-spotlight"
          style={{ "--project-accent": featuredProject.accent } as CSSProperties}
        >
          <div className="project-spotlight__main">
            <span className="project-pill">Flagship Project</span>
            <h2>{featuredProject.title}</h2>
            <p>{featuredProject.detail}</p>
            <div className="project-meta">
              <span>{featuredProject.role}</span>
              <span>{featuredProject.timeline}</span>
              <span>{featuredProject.category}</span>
            </div>
            <ul className="plain-list plain-list--project">
              {featuredProject.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
            <div className="action-row">
              <Link href={`/projects/${featuredProject.slug}`} className="button button--primary">
                Open Case Study
              </Link>
              <a
                href={featuredProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="button button--secondary"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <aside className="project-spotlight__side">
            <div className="meta-panel">
              <span className="section-kicker">Status</span>
              <p>{featuredProject.liveStatus}</p>
            </div>
            <div className="meta-panel">
              <span className="section-kicker">Core capability</span>
              <strong>{featuredProject.capabilities[0]}</strong>
            </div>
          </aside>
        </section>

        <section className="project-catalog">
          {projects.slice(1).map((project) => (
            <article
              key={project.slug}
              className="project-catalog__item"
              style={{ "--project-accent": project.accent } as CSSProperties}
            >
              <div>
                <span className="project-pill">{project.label}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.summary}</p>
              <p className="project-catalog__stack">{project.stack}</p>
              <div className="project-meta">
                <span>{project.role}</span>
                <span>{project.category}</span>
              </div>
              <div className="action-row action-row--compact">
                <Link href={`/projects/${project.slug}`} className="text-link">
                  View Case Study
                </Link>
                <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </section>

        <section className="repository-note">
          <div>
            <span className="section-kicker">Repositories</span>
            <h2>Every project can point directly to source once each repo is public.</h2>
            <p>
              IntelliGrocer already links to its own repository. The other cards can stay connected
              to your main profile until you decide to publish each project separately.
            </p>
          </div>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="button button--secondary">
            Open GitHub Profile
          </a>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
