import type { ProjectCard } from "../data/portfolio";
import { getProjectAnchor } from "../utils/projectAnchor";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import ViewportVideo from "./ViewportVideo";

type ProjectsSectionProps = {
  projects: ProjectCard[];
};

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="projects" id="projects" aria-label="Projects">
      {projects.map((project) => {
        const imageSources = getResponsiveImageSources(project.img);

        return (
          <a
            className="project-card card project-card-link"
            href={`/projects#${getProjectAnchor(project.caseStudyId)}`}
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
              <img src={project.img} alt={project.title} loading="lazy" />
            )}
          </a>
        );
      })}
    </section>
  );
}
