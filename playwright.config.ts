import { defineConfig, devices } from "@playwright/test";
import { normalizeBasePathForVite } from "./base-path.mjs";

const basePath = normalizeBasePathForVite(process.env.VITE_BASE_PATH);
const baseURL = `http://127.0.0.1:4173${basePath}`;

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run build && npm run preview -- --host 127.0.0.1 --port 4173",
    url: baseURL,
    reuseExistingServer: false,
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "iphone-12",
      use: { ...devices["iPhone 12"] },
    },
    {
      name: "pixel-7",
      use: { ...devices["Pixel 7"] },
    },
  ],
});
