import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function normalizeBasePath(rawBasePath: string | undefined): string {
  const value = (rawBasePath || "/").trim();
  if (!value || value === "/") {
    return "/";
  }

  const withLeadingSlash = value.charAt(0) === "/" ? value : `/${value}`;
  return withLeadingSlash.charAt(withLeadingSlash.length - 1) === "/"
    ? withLeadingSlash
    : `${withLeadingSlash}/`;
}

const envBasePath =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.VITE_BASE_PATH;

export default defineConfig({
  base: normalizeBasePath(envBasePath),
  plugins: [react()],
});
