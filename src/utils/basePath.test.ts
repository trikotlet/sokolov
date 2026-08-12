import { afterEach, describe, expect, it, vi } from "vitest";
import { navigateTo, stripBasePath, toAssetUrl, withBasePath } from "./basePath";

describe("basePath helpers with root base", () => {
  afterEach(() => {
    window.history.replaceState({}, "", "/");
  });

  it("withBasePath keeps root-relative paths unchanged", () => {
    expect(withBasePath("/")).toBe("/");
    expect(withBasePath("/projects")).toBe("/projects");
    expect(withBasePath("/projects#evraz-oms")).toBe("/projects#evraz-oms");
  });

  it("withBasePath leaves non-root paths untouched", () => {
    expect(withBasePath("relative/path")).toBe("relative/path");
    expect(withBasePath("https://example.com/x")).toBe("https://example.com/x");
  });

  it("stripBasePath is identity with root base", () => {
    expect(stripBasePath("/")).toBe("/");
    expect(stripBasePath("/projects")).toBe("/projects");
    expect(stripBasePath("/cv")).toBe("/cv");
  });

  it("toAssetUrl passes external and special schemes through", () => {
    expect(toAssetUrl("https://example.com/a.png")).toBe("https://example.com/a.png");
    expect(toAssetUrl("http://example.com/a.png")).toBe("http://example.com/a.png");
    expect(toAssetUrl("//cdn.example.com/a.png")).toBe("//cdn.example.com/a.png");
    expect(toAssetUrl("data:image/svg+xml,abc")).toBe("data:image/svg+xml,abc");
    expect(toAssetUrl("mailto:hi@example.com")).toBe("mailto:hi@example.com");
    expect(toAssetUrl("tel:+70000000000")).toBe("tel:+70000000000");
    expect(toAssetUrl("#contact")).toBe("#contact");
  });

  it("toAssetUrl keeps local and relative asset paths intact", () => {
    expect(toAssetUrl("/project-1.svg")).toBe("/project-1.svg");
    expect(toAssetUrl("img/photo.webp")).toBe("img/photo.webp");
    expect(toAssetUrl("")).toBe("");
  });

  it("navigateTo pushes history entry and emits popstate", () => {
    const onPopState = vi.fn();
    window.addEventListener("popstate", onPopState);

    navigateTo("/projects");

    expect(window.location.pathname).toBe("/projects");
    expect(onPopState).toHaveBeenCalledTimes(1);

    window.removeEventListener("popstate", onPopState);
  });
});
