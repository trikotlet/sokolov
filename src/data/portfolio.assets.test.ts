import { describe, expect, it } from "vitest";
import { getResponsiveImageSources } from "../utils/responsiveImage";
import { contentByLanguage } from "./portfolio";

const publicFiles = import.meta.glob("../../public/**/*");

function hasPublicFile(assetPath: string): boolean {
  return `../../public${assetPath}` in publicFiles;
}

function collectReferencedAssets(): string[] {
  const assets = new Set<string>();

  for (const content of Object.values(contentByLanguage)) {
    for (const card of content.projectCards) {
      assets.add(card.img);
      if (card.teaserVideo) {
        assets.add(card.teaserVideo);
      }
      if (card.teaserPoster) {
        assets.add(card.teaserPoster);
      }
    }

    for (const study of content.caseStudies) {
      assets.add(study.img);
      if (study.teaserVideo) {
        assets.add(study.teaserVideo);
      }
      if (study.teaserPoster) {
        assets.add(study.teaserPoster);
      }
      for (const artifact of study.artifactImages ?? []) {
        assets.add(artifact);
      }
    }
  }

  return [...assets];
}

describe("portfolio assets", () => {
  it("references only files that exist in public/", () => {
    const missing = collectReferencedAssets().filter((asset) => !hasPublicFile(asset));

    expect(missing, `missing public assets: ${missing.join(", ")}`).toEqual([]);
  });

  it("has avif and webp variants for every referenced raster image", () => {
    const missingVariants: string[] = [];

    for (const asset of collectReferencedAssets()) {
      const sources = getResponsiveImageSources(asset);
      if (!sources) {
        continue;
      }

      if (!hasPublicFile(sources.avif)) {
        missingVariants.push(sources.avif);
      }
      if (!hasPublicFile(sources.webp)) {
        missingVariants.push(sources.webp);
      }
    }

    expect(missingVariants, `missing responsive variants: ${missingVariants.join(", ")}`).toEqual([]);
  });
});
