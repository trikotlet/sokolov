const RAW_BASE_URL = import.meta.env.BASE_URL || "/";
const BASE_PATH = RAW_BASE_URL.endsWith("/") ? RAW_BASE_URL.slice(0, -1) : RAW_BASE_URL;

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return BASE_PATH ? `${BASE_PATH}${path}` : path;
}

export function stripBasePath(pathname: string): string {
  if (!BASE_PATH) {
    return pathname;
  }

  if (pathname === BASE_PATH) {
    return "/";
  }

  if (pathname.startsWith(`${BASE_PATH}/`)) {
    return pathname.slice(BASE_PATH.length) || "/";
  }

  return pathname;
}

export function toAssetUrl(src: string): string {
  if (!src) {
    return src;
  }

  if (
    /^(?:[a-z]+:)?\/\//i.test(src) ||
    src.startsWith("data:") ||
    src.startsWith("mailto:") ||
    src.startsWith("tel:") ||
    src.startsWith("#")
  ) {
    return src;
  }

  return src.startsWith("/") ? withBasePath(src) : src;
}

export function navigateTo(path: string): void {
  const href = withBasePath(path);
  window.history.pushState({}, "", href);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
