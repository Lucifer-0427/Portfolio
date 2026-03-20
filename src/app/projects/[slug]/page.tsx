import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="subpage-shell terminal-theme">
      <section className="subpage-hero terminal-panel">
        <p className="terminal-label">{`// ${project.slug}.json`}</p>
        <h1>{project.title}</h1>
        <p className="section-copy">{project.summary}</p>
        <div className="hero-actions">
          <Link href="/projects" className="secondary-link">
            Back to Projects
          </Link>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="primary-link">
            View on GitHub
          </a>
        </div>
      </section>

      <section className="featured-case-study">
        <article className="featured-case-study__main terminal-panel">
          <p className="terminal-label">{"// Overview"}</p>
          <h2>Project breakdown</h2>
          <p className="section-copy">{project.detail}</p>
          <p className="project-stack">{project.stack}</p>
        </article>

        <aside className="live-demo-card terminal-panel">
          <p className="terminal-label">{"// Status"}</p>
          <h2>Current project state</h2>
          <p>{project.liveStatus}</p>
        </aside>
      </section>

      <section className="resume-layout">
        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Highlights"}</p>
          <h2>What this project shows</h2>
          <ul className="bullet-list">
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </article>

        <article className="resume-card terminal-panel">
          <p className="terminal-label">{"// Next step"}</p>
          <h2>Useful links</h2>
          <div className="project-actions">
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="secondary-link">
              GitHub Repository
            </a>
            <Link href="/resume" className="secondary-link">
              Open Resume
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
