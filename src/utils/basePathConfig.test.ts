import { describe, expect, it } from "vitest";
import { normalizeBasePathForRuntime, normalizeBasePathForVite } from "../../base-path.mjs";
import { render404Page } from "../../scripts/generate-404.mjs";

const TEMPLATE = 'var repoBase = "__BASE_PATH__";';

describe("base path config", () => {
  it.each([
    [undefined, "/"],
    ["", "/"],
    ["/", "/"],
    ["sokolov", "/sokolov/"],
    ["/sokolov", "/sokolov/"],
    ["/sokolov/", "/sokolov/"],
    [" nested/path ", "/nested/path/"],
  ])("normalizes %s for Vite", (rawBasePath, expectedBasePath) => {
    expect(normalizeBasePathForVite(rawBasePath)).toBe(expectedBasePath);
  });

  it.each([
    [undefined, ""],
    ["", ""],
    ["/", ""],
    ["sokolov", "/sokolov"],
    ["/sokolov", "/sokolov"],
    ["/sokolov/", "/sokolov"],
    [" nested/path ", "/nested/path"],
  ])("normalizes %s for runtime routing", (rawBasePath, expectedBasePath) => {
    expect(normalizeBasePathForRuntime(rawBasePath)).toBe(expectedBasePath);
  });

  it("renders the 404 redirect page with a root base path", () => {
    expect(render404Page(TEMPLATE, undefined)).toBe('var repoBase = "";');
  });

  it("renders the 404 redirect page with a project base path", () => {
    expect(render404Page(TEMPLATE, "/sokolov/")).toBe('var repoBase = "/sokolov";');
  });

  it("fails fast when the 404 template token is missing", () => {
    expect(() => render404Page("<html></html>", "/sokolov")).toThrow("404 template is missing the __BASE_PATH__ token");
  });
});
