import { useState, type CSSProperties, type MouseEvent } from "react";
import type { Language, Profile, UiText } from "../data/portfolio";
import { navigateTo, withBasePath } from "../utils/basePath";
import Button from "./ui/button";
import Separator from "./ui/separator";
import Sheet from "./ui/sheet";

type HeaderProps = {
  profile: Profile;
  ui: UiText;
  language: Language;
  onToggleLanguage: () => void;
  theme: "dark" | "light";
  onToggleTheme: () => void;
  scrollProgress?: number;
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
  scrollProgress = 0,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          openMenu: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
          mobileMenuTitle: "\u041c\u0435\u043d\u044e",
          mobileMenuDescription: "\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f \u0438 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",
          closeMenu: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e",
        }
      : {
          primaryNav: "Primary navigation",
          switchLanguage: "Switch to Russian",
          switchTheme: theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
          themeTitle: theme === "dark" ? "Light mode" : "Dark mode",
          controls: "Controls",
          openMenu: "Open menu",
          mobileMenuTitle: "Menu",
          mobileMenuDescription: "Navigation and controls",
          closeMenu: "Close menu",
        };

  const onInternalLinkClick = (event: MouseEvent<HTMLAnchorElement>, path: string) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    event.preventDefault();
    setIsMenuOpen(false);
    navigateTo(path);
  };

  const navLinks = [
    { href: "/", label: profile.fullName },
    { href: "/projects", label: ui.navProjects },
    { href: "/cv", label: ui.navExperience },
  ];
  const desktopLinks = navLinks.filter((link) => link.href !== "/");
  const brandIconStyle = {
    "--brand-fill-progress": Math.max(0, Math.min(1, scrollProgress)).toFixed(4),
  } as CSSProperties;

  return (
    <>
      <header className="topbar">
        <div className="topbar-main">
          <a className="brand" href={withBasePath("/")} onClick={(event) => onInternalLinkClick(event, "/")}>
            <span className="brand-icon" aria-hidden="true" style={brandIconStyle} />
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

            <Button
              as="button"
              type="button"
              className="menu-trigger"
              variant="outline"
              size="icon"
              aria-label={labels.openMenu}
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="header-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <Sheet
        open={isMenuOpen}
        onOpenChange={setIsMenuOpen}
        title={labels.mobileMenuTitle}
        description={labels.mobileMenuDescription}
        closeLabel={labels.closeMenu}
      >
        <nav className="sheet-nav" aria-label={labels.primaryNav}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="sheet-nav__link"
              href={withBasePath(link.href)}
              onClick={(event) => onInternalLinkClick(event, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Separator className="sheet-separator" />

        <div className="sheet-controls" aria-label={labels.controls}>
          <Button
            as="button"
            type="button"
            className="sheet-controls__button"
            variant="outline"
            onClick={() => onToggleLanguage()}
            aria-label={labels.switchLanguage}
          >
            {ui.languageToggle}
          </Button>
          <Button
            as="button"
            type="button"
            className="sheet-controls__button"
            variant="outline"
            onClick={onToggleTheme}
            aria-label={labels.switchTheme}
          >
            {labels.themeTitle}
          </Button>
        </div>
      </Sheet>
    </>
  );
}
