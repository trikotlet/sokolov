import { useState } from "react";
import type { CaseStudy, Language, UiText } from "../data/portfolio";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ViewportVideo from "./ViewportVideo";

type ProjectsPageProps = {
  caseStudies: CaseStudy[];
  ui: UiText;
  language: Language;
};

const projectTechTags = ["React", "Vue", "Python", "Go", "GitLab", "Docker"];

export default function ProjectsPage({ caseStudies, ui, language }: ProjectsPageProps) {
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
        <p className="overline">{ui.projectsOverline}</p>
        <h1>{ui.projectsTitle}</h1>
        <p className="projects-lead">{ui.projectsLead}</p>
      </section>

      <section className="projects-expanded" aria-label="Expanded project cards">
        {caseStudies.map((project) => {
          const hasArtifactImages = Boolean(project.artifactImages?.length);
          const fallbackImageSources = getResponsiveImageSources(project.img);

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
                      <img src={project.img} alt={project.title} loading="lazy" />
                    )}
                  </button>
                ) : null}
              </div>

              <div className="project-expanded-content">
                <h2>{project.title}</h2>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-summary">{project.summary}</p>

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
                              <a href={item.href} target="_blank" rel="noreferrer noopener">
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
    </main>
  );
}
