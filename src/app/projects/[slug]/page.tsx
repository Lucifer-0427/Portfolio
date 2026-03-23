import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { projects } from "@/lib/site-data";

type ProjectDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <SiteHeader active="projects" />

      <main className="page-shell page-stack">
        <section
          className="case-hero"
          style={{ "--project-accent": project.accent } as CSSProperties}
        >
          <div className="case-hero__copy">
            <span className="project-pill">{project.label}</span>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="action-row">
              <Link href="/projects" className="button button--secondary">
                Back to Projects
              </Link>
              <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button button--primary">
                GitHub Repo
              </a>
            </div>
          </div>

          <aside className="case-hero__meta">
            <div className="meta-panel">
              <span className="section-kicker">Role</span>
              <strong>{project.role}</strong>
            </div>
            <div className="meta-panel">
              <span className="section-kicker">Timeline</span>
              <strong>{project.timeline}</strong>
            </div>
            <div className="meta-panel">
              <span className="section-kicker">Category</span>
              <strong>{project.category}</strong>
            </div>
          </aside>
        </section>

        <section className="case-layout">
          <div className="case-layout__main">
            <article className="editorial-card">
              <span className="section-kicker">Overview</span>
              <h2>Project breakdown</h2>
              <p>{project.detail}</p>
              <p className="project-catalog__stack">{project.stack}</p>
            </article>

            <article className="editorial-card editorial-card--soft">
              <span className="section-kicker">Challenge</span>
              <h2>The friction I had to solve</h2>
              <p>{project.challenge}</p>
            </article>

            <article className="editorial-card">
              <span className="section-kicker">Capabilities</span>
              <h2>What this project can do</h2>
              <ul className="plain-list plain-list--project">
                {project.capabilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article className="editorial-card editorial-card--soft">
              <span className="section-kicker">Learning</span>
              <h2>What I improved while building it</h2>
              <p>{project.learning}</p>
            </article>
          </div>

          <aside className="case-layout__side">
            <div className="meta-panel meta-panel--sticky">
              <span className="section-kicker">Highlights</span>
              <ul className="plain-list plain-list--project">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="meta-panel">
              <span className="section-kicker">Current status</span>
              <p>{project.liveStatus}</p>
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
