import type { MouseEvent } from "react";
import type { ProjectCard } from "../data/portfolio";
import { navigateTo, toAssetUrl, withBasePath } from "../utils/basePath";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ViewportVideo from "./ViewportVideo";

type ProjectsSectionProps = {
  projects: ProjectCard[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  const onCaseLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    navigateTo(path);
  };

  return (
    <section className="projects" id="projects" aria-label="Projects">
      {projects.map((project) => {
        const imageSources = getResponsiveImageSources(project.img);
        const projectHref = `/projects#${getProjectAnchor(project.caseStudyId)}`;

        return (
          <a
            className="project-card card project-card-link"
            href={withBasePath(projectHref)}
            onClick={(event) => onCaseLinkClick(event, projectHref)}
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
