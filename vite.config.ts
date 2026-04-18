import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { normalizeBasePathForVite } from "./base-path.mjs";

const envBasePath =
  (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env
    ?.VITE_BASE_PATH;

export default defineConfig({
  base: normalizeBasePathForVite(envBasePath),
  plugins: [react()],
});
