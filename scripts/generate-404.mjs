import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function normalizeBasePath(rawBasePath) {
  const value = (rawBasePath || "/").trim();
  if (!value || value === "/") {
    return "";
  }

  const withLeadingSlash = value.startsWith("/") ? value : `/${value}`;
  return withLeadingSlash.endsWith("/") ? withLeadingSlash.slice(0, -1) : withLeadingSlash;
}

const basePath = normalizeBasePath(process.env.VITE_BASE_PATH);
const templatePath = resolve("templates/404.template.html");
const outputPath = resolve("public/404.html");

const template = readFileSync(templatePath, "utf8");
const output = template.replaceAll("__BASE_PATH__", basePath);

writeFileSync(outputPath, output, "utf8");
