import { useMemo, useState } from "react";
import type { CaseStudy, Language, Profile, UiText } from "../data/portfolio";
import { toAssetUrl } from "../utils/basePath";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ArrowIcon from "./ArrowIcon";
import ViewportVideo from "./ViewportVideo";
import Button from "./ui/button";
import Dialog from "./ui/dialog";

type ProjectsPageProps = {
  caseStudies: CaseStudy[];
  ui: UiText;
  language: Language;
  profile: Profile;
};

type StoryProject = CaseStudy & {
  starBlock: NonNullable<CaseStudy["starBlock"]>;
};

type Artifact = {
  key: string;
  kind: "video" | "image";
  src: string;
  poster?: string;
  alt: string;
  title: string;
  description: string;
};

type SelectedArtifactState = {
  projectTitle: string;
  artifacts: Artifact[];
  index: number;
};

const projectTechTags = ["React", "Vue", "Python", "Go", "GitLab", "Docker"];

type StoryCanvasProps = {
  project: StoryProject;
  isRu: boolean;
  ui: UiText;
};

function StoryCanvas({ project, isRu, ui }: StoryCanvasProps) {
  const isOmsCase = project.id === "evraz-oms";
  const isExeedCase = project.id === "exeed";
  const labels = isRu
    ? {
        starTitle: "STAR Story",
        situation: "\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f",
        task: "\u0417\u0430\u0434\u0430\u0447\u0430",
        action: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
        result: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
        roleTitle: "\u0420\u043e\u043b\u044c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431",
        role: "\u041c\u043e\u044f \u0440\u043e\u043b\u044c",
        scope: "\u041c\u0430\u0441\u0448\u0442\u0430\u0431",
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
    <div
      className={`project-flow project-flow-oms${isOmsCase ? " project-flow-oms-bento" : ""}${isExeedCase ? " project-flow-exeed-bento" : ""}`}
    >
      <section className="project-oms-star-canvas" aria-label={labels.starTitle}>
        <article className="project-oms-star-card project-oms-star-card--situation">
          <p className="project-oms-star-head">
            <span className="meta-label">{labels.situation}</span>
          </p>
          <p>{project.starBlock.situation}</p>
        </article>
        <article className="project-oms-star-card project-oms-star-card--task">
          <p className="project-oms-star-head">
            <span className="meta-label">{labels.task}</span>
          </p>
          {project.starBlock.taskIntro ? <p>{project.starBlock.taskIntro}</p> : null}
          {project.starBlock.taskItems?.length ? (
            <ul className="project-result-list project-bullet-list">
              {project.starBlock.taskItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p>{project.starBlock.task}</p>
          )}
        </article>
        <article className="project-oms-star-card project-oms-star-card--action">
          <p className="project-oms-star-head">
            <span className="meta-label">{labels.action}</span>
          </p>
          {project.starBlock.actionIntro ? <p>{project.starBlock.actionIntro}</p> : null}
          {project.starBlock.actionItems?.length ? (
            <ul className="project-result-list project-bullet-list">
              {project.starBlock.actionItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <ul className="project-result-list">
              {project.starBlock.actions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {project.starBlock.actionNotes?.length ? (
            <>
              {project.starBlock.actionNotes.map((item) => (
                <p key={item} className="project-oms-star-note">
                  {item}
                </p>
              ))}
            </>
          ) : showActionContext ? (
            <>
              {processText ? <p className="project-oms-star-note">{processText}</p> : null}
              {toolsText ? <p className="project-oms-star-note">{toolsText}</p> : null}
            </>
          ) : null}
        </article>
        <article className="project-oms-star-card project-oms-star-card--result">
          <p className="project-oms-star-head">
            <span className="meta-label">{labels.result}</span>
          </p>
          <p>{project.starBlock.result}</p>
          {project.starBlock.resultItems?.length ? (
            <ul
              className={`project-result-list project-result-links${project.starBlock.resultNotes?.length ? " project-bullet-list" : ""}`}
            >
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
          {project.starBlock.resultNotes?.map((item) => (
            <p key={item} className="project-oms-star-note">
              {item}
            </p>
          ))}
        </article>
      </section>

      <section className="project-oms-role" aria-label={labels.roleTitle}>
        <article className="project-oms-role-card">
          <p className="meta-label">{labels.role}</p>
          {project.resultBlock?.roleIntro ? <p>{project.resultBlock.roleIntro}</p> : <p>{roleText}</p>}
          {project.resultBlock?.roleItems?.length ? (
            <ul className="project-result-list project-bullet-list">
              {project.resultBlock.roleItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </article>
        <article className="project-oms-role-card">
          <p className="meta-label">{labels.scope}</p>
          <p>{scopeText}</p>
          {project.resultBlock?.scaleNotes?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </article>
      </section>
    </div>
  );
}

export default function ProjectsPage({ caseStudies, ui, language, profile }: ProjectsPageProps) {
  const [selectedArtifact, setSelectedArtifact] = useState<SelectedArtifactState | null>(null);
  const isRu = language === "ru";
  const labels = useMemo(
    () =>
      isRu
        ? {
            overview: "\u041e\u0431\u0437\u043e\u0440 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432",
            expandedCards: "\u0420\u0430\u0437\u0432\u0435\u0440\u043d\u0443\u0442\u044b\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432",
            artifacts: "\u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u044b",
            teaserVideo: "\u0442\u0438\u0437\u0435\u0440-\u0432\u0438\u0434\u0435\u043e",
            image: "\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",
            openArtifact: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442",
            artifactGallery: "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u0430",
            closeArtifact: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0430\u0440\u0442\u0435\u0444\u0430\u043a\u0442\u0430",
            previous: "\u041d\u0430\u0437\u0430\u0434",
            next: "\u0414\u0430\u043b\u0435\u0435",
            item: "\u042d\u043b\u0435\u043c\u0435\u043d\u0442",
            of: "\u0438\u0437",
            starSummary: "\u041a\u0440\u0430\u0442\u043a\u043e\u0435 STAR-\u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043a\u0435\u0439\u0441\u0430",
            technologies: "\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438",
            toTop: "\u041d\u0430\u0432\u0435\u0440\u0445",
            role: "\u0420\u043e\u043b\u044c",
            context: "\u041a\u043e\u043d\u0442\u0435\u043a\u0441\u0442",
            goal: "\u0426\u0435\u043b\u044c",
            situation: "\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u044f",
            task: "\u0417\u0430\u0434\u0430\u0447\u0430",
            action: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f",
            result: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
            scale: "\u041c\u0430\u0441\u0448\u0442\u0430\u0431",
            teams: "\u041a\u043e\u043c\u0430\u043d\u0434\u044b",
            process: "\u041f\u0440\u043e\u0446\u0435\u0441\u0441\u044b",
            tools: "\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b",
          }
        : {
            overview: "Projects overview",
            expandedCards: "Expanded project cards",
            artifacts: "artifacts",
            teaserVideo: "teaser video",
            image: "image",
            openArtifact: "Open artifact",
            artifactGallery: "Artifact viewer",
            closeArtifact: "Close artifact viewer",
            previous: "Previous",
            next: "Next",
            item: "Item",
            of: "of",
            starSummary: "STAR case summary",
            technologies: "Technologies",
            toTop: "To top",
            role: "Role",
            context: "Context",
            goal: "Goal",
            situation: "Situation",
            task: "Task",
            action: "Action",
            result: "Result",
            scale: "Scale",
            teams: "Teams",
            process: "Process",
            tools: "Tools",
          },
    [isRu]
  );

  const openArtifactDialog = (projectTitle: string, artifacts: Artifact[], index: number) => {
    setSelectedArtifact({ projectTitle, artifacts, index });
  };

  const closeArtifactDialog = () => setSelectedArtifact(null);

  const showAdjacentArtifact = (direction: -1 | 1) => {
    setSelectedArtifact((current) => {
      if (!current) {
        return current;
      }

      const nextIndex = (current.index + direction + current.artifacts.length) % current.artifacts.length;
      return { ...current, index: nextIndex };
    });
  };

  const currentArtifact = selectedArtifact ? selectedArtifact.artifacts[selectedArtifact.index] : null;

  return (
    <>
      <main className="projects-page">
        <section className="projects-hero card" aria-label={labels.overview}>
          {ui.projectsOverline ? <p className="overline">{ui.projectsOverline}</p> : null}
          <h1>{ui.projectsTitle}</h1>
          <p className="projects-lead">{ui.projectsLead}</p>
        </section>

        <section className="projects-expanded" aria-label={labels.expandedCards}>
          {caseStudies.map((project) => {
            const hasStoryCanvas = Boolean(project.starBlock);
            const artifacts: Artifact[] = [];
            const primaryArtifactImage = project.artifactImages?.[0];

            if (project.teaserVideo) {
              artifacts.push({
                key: `${project.id}-video`,
                kind: "video",
                src: project.teaserVideo,
                poster: project.teaserPoster,
                alt: `${project.title} ${labels.teaserVideo}`,
                title: project.title,
                description: labels.teaserVideo,
              });
            }

            project.artifactImages?.forEach((artifactSrc, artifactIndex) => {
              artifacts.push({
                key: `${project.id}-image-${artifactIndex + 1}`,
                kind: "image",
                src: artifactSrc,
                alt: `${project.title} ${labels.image} ${artifactIndex + 1}`,
                title: project.title,
                description: `${labels.item} ${artifactIndex + 1}`,
              });
            });

            if (artifacts.length === 0) {
              artifacts.push({
                key: `${project.id}-fallback`,
                kind: "image",
                src: project.img,
                alt: project.title,
                title: project.title,
                description: labels.image,
              });
            }

            return (
              <article className="project-expanded card" id={getProjectAnchor(project.id)} key={project.id}>
                <div className="project-expanded-artifacts artifact-cars" aria-label={`${project.title} ${labels.artifacts}`}>
                  {project.teaserVideo ? (
                    <button
                      type="button"
                      className="artifact-card artifact-card-main"
                      onClick={() => openArtifactDialog(project.title, artifacts, 0)}
                      aria-label={`${labels.openArtifact}: ${project.title} ${labels.teaserVideo}`}
                    >
                      <ViewportVideo
                        src={project.teaserVideo}
                        poster={project.teaserPoster}
                        className="project-expanded-media"
                        ariaLabel={`${project.title} ${labels.teaserVideo}`}
                        rootMargin="360px 0px"
                      />
                    </button>
                  ) : primaryArtifactImage ? (
                    <button
                      type="button"
                      className="artifact-card artifact-card-main"
                      onClick={() => openArtifactDialog(project.title, artifacts, 0)}
                      aria-label={`${labels.openArtifact}: ${project.title} ${labels.image} 1`}
                    >
                      {(() => {
                        const primaryImageSources = getResponsiveImageSources(primaryArtifactImage);

                        return primaryImageSources ? (
                          <picture>
                            <source srcSet={primaryImageSources.avif} type="image/avif" />
                            <source srcSet={primaryImageSources.webp} type="image/webp" />
                            <img src={primaryImageSources.fallback} alt={`${project.title} ${labels.image} 1`} loading="lazy" />
                          </picture>
                        ) : (
                          <img src={toAssetUrl(primaryArtifactImage)} alt={`${project.title} ${labels.image} 1`} loading="lazy" />
                        );
                      })()}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="artifact-card artifact-card-main"
                      onClick={() => openArtifactDialog(project.title, artifacts, 0)}
                      aria-label={`${labels.openArtifact}: ${project.title}`}
                    >
                      {(() => {
                        const fallbackImageSources = getResponsiveImageSources(project.img);

                        return fallbackImageSources ? (
                          <picture>
                            <source srcSet={fallbackImageSources.avif} type="image/avif" />
                            <source srcSet={fallbackImageSources.webp} type="image/webp" />
                            <img src={fallbackImageSources.fallback} alt={project.title} loading="lazy" />
                          </picture>
                        ) : (
                          <img src={toAssetUrl(project.img)} alt={project.title} loading="lazy" />
                        );
                      })()}
                    </button>
                  )}
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
                            <span className="meta-label">{labels.role}</span>
                            <p>{project.resultBlock.roleText}</p>
                          </div>
                          {project.resultBlock.contextText ? (
                            <div>
                              <span className="meta-label">{labels.context}</span>
                              <p>{project.resultBlock.contextText}</p>
                            </div>
                          ) : null}
                          {project.resultBlock.goalText ? (
                            <div>
                              <span className="meta-label">{labels.goal}</span>
                              <p>{project.resultBlock.goalText}</p>
                            </div>
                          ) : null}
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
                          <section className="project-star" aria-label={labels.starSummary}>
                            <div className="project-star-item">
                              <p className="meta-label">{labels.situation}</p>
                              <p>{project.starBlock.situation}</p>
                            </div>
                            <div className="project-star-item">
                              <p className="meta-label">{labels.task}</p>
                              {project.starBlock.taskIntro ? <p>{project.starBlock.taskIntro}</p> : null}
                              {project.starBlock.taskItems?.length ? (
                                <ul className="project-result-list project-bullet-list">
                                  {project.starBlock.taskItems.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <p>{project.starBlock.task}</p>
                              )}
                            </div>
                            <div className="project-star-item">
                              <p className="meta-label">{labels.action}</p>
                              {project.starBlock.actionIntro ? <p>{project.starBlock.actionIntro}</p> : null}
                              {project.starBlock.actionItems?.length ? (
                                <ul className="project-result-list project-bullet-list">
                                  {project.starBlock.actionItems.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              ) : (
                                <ul className="project-result-list">
                                  {project.starBlock.actions.map((item) => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </ul>
                              )}
                              {project.starBlock.actionNotes?.map((item) => (
                                <p key={item}>{item}</p>
                              ))}
                            </div>
                            <div className="project-star-item">
                              <p className="meta-label">{labels.result}</p>
                              <p>{project.starBlock.result}</p>
                              {project.starBlock.resultItems?.length ? (
                                <ul
                                  className={`project-result-list project-result-links${project.starBlock.resultNotes?.length ? " project-bullet-list" : ""}`}
                                >
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
                              {project.starBlock.resultNotes?.map((item) => (
                                <p key={item}>{item}</p>
                              ))}
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
                            <p>
                              <span className="meta-label">{labels.scale}</span> {project.resultBlock.scaleText}
                            </p>
                            <p>
                              <span className="meta-label">{labels.teams}</span> {project.resultBlock.teamsText}
                            </p>
                            <p>
                              <span className="meta-label">{labels.process}</span> {project.resultBlock.processText}
                            </p>
                            <p>
                              <span className="meta-label">{labels.tools}</span> {project.resultBlock.toolsText}
                            </p>
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

                  <section className="project-tech-cloud" aria-label={labels.technologies}>
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
            <span>{labels.toTop}</span>
            <ArrowIcon direction="up" />
          </button>

          <a
            className="projects-to-top projects-to-call card"
            href={profile.callLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span>{profile.callToAction}</span>
            <ArrowIcon direction="up-right" />
          </a>
        </section>
      </main>

      <Dialog
        open={Boolean(currentArtifact)}
        onOpenChange={(open) => {
          if (!open) {
            closeArtifactDialog();
          }
        }}
        title={currentArtifact?.title || labels.artifactGallery}
        description={
          currentArtifact && selectedArtifact
            ? `${currentArtifact.description} - ${labels.item} ${selectedArtifact.index + 1} ${labels.of} ${selectedArtifact.artifacts.length}`
            : undefined
        }
        closeLabel={labels.closeArtifact}
        footer={
          selectedArtifact && selectedArtifact.artifacts.length > 1 ? (
            <>
              <Button
                as="button"
                type="button"
                variant="outline"
                size="sm"
                className="artifact-dialog__nav-button"
                onClick={() => showAdjacentArtifact(-1)}
              >
                {labels.previous}
              </Button>
              <Button
                as="button"
                type="button"
                variant="outline"
                size="sm"
                className="artifact-dialog__nav-button"
                onClick={() => showAdjacentArtifact(1)}
              >
                {labels.next}
              </Button>
            </>
          ) : undefined
        }
      >
        {currentArtifact ? (
          <div className="artifact-dialog__content">
            <div className="artifact-dialog__media-shell">
              {currentArtifact.kind === "video" ? (
                <video
                  className="artifact-dialog__media"
                  src={toAssetUrl(currentArtifact.src)}
                  poster={currentArtifact.poster ? toAssetUrl(currentArtifact.poster) : undefined}
                  controls
                  autoPlay
                  muted
                  playsInline
                />
              ) : (() => {
                  const imageSources = getResponsiveImageSources(currentArtifact.src);

                  return imageSources ? (
                    <picture>
                      <source srcSet={imageSources.avif} type="image/avif" />
                      <source srcSet={imageSources.webp} type="image/webp" />
                      <img className="artifact-dialog__media" src={imageSources.fallback} alt={currentArtifact.alt} />
                    </picture>
                  ) : (
                    <img className="artifact-dialog__media" src={toAssetUrl(currentArtifact.src)} alt={currentArtifact.alt} />
                  );
                })()}
            </div>
            {selectedArtifact && selectedArtifact.artifacts.length > 1 ? (
              <div className="artifact-dialog__thumbs" aria-label={labels.artifactGallery}>
                {selectedArtifact.artifacts.map((artifact, index) => {
                  const isActive = index === selectedArtifact.index;

                  return (
                    <button
                      key={artifact.key}
                      type="button"
                      className={`artifact-dialog__thumb${isActive ? " is-active" : ""}`}
                      onClick={() => setSelectedArtifact((current) => (current ? { ...current, index } : current))}
                      aria-label={`${labels.openArtifact}: ${artifact.title} ${index + 1}`}
                    >
                      {artifact.kind === "video" ? (
                        artifact.poster ? (
                          <img src={toAssetUrl(artifact.poster)} alt={artifact.alt} />
                        ) : (
                          <span className="artifact-dialog__thumb-fallback">Video</span>
                        )
                      ) : (
                        <img src={toAssetUrl(artifact.src)} alt={artifact.alt} />
                      )}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        ) : null}
      </Dialog>
    </>
  );
}

