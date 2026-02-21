import { useEffect, useState, type CSSProperties } from "react";

type ShowcaseScene = {
  title: string;
  subtitle: string;
  tool: string;
  accent: string;
};

const SHOWCASE_SCENES: ShowcaseScene[] = [
  {
    title: "Product UI exploration",
    subtitle: "Frame-by-frame prototype review in Figma",
    tool: "Figma",
    accent: "#f46d43",
  },
  {
    title: "Feature implementation",
    subtitle: "Working context in Cursor with code + terminal",
    tool: "Cursor",
    accent: "#5ac8fa",
  },
  {
    title: "Delivery coordination",
    subtitle: "Sprint planning and blockers triage in Jira",
    tool: "Jira",
    accent: "#6f9bff",
  },
  {
    title: "Analytics checkpoint",
    subtitle: "Reviewing conversion and behavior snapshots",
    tool: "Dashboard",
    accent: "#57d28f",
  },
  {
    title: "Release handoff",
    subtitle: "QA signals, risks and launch readiness",
    tool: "Release",
    accent: "#b989ff",
  },
];

export default function HeroMedia() {
  const [activeScene, setActiveScene] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => setShouldAnimate(!mediaQuery.matches);

    syncPreference();
    mediaQuery.addEventListener("change", syncPreference);
    return () => mediaQuery.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (!shouldAnimate) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveScene((current) => (current + 1) % SHOWCASE_SCENES.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [shouldAnimate]);

  return (
    <div className="hero-right card">
      <div className="media-frame media-showcase-frame" aria-label="Showcase reel">
        {SHOWCASE_SCENES.map((scene, index) => {
          const isActive = index === activeScene;

          return (
            <article
              key={scene.title}
              className={`showcase-scene ${isActive ? "is-active" : ""}`}
              style={{ "--scene-accent": scene.accent } as CSSProperties}
              aria-hidden={!isActive}
            >
              <div className="showcase-header">
                <span className="showcase-tool">{scene.tool}</span>
                <span className="showcase-dot" />
              </div>
              <h3>{scene.title}</h3>
              <p>{scene.subtitle}</p>
              <div className="showcase-mock-grid" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
            </article>
          );
        })}
      </div>
      <div className="showcase-progress" aria-hidden="true">
        {SHOWCASE_SCENES.map((scene, index) => (
          <span key={scene.title} className={index === activeScene ? "is-active" : ""} />
        ))}
      </div>
    </div>
  );
}
