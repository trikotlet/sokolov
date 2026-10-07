import { expect, test, type Page } from "@playwright/test";

async function openMobileMenuIfNeeded(projectName: string, page: Page) {
  if (!["iphone-12", "pixel-7"].includes(projectName)) {
    return;
  }

  await page.getByRole("button", { name: "Открыть меню" }).click();
}

test.describe("portfolio smoke", () => {
  test("keeps rendering when a redirect contains URL control characters", async ({ page }) => {
    const errors: Error[] = [];
    page.on("pageerror", (error) => errors.push(error));
    await page.goto("./?p=%2F%09%2Fevil.com");
    await expect(page.locator(".brand")).toBeVisible();
    expect(errors).toEqual([]);
  });

  test("returns to the top when navigating home from a scrolled project page", async ({ page }) => {
    await page.goto("./projects");
    await expect(page.locator("#exeed")).toBeAttached();
    await page.evaluate(() => window.scrollTo({ top: 1500, behavior: "instant" }));
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBeGreaterThan(1000);
    await page.locator(".brand").click();
    await expect(page.locator(".hero-left")).toBeVisible();
    await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  });

  test("keeps video posters still when reduced motion is enabled", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto("./projects");
    const video = page.locator("#evraz-oms video");
    await expect(video).toBeVisible();
    await expect(video).not.toHaveAttribute("src");
    await expect(video).toHaveJSProperty("paused", true);

    await page.emulateMedia({ reducedMotion: "no-preference" });
    await expect(video).toHaveAttribute("src", /evraz_video_crop\.mp4$/);
    await page.emulateMedia({ reducedMotion: "reduce" });
    await expect(video).not.toHaveAttribute("src");
    await expect(video).toHaveJSProperty("paused", true);
  });

  test("restores a Pages redirect with its query and project anchor", async ({ page, baseURL }) => {
    if (!baseURL) {
      throw new Error("The test baseURL must be configured");
    }
    await page.goto("./?p=%2Fprojects&s=%3Futm%3Dtest&h=%23exeed");
    await expect(page).toHaveURL(new URL("projects?utm=test#exeed", baseURL).href);
    await expect(page.locator("#exeed")).toBeInViewport();
  });

  test("renders the home page in Russian by default", async ({ page }) => {
    await page.goto("./");

    await expect(page).toHaveTitle("Roman Sokolov - Portfolio");
    await expect(page.locator("html")).toHaveAttribute("lang", "ru");
    await expect(page.getByRole("link", { name: "Роман Соколов" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Открыть страницу проектов" })).toContainText("Избранные проекты");
  });

  test("switches the interface language to English", async ({ page }) => {
    await page.goto("./");
    await openMobileMenuIfNeeded(test.info().project.name, page);

    await page.getByRole("button", { name: "Switch to English" }).click();

    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page).toHaveTitle("Roman Sokolov - Portfolio");
    await expect(page.getByRole("button", { name: "Switch to Russian" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Open projects page" })).toContainText("Selected projects");

    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("renders when localStorage is unavailable", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        get() {
          throw new DOMException("Storage is disabled", "SecurityError");
        },
      });
    });

    await page.goto("./");
    await expect(page.getByRole("link", { name: "Роман Соколов" })).toBeVisible();
  });

  test("renders and switches theme when cookies are unavailable", async ({ page }) => {
    const errors: Error[] = [];
    page.on("pageerror", (error) => errors.push(error));
    await page.addInitScript(() => {
      Object.defineProperty(Document.prototype, "cookie", {
        configurable: true,
        get() {
          throw new DOMException("Cookies are disabled", "SecurityError");
        },
        set() {
          throw new DOMException("Cookies are disabled", "SecurityError");
        },
      });
    });

    await page.goto("./");
    await expect(page.getByRole("link", { name: "Роман Соколов" })).toBeVisible();
    await openMobileMenuIfNeeded(test.info().project.name, page);
    await page.getByRole("button", { name: /светлую тему/i }).click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
    expect(errors).toEqual([]);
  });

  test("ignores redirect paths containing a backslash", async ({ page }) => {
    const errors: Error[] = [];
    page.on("pageerror", (error) => errors.push(error));

    await page.goto("./?p=%2F%5Cevil.com");
    await expect(page.getByRole("link", { name: "Роман Соколов" })).toBeVisible();
    await expect(page).toHaveURL(/\?p=%2F%5Cevil\.com$/i);
    expect(errors).toEqual([]);
  });

  test("serves route-specific HTML on direct requests", async ({ page }) => {
    const response = await page.goto("./projects/");
    expect(response?.status()).toBe(200);
    const html = await response?.text();
    expect(html).toContain('<meta property="og:url" content="https://sokolovroman.ru/projects"');
    expect(html).toContain("<title>Roman Sokolov - Проекты</title>");
    await expect(page.getByRole("heading", { name: "Избранные проекты" })).toBeVisible();
  });

  test("opens the projects route from the homepage", async ({ page }) => {
    await page.goto("./");

    await page.getByRole("link", { name: "Открыть страницу проектов" }).click();

    await expect(page).toHaveURL(/\/projects$/);
    await expect(page).toHaveTitle("Roman Sokolov - Проекты");
    await expect(page.getByRole("heading", { name: "Система управления заказами (OMS)" })).toBeVisible();
  });

  test("keeps focus on artifact controls while switching EXEED artifacts", async ({ page }) => {
    await page.goto("./projects");

    const project = page.locator("#exeed");
    const trigger = project.locator(".artifact-card-main");
    await trigger.focus();
    await trigger.press("Enter");

    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();

    const secondThumbnail = dialog.locator(".artifact-dialog__thumb").nth(1);
    await secondThumbnail.focus();
    await secondThumbnail.press("Enter");
    await expect(secondThumbnail).toBeFocused();

    const nextButton = dialog.getByRole("button", { name: "Далее" });
    await nextButton.focus();
    await nextButton.press("Enter");
    await expect(nextButton).toBeFocused();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });
});
