import { expect, test, type Page } from "@playwright/test";

async function openMobileMenuIfNeeded(projectName: string, page: Page) {
  if (!["iphone-12", "pixel-7"].includes(projectName)) {
    return;
  }

  await page.getByRole("button", { name: "Открыть меню" }).click();
}

test.describe("portfolio smoke", () => {
  test("renders the home page in Russian by default", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle("Roman Sokolov - Portfolio");
    await expect(page.locator("html")).toHaveAttribute("lang", "ru");
    await expect(page.getByRole("link", { name: "Роман Соколов" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Открыть страницу проектов" })).toContainText("Избранные проекты");
  });

  test("switches the interface language to English", async ({ page }) => {
    await page.goto("/");
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

    await page.goto("/");
    await expect(page.getByRole("link", { name: "Роман Соколов" })).toBeVisible();
  });

  test("serves route-specific HTML on direct requests", async ({ page }) => {
    const response = await page.goto("/projects/");
    expect(response?.status()).toBe(200);
    const html = await response?.text();
    expect(html).toContain('<meta property="og:url" content="https://sokolovroman.ru/projects"');
    expect(html).toContain("<title>Roman Sokolov - Проекты</title>");
    await expect(page.getByRole("heading", { name: "Избранные проекты" })).toBeVisible();
  });

  test("opens the projects route from the homepage", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Открыть страницу проектов" }).click();

    await expect(page).toHaveURL(/\/projects$/);
    await expect(page).toHaveTitle("Roman Sokolov - Проекты");
    await expect(page.getByRole("heading", { name: "Система управления заказами (OMS)" })).toBeVisible();
  });
});
