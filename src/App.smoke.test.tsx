import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { afterEach, describe, expect, it } from "vitest";
import App from "./App";

(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const DEFAULT_HEAD = `
  <meta name="description" content="" />
  <meta property="og:title" content="" />
  <meta property="og:description" content="" />
  <meta property="og:url" content="" />
  <meta property="og:locale" content="" />
  <meta name="twitter:title" content="" />
  <meta name="twitter:description" content="" />
  <link rel="canonical" href="https://sokolovroman.ru/" />
`;

let root: Root | null = null;
let mountNode: HTMLDivElement | null = null;

function setupDom(pathname: string) {
  document.head.innerHTML = DEFAULT_HEAD;
  document.body.innerHTML = '<div id="root"></div>';
  localStorage.clear();
  window.history.replaceState({}, "", pathname);

  mountNode = document.getElementById("root") as HTMLDivElement;
  root = createRoot(mountNode);
}

async function renderApp() {
  if (!root) {
    throw new Error("Root is not initialized");
  }

  await act(async () => {
    root?.render(<App />);
    await Promise.resolve();
  });
}

afterEach(() => {
  if (root) {
    act(() => {
      root?.unmount();
    });
  }
  root = null;
  mountNode = null;
});

if (!HTMLMediaElement.prototype.play) {
  Object.defineProperty(HTMLMediaElement.prototype, "play", {
    configurable: true,
    value: () => Promise.resolve(),
  });
} else {
  HTMLMediaElement.prototype.play = () => Promise.resolve();
}

HTMLMediaElement.prototype.pause = () => undefined;

describe("App smoke", () => {
  it("renders root route and updates base metadata", async () => {
    setupDom("/");
    await renderApp();

    const canonical = document.querySelector('link[rel="canonical"]');
    const robots = document.querySelector('meta[name="robots"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    expect(document.title).toBe("Roman Sokolov - Portfolio");
    expect(canonical?.getAttribute("href")).toBe("https://sokolovroman.ru/");
    expect(ogUrl?.getAttribute("content")).toBe("https://sokolovroman.ru/");
    expect(robots?.getAttribute("content")).toBe("noindex,nofollow,noarchive");
  });

  it("renders /projects route and updates projects metadata", async () => {
    setupDom("/projects");
    await renderApp();

    const canonical = document.querySelector('link[rel="canonical"]');
    const robots = document.querySelector('meta[name="robots"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');

    expect(document.title).toBe("Roman Sokolov - Проекты");
    expect(canonical?.getAttribute("href")).toBe("https://sokolovroman.ru/projects");
    expect(ogUrl?.getAttribute("content")).toBe("https://sokolovroman.ru/projects");
    expect(robots?.getAttribute("content")).toBe("noindex,nofollow,noarchive");
  });
});
