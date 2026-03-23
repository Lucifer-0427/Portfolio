import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkillsUniverse } from "@/components/skills-universe";
import {
  emailAddress,
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
      <SiteHeader active="home" />

      <main className="page-shell page-stack">
        <section className="home-hero">
          <div className="home-hero__copy">
            <span className="eyebrow">Available for opportunities</span>
            <h1>Building practical systems with clear logic and stronger product polish.</h1>
            <p className="home-hero__role">
              Software Developer / IT Support / Full Stack Learner
            </p>
            <p className="home-hero__lede">
              I design projects that feel believable, useful, and well thought out. My work
              sits at the intersection of workflow logic, interface clarity, and the kind of
              detail that makes software easier to trust.
            </p>

            <div className="action-row">
              <Link href="/projects" className="button button--primary">
                View Projects
              </Link>
              <Link href="/resume" className="button button--secondary">
                View Resume
              </Link>
              <a href="#contact" className="button button--ghost">
                Contact Me
              </a>
            </div>
          </div>

          <aside className="hero-architecture">
            <div className="hero-architecture__grid" />
            <div className="hero-architecture__frame">
              <div className="hero-architecture__ring hero-architecture__ring--one" />
              <div className="hero-architecture__ring hero-architecture__ring--two" />
              <div className="hero-architecture__core">
                <span className="hero-architecture__label">Intentional systems</span>
                <strong>Design + Logic</strong>
                <p>Projects shaped by believable workflows, not just screens.</p>
              </div>
            </div>

            <div className="hero-metrics">
              <article className="metric-card">
                <span>Flagship build</span>
                <strong>IntelliGrocer</strong>
                <p>Three-role retail platform with live pricing workflows.</p>
              </article>
              <article className="metric-card">
                <span>Current strength</span>
                <strong>Operational UX</strong>
                <p>Interfaces designed around how people actually work.</p>
              </article>
            </div>
          </aside>
        </section>

        <section className="editorial-section editorial-section--soft" id="about">
          <div className="section-heading">
            <span className="section-kicker">About</span>
            <h2>Building with intent.</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                My background in technical support taught me to respect the gap between what
                a system does and how easily a person can actually use it. That perspective
                carries into every build I make.
              </p>
              <p>
                I like software that solves real friction: cleaner workflows, more believable
                business logic, and interfaces that feel polished instead of improvised.
              </p>
            </div>

            <div className="value-grid">
              <article className="value-card">
                <span>01</span>
                <h3>Workflow thinking</h3>
                <p>Designing around real states, approvals, roles, and operational context.</p>
              </article>
              <article className="value-card">
                <span>02</span>
                <h3>Calm interfaces</h3>
                <p>Turning busy functionality into layouts that feel clear and recruiter-ready.</p>
              </article>
              <article className="value-card">
                <span>03</span>
                <h3>Iterative debugging</h3>
                <p>Improving the product by tracing real issues, not stopping at surface fixes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="section-heading">
            <span className="section-kicker">Skills</span>
            <h2>Technical arsenal.</h2>
            <p>
              The globe stays because it shows the range of tools I work with while still
              feeling interactive and memorable.
            </p>
          </div>

          <div className="skills-layout">
            <div className="skills-copy">
              <div className="skills-copy__card">
                <span className="section-kicker">Focus</span>
                <h3>Frontend, backend, and systems that need to work together cleanly.</h3>
                <ul className="plain-list">
                  {focusAreas.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <SkillsUniverse skills={skillsUniverse} />
          </div>
        </section>

        <section className="editorial-section editorial-section--soft" id="projects">
          <div className="section-heading">
            <span className="section-kicker">Featured work</span>
            <h2>Projects with real operational logic behind them.</h2>
            <p>
              I wanted this portfolio to feel less like a gallery of mockups and more like a
              set of case studies that explain how I think.
            </p>
          </div>

          <article
            className="featured-project"
            style={{ "--project-accent": featuredProject.accent } as CSSProperties}
          >
            <div className="featured-project__copy">
              <span className="project-pill">{featuredProject.label}</span>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.summary}</p>
              <div className="project-meta">
                <span>{featuredProject.role}</span>
                <span>{featuredProject.timeline}</span>
                <span>{featuredProject.category}</span>
              </div>
              <ul className="plain-list plain-list--project">
                {featuredProject.capabilities.map((item) => (
                  <li key={item}>{item}</li>
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
                  GitHub Repo
                </a>
              </div>
            </div>

            <div className="featured-project__visual">
              <div className="project-visual-card">
                <span>Retail platform</span>
                <strong>3 dashboards</strong>
              </div>
              <div className="project-visual-card">
                <span>Core stack</span>
                <strong>{featuredProject.stack}</strong>
              </div>
              <div className="project-visual-card project-visual-card--wide">
                <span>Status</span>
                <p>{featuredProject.liveStatus}</p>
              </div>
            </div>
          </article>

          <div className="project-showcase">
            {projects.slice(1).map((project) => (
              <article
                key={project.slug}
                className="project-tile"
                style={{ "--project-accent": project.accent } as CSSProperties}
              >
                <div className="project-tile__head">
                  <span className="project-pill">{project.label}</span>
                  <h3>{project.title}</h3>
                </div>
                <p>{project.summary}</p>
                <p className="project-tile__stack">{project.stack}</p>
                <div className="action-row action-row--compact">
                  <Link href={`/projects/${project.slug}`} className="text-link">
                    View Project
                  </Link>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-link">
                    GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-banner" id="contact">
          <div>
            <span className="section-kicker">Contact</span>
            <h2>Let&apos;s build something thoughtful.</h2>
            <p>
              I&apos;m looking for opportunities where I can contribute, learn quickly, and keep
              sharpening both the technical side and the product side of my work.
            </p>
          </div>

          <div className="contact-banner__actions">
            <a href={`mailto:${emailAddress}`} className="button button--primary">
              Send an Email
            </a>
            <div className="contact-links">
              <a href={linkedInUrl} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={githubUrl} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
