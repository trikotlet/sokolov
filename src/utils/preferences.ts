import { defaultLanguage, type Language } from "../data/portfolio";

export type Theme = "dark" | "light";

function readCookie(name: string): string | undefined {
  const prefix = `${name}=`;
  const entry = document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(prefix));
  return entry?.slice(prefix.length);
}

export function readLanguage(): Language {
  const saved = readCookie("portfolio-language");
  return saved === "ru" || saved === "en" ? saved : defaultLanguage;
}

export function readTheme(): Theme {
  return readCookie("portfolio-theme") === "light" ? "light" : "dark";
}

export function savePreference(name: "portfolio-language" | "portfolio-theme", value: Language | Theme): void {
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${name}=${value}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
}
