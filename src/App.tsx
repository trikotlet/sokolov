import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroLeft from "./components/HeroLeft";
import CvPage from "./components/CvPage";
import ProjectsPage from "./components/ProjectsPage";
import ProjectsSection from "./components/ProjectsSection";
import { contentByLanguage, defaultLanguage, type Language } from "./data/portfolio";
import { stripBasePath, withBasePath } from "./utils/basePath";

const SITE_URL = "https://sokolovroman.ru";
const PROJECTS_PATH = "/projects";
const CV_PATH = "/cv";
type Theme = "dark" | "light";

function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.replace(/\/+$/, "") || "/";
}

function getRoutePathname(pathname: string): string {
  return normalizePathname(stripBasePath(pathname));
}

export default function App() {
  const [pathname, setPathname] = useState(() => getRoutePathname(window.location.pathname));
  const [language, setLanguage] = useState<Language>(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    return saved === "ru" || saved === "en" ? saved : defaultLanguage;
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    return "dark";
  });

  useEffect(() => {
    const onPopState = () => setPathname(getRoutePathname(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirectedPath = params.get("p");
    if (!redirectedPath) {
      return;
    }

    const targetPath = redirectedPath.startsWith("/") ? redirectedPath : `/${redirectedPath}`;
    window.history.replaceState({}, "", withBasePath(targetPath));
    setPathname(getRoutePathname(window.location.pathname));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    window.localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const isProjectsPage = pathname === PROJECTS_PATH;
  const isCvPage = pathname === CV_PATH;
  const content = contentByLanguage[language];

  useEffect(() => {
    const onProjectsPage = pathname === PROJECTS_PATH;
    const onCvPage = pathname === CV_PATH;
    const canonicalUrl = onProjectsPage
      ? `${SITE_URL}${PROJECTS_PATH}`
      : onCvPage
        ? `${SITE_URL}${CV_PATH}`
        : `${SITE_URL}/`;
    const pageUrl = canonicalUrl;
    const locale = language === "ru" ? "ru_RU" : "en_US";
    const robots = "noindex,nofollow,noarchive";

    const title = onProjectsPage
      ? language === "ru"
        ? "Roman Sokolov - Проекты"
        : "Roman Sokolov - Projects"
      : onCvPage
        ? language === "ru"
          ? "Roman Sokolov - Опыт"
          : "Roman Sokolov - Experience"
        : "Roman Sokolov - Portfolio";

    const description = onProjectsPage
      ? language === "ru"
        ? "Кейсы Романа Соколова: управление цифровыми B2B-проектами, запуск продуктов и измеримый бизнес-результат."
        : "Roman Sokolov case studies: digital B2B project management, product delivery, and measurable business impact."
      : onCvPage
        ? language === "ru"
          ? "Страница опыта Романа Соколова скоро будет опубликована."
          : "Roman Sokolov experience page will be published soon."
        : language === "ru"
          ? "Портфолио Романа Соколова. Управление цифровыми B2B-проектами в кибербезопасности, аналитике и операционных продуктах."
          : "Roman Sokolov portfolio. Project Manager delivering digital B2B products in cybersecurity, analytics, and operations.";

    document.title = title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute("content", pageUrl);
    }

    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) {
      ogLocale.setAttribute("content", locale);
    }

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute("content", title);
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute("content", description);
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    }

    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }

    robotsMeta.setAttribute("content", robots);
  }, [language, pathname]);

  useEffect(() => {
    if (pathname !== PROJECTS_PATH) {
      return;
    }

    const hash = window.location.hash.replace("#", "");
    if (!hash) {
      return;
    }

    let tries = 0;
    const maxTries = 20;

    const scrollToAnchor = () => {
      const target = document.getElementById(hash);
      if (!target) {
        return false;
      }

      const prefersReducedMotion =
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      target.scrollIntoView({
        block: "start",
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
      return true;
    };

    if (scrollToAnchor()) {
      return;
    }

    const timer = window.setInterval(() => {
      tries += 1;
      if (scrollToAnchor() || tries >= maxTries) {
        window.clearInterval(timer);
      }
    }, 50);

    return () => window.clearInterval(timer);
  }, [pathname, language]);

  return (
    <>
      <div className="page">
        <Header
          profile={content.profile}
          ui={content.ui}
          language={language}
          onToggleLanguage={() => setLanguage((current) => (current === "ru" ? "en" : "ru"))}
          theme={theme}
          onToggleTheme={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
        />

        {isProjectsPage ? (
          <ProjectsPage
            caseStudies={content.caseStudies}
            ui={content.ui}
            language={language}
            profile={content.profile}
          />
        ) : isCvPage ? (
          <CvPage language={language} />
        ) : (
          <main className="layout">
            <div className="left-col" id="top">
              <HeroLeft
                profile={content.profile}
                experience={content.experience}
                outcomes={content.outcomes}
                socialLinks={content.socialLinks}
                ui={content.ui}
              />
            </div>

            <div className="right-col">
              <ProjectsSection projects={content.projectCards} ui={content.ui} />
            </div>
          </main>
        )}
      </div>

      <Footer profile={content.profile} ui={content.ui} />
    </>
  );
}
