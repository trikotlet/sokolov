import type { Language, Profile, UiText } from "../data/portfolio";

type HeaderProps = {
  isProjectsPage: boolean;
  profile: Profile;
  ui: UiText;
  language: Language;
  onToggleLanguage: () => void;
};

export default function Header({ isProjectsPage, profile, ui, language, onToggleLanguage }: HeaderProps) {
  const homeAnchor = (anchor: string) => (isProjectsPage ? `/${anchor}` : anchor);

  return (
    <header className="topbar">
      <a className="brand" href="/">
        <span className="brand-icon" aria-hidden="true">
          ☺
        </span>
        <span>
          {profile.fullName} - {profile.role}
        </span>
      </a>
      <nav className="top-links" aria-label="Primary">
        <a href="/projects">{ui.navProjects}</a>
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
