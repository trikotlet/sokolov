function normalizeRawBasePath(rawBasePath) {
  const value = rawBasePath === undefined ? "/" : rawBasePath.trim();
  if (value === "" || value === "/") {
    return "/";
  }

  return value.startsWith("/") ? value : `/${value}`;
}

export function normalizeBasePathForVite(rawBasePath) {
  const withLeadingSlash = normalizeRawBasePath(rawBasePath);
  return withLeadingSlash.endsWith("/") ? withLeadingSlash : `${withLeadingSlash}/`;
}

export function normalizeBasePathForRuntime(rawBasePath) {
  const viteBasePath = normalizeBasePathForVite(rawBasePath);
  return viteBasePath === "/" ? "" : viteBasePath.slice(0, -1);
}
