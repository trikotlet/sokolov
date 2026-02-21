import { useState } from "react";
import type { CaseStudy, Language, Profile, UiText } from "../data/portfolio";
import { toAssetUrl } from "../utils/basePath";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ViewportVideo from "./ViewportVideo";

type ProjectsPageProps = {
  caseStudies: CaseStudy[];
  ui: UiText;
  language: Language;
  profile: Profile;
};

const projectTechTags = ["React", "Vue", "Python", "Go", "GitLab", "Docker"];

type StoryProject = CaseStudy & {
  starBlock: NonNullable<CaseStudy["starBlock"]>;
};

type StoryCanvasProps = {
  project: StoryProject;
  isRu: boolean;
  ui: UiText;
};

function StoryCanvas({ project, isRu, ui }: StoryCanvasProps) {
  const labels = isRu
    ? {
        starTitle: "STAR Story",
        situation: "Ситуация",
        task: "Задача",
        action: "Действия",
        result: "Результат",
        roleTitle: "Роль и масштаб",
        role: "Моя роль",
        scope: "Масштаб",
      }
    : {
        starTitle: "STAR Story",
        situation: "Situation",
        task: "Task",
        action: "Action",
        result: "Result",
        roleTitle: "Role and scope",
        role: "My role",
        scope: "Scope",
      };

  const roleText = project.resultBlock?.roleText || project.role;
  const scopeText = project.resultBlock
    ? project.resultBlock.scaleText
    : `${ui.metaTeam}: ${project.team}. ${ui.metaTimeline}: ${project.timeline}.`;

  const processText = project.resultBlock?.processText;
  const toolsText = project.resultBlock?.toolsText;
  const showActionContext = Boolean(processText || toolsText);

  return (
    <div className="project-flow project-flow-oms">
      <section className="project-oms-star-canvas" aria-label={labels.starTitle}>
        <article className="project-oms-star-card">
          <p className="project-oms-star-head">
            <span className="project-oms-star-letter">S</span>
            <span className="meta-label">{labels.situation}</span>
          </p>
          <p>{project.starBlock.situation}</p>
        </article>
        <article className="project-oms-star-card">
          <p className="project-oms-star-head">
            <span className="project-oms-star-letter">T</span>
            <span className="meta-label">{labels.task}</span>
          </p>
          <p>{project.starBlock.task}</p>
        </article>
        <article className="project-oms-star-card">
          <p className="project-oms-star-head">
            <span className="project-oms-star-letter">A</span>
            <span className="meta-label">{labels.action}</span>
          </p>
          <ul className="project-result-list">
            {project.starBlock.actions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {showActionContext ? (
            <>
              {processText ? <p className="project-oms-star-note">{processText}</p> : null}
              {toolsText ? <p className="project-oms-star-note">{toolsText}</p> : null}
            </>
          ) : null}
        </article>
        <article className="project-oms-star-card">
          <p className="project-oms-star-head">
            <span className="project-oms-star-letter">R</span>
            <span className="meta-label">{labels.result}</span>
          </p>
          <p>{project.starBlock.result}</p>
        </article>
      </section>

      <section className="project-oms-role" aria-label={labels.roleTitle}>
        <article className="project-oms-role-card">
          <p className="meta-label">{labels.role}</p>
          <p>{roleText}</p>
        </article>
        <article className="project-oms-role-card">
          <p className="meta-label">{labels.scope}</p>
          <p>{scopeText}</p>
        </article>
      </section>
    </div>
  );
}

export default function ProjectsPage({ caseStudies, ui, language, profile }: ProjectsPageProps) {
  const [animatedArtifactKey, setAnimatedArtifactKey] = useState<string | null>(null);
  const isRu = language === "ru";

  const triggerArtifactMotion = (artifactKey: string) => {
    setAnimatedArtifactKey(null);
    window.requestAnimationFrame(() => {
      setAnimatedArtifactKey(artifactKey);
      window.setTimeout(() => {
        setAnimatedArtifactKey((current) => (current === artifactKey ? null : current));
      }, 700);
    });
  };

  return (
    <main className="projects-page">
      <section className="projects-hero card" aria-label="Projects overview">
        {ui.projectsOverline ? <p className="overline">{ui.projectsOverline}</p> : null}
        <h1>{ui.projectsTitle}</h1>
        <p className="projects-lead">{ui.projectsLead}</p>
      </section>

      <section className="projects-expanded" aria-label="Expanded project cards">
        {caseStudies.map((project) => {
          const hasArtifactImages = Boolean(project.artifactImages?.length);
          const fallbackImageSources = getResponsiveImageSources(project.img);
          const hasStoryCanvas = Boolean(project.starBlock);

          return (
            <article className="project-expanded card" id={getProjectAnchor(project.id)} key={project.id}>
              <div className="project-expanded-artifacts artifact-cars" aria-label={`${project.title} artifacts`}>
                {project.teaserVideo ? (
                  <button
                    type="button"
                    className={`artifact-card artifact-card-main ${animatedArtifactKey === `${project.title}-video` ? "is-animating" : ""}`}
                    onClick={() => triggerArtifactMotion(`${project.title}-video`)}
                    aria-label={`Animate ${project.title} teaser video`}
                  >
                    <ViewportVideo
                      src={project.teaserVideo}
                      poster={project.teaserPoster}
                      className="project-expanded-media"
                      ariaLabel={`${project.title} teaser video`}
                      rootMargin="360px 0px"
                    />
                  </button>
                ) : null}

                {hasArtifactImages ? (
                  <div className="project-artifact-grid">
                    {project.artifactImages?.map((artifactSrc, artifactIndex) => {
                      const artifactSources = getResponsiveImageSources(artifactSrc);

                      return (
                        <button
                          type="button"
                          className={`artifact-card ${animatedArtifactKey === artifactSrc ? "is-animating" : ""}`}
                          key={artifactSrc}
                          onClick={() => triggerArtifactMotion(artifactSrc)}
                          aria-label={`Animate ${project.title} artifact ${artifactIndex + 1}`}
                        >
                          {artifactSources ? (
                            <picture>
                              <source srcSet={artifactSources.avif} type="image/avif" />
                              <source srcSet={artifactSources.webp} type="image/webp" />
                              <img
                                src={artifactSources.fallback}
                                alt={`${project.title} artifact ${artifactIndex + 1}`}
                                loading="lazy"
                              />
                            </picture>
                          ) : (
                            <img
                              src={artifactSrc}
                              alt={`${project.title} artifact ${artifactIndex + 1}`}
                              loading="lazy"
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                ) : null}

                {!project.teaserVideo && !hasArtifactImages ? (
                  <button
                    type="button"
                    className={`artifact-card artifact-card-main ${animatedArtifactKey === `${project.title}-fallback` ? "is-animating" : ""}`}
                    onClick={() => triggerArtifactMotion(`${project.title}-fallback`)}
                    aria-label={`Animate ${project.title} artifact`}
                  >
                    {fallbackImageSources ? (
                      <picture>
                        <source srcSet={fallbackImageSources.avif} type="image/avif" />
                        <source srcSet={fallbackImageSources.webp} type="image/webp" />
                        <img src={fallbackImageSources.fallback} alt={project.title} loading="lazy" />
                      </picture>
                    ) : (
                      <img src={toAssetUrl(project.img)} alt={project.title} loading="lazy" />
                    )}
                  </button>
                ) : null}
              </div>

              <div className="project-expanded-content">
                <h2>{project.title}</h2>
                <p className="project-summary">{project.summary}</p>

                {hasStoryCanvas ? (
                  <StoryCanvas project={project as StoryProject} isRu={isRu} ui={ui} />
                ) : (
                  <>
                    {project.resultBlock && !project.starBlock ? (
                      <div className="project-meta-grid project-meta-stack">
                        <div>
                          <span className="meta-label">{isRu ? "Роль" : "Role"}</span>
                          <p>{project.resultBlock.roleText}</p>
                        </div>
                        <div>
                          <span className="meta-label">{isRu ? "Контекст" : "Context"}</span>
                          <p>{project.resultBlock.contextText}</p>
                        </div>
                        <div>
                          <span className="meta-label">{isRu ? "Цель" : "Goal"}</span>
                          <p>{project.resultBlock.goalText}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="project-meta-grid">
                        <div>
                          <span className="meta-label">{ui.metaRole}</span>
                          <p>{project.role}</p>
                        </div>
                        <div>
                          <span className="meta-label">{ui.metaTeam}</span>
                          <p>{project.team}</p>
                        </div>
                        <div>
                          <span className="meta-label">{ui.metaTimeline}</span>
                          <p>{project.timeline}</p>
                        </div>
                      </div>
                    )}

                    <div className="project-flow">
                      {project.starBlock ? (
                        <section className="project-star" aria-label="STAR case summary">
                          <div className="project-star-item">
                            <p className="meta-label">{isRu ? "Ситуация" : "Situation"}</p>
                            <p>{project.starBlock.situation}</p>
                          </div>
                          <div className="project-star-item">
                            <p className="meta-label">{isRu ? "Задача" : "Task"}</p>
                            <p>{project.starBlock.task}</p>
                          </div>
                          <div className="project-star-item">
                            <p className="meta-label">{isRu ? "Действия" : "Action"}</p>
                            <ul className="project-result-list">
                              {project.starBlock.actions.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="project-star-item">
                            <p className="meta-label">{isRu ? "Результат" : "Result"}</p>
                            <p>{project.starBlock.result}</p>
                            {project.starBlock.resultItems?.length ? (
                              <ul className="project-result-list project-result-links">
                                {project.starBlock.resultItems.map((item) => (
                                  <li key={item.label}>
                                    <a href={item.href} target="_blank" rel="noreferrer noopener">
                                      {item.label}
                                    </a>
                                    {item.note ? ` (${item.note})` : ""}
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </section>
                      ) : project.resultBlock ? (
                        <section className="project-result" aria-label={project.resultBlock.title}>
                          <p className="meta-label">{project.resultBlock.title}</p>
                          {project.resultBlock.intro ? <p>{project.resultBlock.intro}</p> : null}
                          <ul className="project-result-list">
                            {project.resultBlock.items.map((item) => (
                              <li key={item.label}>
                                {item.href ? (
                                  <a
                                    href={item.href}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className={project.id === "exeed" ? "link-with-arrow" : undefined}
                                  >
                                    {item.label}
                                  </a>
                                ) : (
                                  <span>{item.label}</span>
                                )}
                                {item.note ? ` (${item.note})` : ""}
                              </li>
                            ))}
                          </ul>
                          <p><span className="meta-label">{isRu ? "Масштаб" : "Scale"}</span> {project.resultBlock.scaleText}</p>
                          <p><span className="meta-label">{isRu ? "Команды" : "Teams"}</span> {project.resultBlock.teamsText}</p>
                          <p><span className="meta-label">{isRu ? "Процессы" : "Process"}</span> {project.resultBlock.processText}</p>
                          <p><span className="meta-label">{isRu ? "Инструменты" : "Tools"}</span> {project.resultBlock.toolsText}</p>
                          <div>
                            <p className="meta-label">{project.resultBlock.challengesTitle}</p>
                            <ul className="project-result-list">
                              {project.resultBlock.challengesItems.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        </section>
                      ) : (
                        <>
                          <p>
                            <span className="meta-label">{ui.metaProblem}:</span> {project.problem}
                          </p>
                          <p>
                            <span className="meta-label">{ui.metaSolution}:</span> {project.solution}
                          </p>
                          <p>
                            <span className="meta-label">{ui.metaImpact}:</span> {project.impact}
                          </p>
                        </>
                      )}
                    </div>
                  </>
                )}

                <section className="project-tech-cloud" aria-label="Technologies">
                  {projectTechTags.map((tag) => (
                    <span className="project-tag" key={`${project.title}-${tag}`}>
                      {tag}
                    </span>
                  ))}
                </section>
              </div>
            </article>
          );
        })}
      </section>

      <section className="projects-actions">
        <button
          type="button"
          className="projects-to-top card"
          onClick={() => {
            const prefersReducedMotion =
              typeof window.matchMedia === "function" &&
              window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
          }}
        >
          <span>{isRu ? "Наверх" : "To top"}</span>
          <svg className="arrow-icon" viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M 14.6 10.8 L 0 10.8 L 0 8.4 L 14.6 8.4 L 7.9 1.7 L 9.6 0 L 19.2 9.6 L 9.6 19.2 L 7.9 17.5 Z"
              transform="translate(6.4 6.4) rotate(-90 9.5 9.5)"
              fill="currentColor"
            />
          </svg>
        </button>

        <a className="projects-to-top projects-to-call card" href={profile.callLink} target="_blank" rel="noreferrer noopener">
          <span>{profile.callToAction}</span>
          <svg className="arrow-icon" viewBox="0 0 32 32" aria-hidden="true">
            <path
              d="M 14.6 10.8 L 0 10.8 L 0 8.4 L 14.6 8.4 L 7.9 1.7 L 9.6 0 L 19.2 9.6 L 9.6 19.2 L 7.9 17.5 Z"
              transform="translate(6.4 6.4) rotate(-45 9.5 9.5)"
              fill="currentColor"
            />
          </svg>
        </a>
      </section>
    </main>
  );
}
