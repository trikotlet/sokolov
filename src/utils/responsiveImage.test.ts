import { describe, expect, it } from "vitest";
import { getResponsiveImageSources } from "./responsiveImage";

describe("getResponsiveImageSources", () => {
  it("derives avif and webp variants for png sources", () => {
    expect(getResponsiveImageSources("/exeed-artifacts/model-comparison.png")).toEqual({
      avif: "/exeed-artifacts/model-comparison.avif",
      webp: "/exeed-artifacts/model-comparison.webp",
      fallback: "/exeed-artifacts/model-comparison.png",
    });
  });

  it("derives avif and webp variants for jpeg sources regardless of case", () => {
    expect(getResponsiveImageSources("/media/Cover.JPG")).toEqual({
      avif: "/media/Cover.avif",
      webp: "/media/Cover.webp",
      fallback: "/media/Cover.JPG",
    });
  });

  it("returns null for already-modern or vector formats", () => {
    expect(getResponsiveImageSources("/prompter.webp")).toBeNull();
    expect(getResponsiveImageSources("/project-1.svg")).toBeNull();
    expect(getResponsiveImageSources("/photo.avif")).toBeNull();
  });

  it("returns null for external sources", () => {
    expect(getResponsiveImageSources("https://cdn.example.com/photo.png")).toBeNull();
  });

  it("ignores raster sources with a query string", () => {
    expect(getResponsiveImageSources("/photo.png?v=1")).toBeNull();
  });
});
