import "./index.css";

const experience = [
  { years: "2025 →", role: "T-bank / Sr Product Designer" },
  { years: "2023 → 2025", role: "Positive Technologies / Sr Product Designer" },
  { years: "2024 → 2025", role: "Soveren / Sr Product Designer" },
];

const projects = [
  {
    title: "Soveren — Data Security Platform",
    desc: "Behavior graphing, anomaly response workflows, and threat clusters.",
    img: "/project-1.svg",
  },
  {
    title: "KRIS — Incident Analysis",
    desc: "High-load investigations for security teams.",
    img: "/project-2.svg",
  },
];

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand-icon">☺</span>
          <span>Alexey Babenkov — Product Designer</span>
        </div>
        <nav className="top-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="layout">
        <section className="hero" id="top">
          <div className="hero-left card">
            <p className="overline">Alexey Babenkov — Product Designer</p>
            <h1>
              Specializing in complex interfaces and high-load B2B SaaS solutions in
              cybersecurity, cloud infrastructure, and analytics
            </h1>
            <div className="meta">
              <a href="#">Telegram</a>
              <span className="dot">|</span>
              <a href="#">LinkedIn</a>
              <span className="dot">|</span>
              <a href="#">Dribbble</a>
              <span className="dot">|</span>
              <a href="mailto:hello@designer.com">Send email</a>
            </div>

            <button className="cta" id="contact">
              <span>Book a call</span>
              <span className="arrow">↗</span>
            </button>

            <div className="experience" id="experience">
              {experience.map((item) => (
                <div className="exp-row" key={item.role}>
                  <span className="exp-years">{item.years}</span>
                  <span className="exp-role">{item.role}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-right card">
            <div className="media-frame">
              <img src="/hero.svg" alt="Cybersecurity dashboard preview" />
            </div>
            <div className="media-controls">
              <div className="control-row">
                <span className="badge">Risk 55%</span>
                <span className="chip">Response</span>
              </div>
              <div className="timeline">
                <span className="tick" />
                <span className="tick" />
                <span className="tick" />
                <span className="tick" />
                <span className="tick" />
              </div>
            </div>
          </div>
        </section>

        <section className="projects" id="projects">
          <div className="project-card card">
            <div>
              <h2>Soveren — Data Security Platform</h2>
              <p>
                Exploration of attack chains, context switching, and analyst tooling
                for critical systems.
              </p>
            </div>
            <img src="/project-1.svg" alt="Soveren project" />
          </div>

          <div className="project-grid">
            {projects.map((proj) => (
              <article className="project-mini card" key={proj.title}>
                <img src={proj.img} alt={proj.title} />
                <div>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>2025 → · Product design & systems</span>
        <span className="footer-dot">•</span>
        <span>Based in EU / available worldwide</span>
      </footer>
    </div>
  );
}
