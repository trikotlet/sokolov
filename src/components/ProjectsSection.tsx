import { useState, type MouseEvent } from "react";
import type { Language, ProjectCard, UiText } from "../data/portfolio";
import { navigateTo, toAssetUrl, withBasePath } from "../utils/basePath";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ViewportVideo from "./ViewportVideo";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

type ProjectsSectionProps = {
  projects: ProjectCard[];
  ui: UiText;
  language: Language;
};

export default function ProjectsSection({ projects, ui, language }: ProjectsSectionProps) {
  const [hoveredCaseId, setHoveredCaseId] = useState<string | null>(null);
  const labels =
    language === "ru"
      ? {
          section: "\u041f\u0440\u043e\u0435\u043a\u0442\u044b",
          openProjectsPage: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432",
          projectTags: "\u0422\u0435\u0433\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430",
          teaserVideo: "\u0442\u0438\u0437\u0435\u0440-\u0432\u0438\u0434\u0435\u043e",
        }
      : {
          section: "Projects",
          openProjectsPage: "Open projects page",
          projectTags: "Project tags",
          teaserVideo: "teaser video",
        };

  const onCaseLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    navigateTo(path);
  };

  return (
    <section className="projects" id="projects" aria-label={labels.section}>
      <Card
        as="a"
        className="projects-hero projects-hero-link-card project-card-link"
        href={withBasePath("/projects")}
        onClick={(event) => onCaseLinkClick(event, "/projects")}
        aria-label={labels.openProjectsPage}
      >
        <CardHeader className="projects-hero-header">
          <CardTitle className="projects-hero-title">{ui.projectsTitle}</CardTitle>
          <CardDescription className="projects-lead">{ui.projectsLead}</CardDescription>
        </CardHeader>
      </Card>
      {projects.map((project) => {
        const imageSources = getResponsiveImageSources(project.img);
        const projectHref = `/projects#${getProjectAnchor(project.caseStudyId)}`;

        return (
          <Card
            as="a"
            className="project-card project-card-link"
            href={withBasePath(projectHref)}
            onClick={(event) => onCaseLinkClick(event, projectHref)}
            onMouseEnter={() => setHoveredCaseId(project.caseStudyId)}
            onMouseLeave={() => setHoveredCaseId((current) => (current === project.caseStudyId ? null : current))}
            onFocus={() => setHoveredCaseId(project.caseStudyId)}
            onBlur={() => setHoveredCaseId((current) => (current === project.caseStudyId ? null : current))}
            key={project.caseStudyId}
          >
            <div>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <div className="project-tags" aria-label={labels.projectTags}>
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {project.teaserVideo ? (
              <ViewportVideo
                src={project.teaserVideo}
                poster={project.teaserPoster}
                className="project-card-media"
                ariaLabel={`${project.title} ${labels.teaserVideo}`}
                rootMargin="320px 0px"
                playOnHover
                isHovered={hoveredCaseId === project.caseStudyId}
              />
            ) : imageSources ? (
              <picture>
                <source srcSet={imageSources.avif} type="image/avif" />
                <source srcSet={imageSources.webp} type="image/webp" />
                <img src={imageSources.fallback} alt={project.title} loading="lazy" />
              </picture>
            ) : (
              <img src={toAssetUrl(project.img)} alt={project.title} loading="lazy" />
            )}
          </Card>
        );
      })}
    </section>
  );
}
