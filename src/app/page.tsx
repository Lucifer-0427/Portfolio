import { VantaClouds } from "@/components/vanta-clouds";

const strengths = [
  "Troubleshooting and technical problem solving",
  "Windows environment familiarity",
  "C#, JavaScript, HTML, CSS, and SQL",
  "ASP.NET Core MVC, debugging, and project delivery",
];

const projects = [
  {
    title: "ResolveIT Help Desk Ticketing System",
    label: "Support Systems",
    summary:
      "A service desk dashboard designed around real internal IT workflow, from intake and triage to status tracking and resolution.",
    stack: "ASP.NET Core MVC, C#, Razor, custom CSS",
    highlights: [
      "Built a ticket flow with categories, priorities, service snapshots, and practical issue states.",
      "Modeled realistic requests like VPN instability, password resets, and device support incidents.",
    ],
  },
  {
    title: "Supermarket Website with Dynamic Pricing",
    label: "Business Logic",
    summary:
      "A retail-focused website that adapts product pricing through business rules, showing practical problem solving beyond static web pages.",
    stack: "JavaScript, HTML, CSS, web logic design",
    highlights: [
      "Focused on conditional pricing behavior and product management scenarios.",
      "Strengthened full-stack thinking, testing habits, and logic design under real-world style constraints.",
    ],
  },
  {
    title: "Space Fighter Game",
    label: "Programming Depth",
    summary:
      "A fast-paced C# game project that demonstrates event-driven programming, gameplay systems, and iterative debugging.",
    stack: "C#, MonoGame, collision systems, gameplay loops",
    highlights: [
      "Implemented movement, enemy behavior, collision handling, and score tracking.",
      "Used repeated testing and debugging to improve responsiveness, logic, and game feel.",
    ],
  },
];

const targets = [
  "IT Support Specialist",
  "Help Desk Technician",
  "Service Desk Analyst",
  "Technical Support Representative",
];

const focusAreas = [
  "Support workflow thinking",
  "Debugging and issue triage",
  "Clear, user-friendly interfaces",
  "Practical C# project work",
];

export default function Home() {
  return (
    <>
      <main className="portfolio-shell">
        <VantaClouds />

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
              <a href="#projects" className="primary-link">
                Explore Projects
              </a>
              <a href="#contact" className="secondary-link">
                Contact Me
              </a>
            </div>

            <div className="skill-ribbon">
              <span>2025 Graduate</span>
              <span>Computer Programming Diploma</span>
              <span>Toronto Area</span>
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
