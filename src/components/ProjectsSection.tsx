import { useState, type MouseEvent } from "react";
import type { ProjectCard, UiText } from "../data/portfolio";
import { navigateTo, toAssetUrl, withBasePath } from "../utils/basePath";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ViewportVideo from "./ViewportVideo";

type ProjectsSectionProps = {
  projects: ProjectCard[];
  ui: UiText;
};

export default function ProjectsSection({ projects, ui }: ProjectsSectionProps) {
  const [hoveredCaseId, setHoveredCaseId] = useState<string | null>(null);

  const onCaseLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    navigateTo(path);
  };

  return (
    <section className="projects" id="projects" aria-label="Projects">
      <a
        className="projects-hero projects-hero-link-card card project-card-link"
        href={withBasePath("/projects")}
        onClick={(event) => onCaseLinkClick(event, "/projects")}
        aria-label="Open projects page"
      >
        <h2 className="projects-hero-title">{ui.projectsTitle}</h2>
        <p className="projects-lead">{ui.projectsLead}</p>
      </a>
      {projects.map((project) => {
        const imageSources = getResponsiveImageSources(project.img);
        const projectHref = `/projects#${getProjectAnchor(project.caseStudyId)}`;

        return (
          <a
            className="project-card card project-card-link"
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
              <div className="project-tags" aria-label="Project tags">
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
                ariaLabel={`${project.title} teaser video`}
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
          </a>
        );
      })}
    </section>
  );
}
