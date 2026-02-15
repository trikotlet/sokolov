import type { MouseEvent } from "react";
import type { Language, Profile, UiText } from "../data/portfolio";
import { navigateTo, withBasePath } from "../utils/basePath";

type HeaderProps = {
  isProjectsPage: boolean;
  profile: Profile;
  ui: UiText;
  language: Language;
  onToggleLanguage: () => void;
};

export default function Header({ isProjectsPage, profile, ui, language, onToggleLanguage }: HeaderProps) {
  const homeAnchor = (anchor: string) => (isProjectsPage ? `${withBasePath("/")}${anchor}` : anchor);

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
        <a
          href={withBasePath("/projects")}
          onClick={(event) => onInternalLinkClick(event, "/projects")}
        >
          {ui.navProjects}
        </a>
        <a href={homeAnchor("#experience")}>{ui.navExperience}</a>
        <button
          type="button"
          className="lang-toggle"
          onClick={onToggleLanguage}
          aria-label={language === "ru" ? "Switch to English" : "Переключить на русский"}
        >
          {ui.languageToggle}
        </button>
      </nav>
    </header>
  );
}
