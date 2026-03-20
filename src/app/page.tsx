import { VantaClouds } from "@/components/vanta-clouds";

const strengths = [
  "Troubleshooting and technical problem solving",
  "Windows environment familiarity",
  "C#, JavaScript, HTML, CSS, and SQL",
  "ASP.NET Core MVC and software debugging",
];

const projects = [
  {
    title: "ResolveIT Help Desk Ticketing System",
    label: "Newest Project",
    summary:
      "A service desk dashboard for logging support tickets, assigning priority, and tracking issues through intake to resolution.",
    stack: "ASP.NET Core MVC, C#, Razor, custom CSS",
    highlights: [
      "Built a ticket workflow with categories, status changes, and service-level snapshots.",
      "Designed around real internal support requests like VPN issues, password resets, and hardware incidents.",
    ],
  },
  {
    title: "Supermarket Website with Dynamic Pricing",
    label: "Business Logic",
    summary:
      "A web project that adjusts product pricing dynamically using business rules, giving store owners more control over inventory pricing.",
    stack: "Web development, JavaScript, HTML, CSS, pricing logic",
    highlights: [
      "Focused on practical product management and conditional pricing behavior.",
      "Strengthened full-stack thinking, testing, and logic design.",
    ],
  },
  {
    title: "Space Fighter Game",
    label: "Programming Depth",
    summary:
      "A C# and MonoGame project that demonstrates object-oriented programming, collision detection, and event-driven game logic.",
    stack: "C#, MonoGame, game loops, collision systems",
    highlights: [
      "Implemented player controls, enemy interactions, and score tracking.",
      "Used debugging and iterative testing to refine gameplay systems.",
    ],
  },
];

const targets = [
  "IT Support Specialist",
  "Help Desk Technician",
  "Service Desk Analyst",
  "Technical Support Representative",
];

export default function Home() {
  return (
    <main className="portfolio-shell">
      <VantaClouds />
      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Harsh Panchal</p>
          <h1>
            Building practical tech projects for a career in IT support and
            software.
          </h1>
          <p className="lede">
            Computer Programming diploma graduate focused on troubleshooting,
            support workflows, and clear software experiences. I build projects
            that reflect how real users and IT teams work.
          </p>

          <div className="hero-actions">
            <a href="mailto:harshpanchal952@gmail.com" className="primary-link">
              Email Me
            </a>
            <a href="#projects" className="secondary-link">
              View Projects
            </a>
          </div>

          <div className="contact-strip">
            <span>Toronto Area</span>
            <span>647-594-2795</span>
            <span>harshpanchal952@gmail.com</span>
          </div>
        </div>

        <aside className="hero-panel">
          <div className="hero-panel-card top-card">
            <p className="mini-label">2025 Graduate</p>
            <strong>Computer Programming Diploma</strong>
            <span>Entry-level IT and technical support focused</span>
          </div>
          <div className="hero-panel-card grid-card">
            <p className="mini-label">Core Focus</p>
            <ul>
              <li>Support ticket workflow</li>
              <li>Debugging and issue triage</li>
              <li>User-friendly interfaces</li>
              <li>Practical C# project work</li>
            </ul>
          </div>
        </aside>
      </section>

      <section className="summary-grid">
        <article className="glass-card intro-card">
          <p className="section-tag">About</p>
          <h2>Portfolio built for recruiters, hiring managers, and service desk teams.</h2>
          <p>
            My background combines programming fundamentals with hands-on
            project work. I am targeting roles where I can troubleshoot issues,
            support users, and keep systems moving.
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
          <h2>Work that shows technical ability and support-minded thinking.</h2>
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
          <p className="section-tag">What I Bring</p>
          <h2>
            I like solving technical problems in a way that feels calm, clear,
            and useful to the person on the other side.
          </h2>
        </article>

        <article className="glass-card contact-card">
          <p className="section-tag">Contact</p>
          <h2>Let&apos;s connect.</h2>
          <a href="mailto:harshpanchal952@gmail.com">harshpanchal952@gmail.com</a>
          <a href="tel:6475942795">647-594-2795</a>
          <p>
            Available for entry-level IT support, help desk, technical support,
            and junior developer opportunities.
          </p>
        </article>
      </section>
    </main>
  );
}
