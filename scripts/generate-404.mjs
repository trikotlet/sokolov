import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { normalizeBasePathForRuntime } from "../base-path.mjs";

export function render404Page(template, rawBasePath) {
  if (!template.includes("__BASE_PATH__")) {
    throw new Error("404 template is missing the __BASE_PATH__ token");
  }

  return template.replaceAll("__BASE_PATH__", normalizeBasePathForRuntime(rawBasePath));
}

export function generate404Page({ rawBasePath, templatePath, outputPath }) {
  const template = readFileSync(templatePath, "utf8");
  const output = render404Page(template, rawBasePath);

  writeFileSync(outputPath, output, "utf8");
}

const isEntrypoint = process.argv[1]
  ? import.meta.url === pathToFileURL(process.argv[1]).href
  : false;

if (isEntrypoint) {
  generate404Page({
    rawBasePath: process.env.VITE_BASE_PATH,
    templatePath: resolve("templates/404.template.html"),
    outputPath: resolve("public/404.html"),
  });
}
