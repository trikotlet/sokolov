import { expect, test, type Page } from "@playwright/test";

function ensureMobileProject(projectName: string) {
  test.skip(!["iphone-12", "pixel-7"].includes(projectName), "Mobile-only suite");
}

function ensureIPhoneSnapshots(projectName: string) {
  test.skip(projectName !== "iphone-12", "Snapshot coverage is stored for a single canonical mobile viewport");
}

async function stabilizeVisualState(page: Page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.addStyleTag({
    content: `
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }

      video {
        opacity: 0 !important;
      }
    `,
  });
  await page.evaluate(async () => {
    const videos = Array.from(document.querySelectorAll("video"));
    for (const video of videos) {
      video.pause();
      video.currentTime = 0;
    }

    if ("fonts" in document) {
      await document.fonts.ready;
    }
  });
}

test.describe("mobile layout", () => {
  test("home page fits the viewport and exposes mobile navigation", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    await page.goto("/");

    await expect(page.getByRole("button", { name: "Открыть меню" })).toBeVisible();

    const hasHorizontalOverflow = await page.evaluate(() => {
      const root = document.documentElement;
      return root.scrollWidth > root.clientWidth + 1;
    });

    expect(hasHorizontalOverflow).toBe(false);

    await page.getByRole("button", { name: "Открыть меню" }).click();
    await expect(page.getByRole("dialog", { name: "Меню" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Проекты" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Опыт" })).toBeVisible();
  });

  test("mobile menu navigates to cv page", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    await page.goto("/");

    await page.getByRole("button", { name: "Открыть меню" }).click();
    await page.getByRole("link", { name: "Опыт" }).click();

    await expect(page).toHaveURL(/\/cv$/);
    await expect(page.getByRole("heading", { name: "Разработка в процессе…" })).toBeVisible();
  });

  test("projects page stays within the viewport on mobile", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    await page.goto("/projects");

    const hasHorizontalOverflow = await page.evaluate(() => {
      const root = document.documentElement;
      return root.scrollWidth > root.clientWidth + 1;
    });

    expect(hasHorizontalOverflow).toBe(false);
    await expect(page.getByRole("heading", { name: "Избранные проекты" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Система управления заказами (OMS)" })).toBeVisible();
  });

  test("mobile menu locks scroll and keeps the dialog inside the safe area", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    await page.goto("/");

    await page.getByRole("button", { name: "Открыть меню" }).click();
    const dialog = page.getByRole("dialog", { name: "Меню" });
    await expect(dialog).toBeVisible();

    const state = await page.evaluate(() => {
      const dialogElement = document.querySelector<HTMLElement>('[role="dialog"]');
      const style = window.getComputedStyle(document.body);
      const rect = dialogElement?.getBoundingClientRect();

      return {
        bodyOverflow: style.overflow,
        top: rect?.top ?? -1,
        bottomGap: rect ? window.innerHeight - rect.bottom : -1,
      };
    });

    expect(state.bodyOverflow).toBe("hidden");
    expect(state.top).toBeGreaterThanOrEqual(0);
    expect(state.bottomGap).toBeGreaterThanOrEqual(0);

    await page.getByRole("button", { name: "Закрыть меню" }).click();
    await expect(dialog).toBeHidden();
    await expect
      .poll(() => page.evaluate(() => window.getComputedStyle(document.body).overflow))
      .toBe("visible");
  });

  test("tapping the first project card opens the anchored project details", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    await page.goto("/");

    await page.getByRole("link", { name: /Система управления заказами \(OMS\)/ }).click();

    await expect(page).toHaveURL(/\/projects#evraz-oms$/);
    await expect(page.locator("#evraz-oms")).toBeVisible();
    await expect(page.getByRole("heading", { name: "Система управления заказами (OMS)" })).toBeVisible();
  });

  test("home page matches the mobile snapshot", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    ensureIPhoneSnapshots(test.info().project.name);
    await page.goto("/");
    await stabilizeVisualState(page);

    await expect(page).toHaveScreenshot("mobile-home.png", {
      fullPage: true,
    });
  });

  test("projects page matches the mobile snapshot", async ({ page }) => {
    ensureMobileProject(test.info().project.name);
    ensureIPhoneSnapshots(test.info().project.name);
    await page.goto("/projects");
    await stabilizeVisualState(page);

    await expect(page).toHaveScreenshot("mobile-projects.png", {
      fullPage: true,
    });
  });
});
