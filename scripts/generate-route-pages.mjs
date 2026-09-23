import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const siteUrl = "https://sokolovroman.ru";
const routes = [
  {
    path: "projects",
    title: "Roman Sokolov - Проекты",
    description:
      "Кейсы Романа Соколова: управление цифровыми B2B-проектами, запуск продуктов и измеримый бизнес-результат.",
  },
  {
    path: "cv",
    title: "Roman Sokolov - Опыт",
    description: "Страница опыта Романа Соколова скоро будет опубликована.",
  },
];

function replaceOnce(html, pattern, replacement, label) {
  const matches = html.match(new RegExp(pattern.source, "g"));
  if (matches?.length !== 1) {
    throw new Error(`Expected exactly one ${label} in built HTML; found ${matches?.length ?? 0}`);
  }
  return html.replace(pattern, replacement);
}

function setMeta(html, attribute, key, value) {
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`);
  return replaceOnce(html, pattern, `<meta ${attribute}="${key}" content="${value}" />`, `${attribute}=${key}`);
}

function renderRoutePage(html, route) {
  const url = `${siteUrl}/${route.path}`;
  let output = replaceOnce(html, /<title>[^<]*<\/title>/, `<title>${route.title}</title>`, "title");
  output = setMeta(output, "name", "description", route.description);
  output = setMeta(output, "name", "twitter:title", route.title);
  output = setMeta(output, "name", "twitter:description", route.description);
  output = setMeta(output, "property", "og:title", route.title);
  output = setMeta(output, "property", "og:description", route.description);
  output = setMeta(output, "property", "og:locale", "ru_RU");
  output = setMeta(output, "property", "og:url", url);
  output = replaceOnce(
    output,
    /<link rel="canonical" href="[^"]*"\s*\/>/,
    `<link rel="canonical" href="${url}" />`,
    "canonical link",
  );
  return output;
}

const indexHtml = await readFile(resolve("dist/index.html"), "utf8");
for (const route of routes) {
  const directory = resolve("dist", route.path);
  await mkdir(directory, { recursive: true });
  await writeFile(resolve(directory, "index.html"), renderRoutePage(indexHtml, route));
}
