type ResponsiveImageSources = {
  avif: string;
  webp: string;
  fallback: string;
};

const RASTER_EXTENSION = /\.(png|jpe?g)$/i;

export function getResponsiveImageSources(src: string): ResponsiveImageSources | null {
  if (!RASTER_EXTENSION.test(src)) {
    return null;
  }

  const basePath = src.replace(/\.[^.]+$/, "");

  return {
    avif: `${basePath}.avif`,
    webp: `${basePath}.webp`,
    fallback: src,
  };
}
