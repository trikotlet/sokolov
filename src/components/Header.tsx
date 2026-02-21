import type { MouseEvent } from "react";
import type { Language, Profile, UiText } from "../data/portfolio";
import { navigateTo, withBasePath } from "../utils/basePath";

type HeaderProps = {
  profile: Profile;
  ui: UiText;
  language: Language;
  onToggleLanguage: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

export default function Header({
  profile,
  ui,
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const onInternalLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    navigateTo(path);
  };

  return (
    <header className="topbar">
      <a className="brand" href={withBasePath("/")} onClick={(event) => onInternalLinkClick(event, "/")}>
        <span className="brand-icon" aria-hidden="true">
          ☺
        </span>
        <span>
          {profile.fullName} - {profile.role}
        </span>
      </a>
      <nav className="top-links" aria-label="Primary">
        <a href={withBasePath("/cv")} onClick={(event) => onInternalLinkClick(event, "/cv")}>
          {ui.navExperience}
        </a>
        <button
          type="button"
          className="lang-toggle"
          onClick={onToggleLanguage}
          aria-label={language === "ru" ? "Switch to English" : "Переключить на русский"}
        >
          {ui.languageToggle}
        </button>
        <button
          type="button"
          className="theme-toggle"
          onClick={onToggleTheme}
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </nav>
    </header>
  );
}
