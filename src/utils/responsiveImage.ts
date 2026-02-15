import { toAssetUrl } from "./basePath";

type ResponsiveImageSources = {
  avif: string;
  webp: string;
  fallback: string;
};

const RASTER_EXTENSION = /\.(png|jpe?g)$/i;

export function getResponsiveImageSources(src: string): ResponsiveImageSources | null {
  const resolvedSrc = toAssetUrl(src);

  if (!RASTER_EXTENSION.test(resolvedSrc)) {
    return null;
  }

  const basePath = resolvedSrc.replace(/\.[^.]+$/, "");

  return {
    avif: `${basePath}.avif`,
    webp: `${basePath}.webp`,
    fallback: resolvedSrc,
  };
}
