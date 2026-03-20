import type { MouseEvent } from "react";
import type { Language, Profile, UiText } from "../data/portfolio";
import { navigateTo, withBasePath } from "../utils/basePath";
import Button from "./ui/button";
import Separator from "./ui/separator";

type HeaderProps = {
  profile: Profile;
  ui: UiText;
  language: Language;
  onToggleLanguage: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
};

function ThemeIcon({ theme }: { theme: "dark" | "light" }) {
  return theme === "dark" ? (
    <svg className="header-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 2.8v2.3M12 18.9v2.3M21.2 12h-2.3M5.1 12H2.8M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6M18.5 18.5l-1.6-1.6M7.1 7.1 5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  ) : (
    <svg className="header-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14.7 3.4a8.7 8.7 0 1 0 5.9 15.2A9.4 9.4 0 0 1 14.7 3.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({
  profile,
  ui,
  language,
  onToggleLanguage,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const labels =
    language === "ru"
      ? {
          primaryNav: "\u041e\u0441\u043d\u043e\u0432\u043d\u0430\u044f \u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f",
          switchLanguage: "Switch to English",
          switchTheme:
            theme === "dark"
              ? "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430 \u0441\u0432\u0435\u0442\u043b\u0443\u044e \u0442\u0435\u043c\u0443"
              : "\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043d\u0430 \u0442\u0435\u043c\u043d\u0443\u044e \u0442\u0435\u043c\u0443",
          themeTitle:
            theme === "dark" ? "\u0421\u0432\u0435\u0442\u043b\u0430\u044f \u0442\u0435\u043c\u0430" : "\u0422\u0435\u043c\u043d\u0430\u044f \u0442\u0435\u043c\u0430",
          controls: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
        }
      : {
          primaryNav: "Primary navigation",
          switchLanguage: "Switch to Russian",
          switchTheme: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
          themeTitle: theme === "dark" ? "Light mode" : "Dark mode",
          controls: "Controls",
        };

  const onInternalLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    navigateTo(path);
  };

  const navLinks = [
    { href: "/", label: profile.fullName },
    { href: "/cv", label: ui.navExperience },
  ];
  const desktopLinks = navLinks.slice(1);

  return (
    <>
      <header className="topbar">
        <div className="topbar-main">
          <a className="brand" href={withBasePath("/")} onClick={(event) => onInternalLinkClick(event, "/")}>
            <span className="brand-icon" aria-hidden="true" />
            <span className="brand-copy">
              <span className="brand-name">{profile.fullName}</span>
              <span className="brand-role">{profile.role}</span>
            </span>
          </a>

          <div className="topbar-right">
            <nav className="top-links top-links--desktop" aria-label={labels.primaryNav}>
              {desktopLinks.map((link) => (
                <a
                  key={link.href}
                  className="topbar-link"
                  href={withBasePath(link.href)}
                  onClick={(event) => onInternalLinkClick(event, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <Separator className="topbar-separator topbar-separator--desktop" orientation="vertical" />

            <div className="topbar-controls topbar-controls--desktop" aria-label={labels.controls}>
              <Button
                as="button"
                type="button"
                className="topbar-control topbar-control--lang"
                variant="outline"
                size="sm"
                onClick={onToggleLanguage}
                aria-label={labels.switchLanguage}
              >
                {ui.languageToggle}
              </Button>
              <Button
                as="button"
                type="button"
                className="topbar-control"
                variant="outline"
                size="icon"
                onClick={onToggleTheme}
                aria-label={labels.switchTheme}
                title={labels.themeTitle}
              >
                <ThemeIcon theme={theme} />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
