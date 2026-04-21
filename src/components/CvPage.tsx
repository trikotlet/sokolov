import type { Language } from "../data/portfolio";
import TextShimmer from "./TextShimmer";

type CvPageProps = {
  language: Language;
};

export default function CvPage({ language }: CvPageProps) {
  const title = language === "ru" ? "Разработка в процессе…" : "Coding in progress…";

  return (
    <main className="cv-page" id="top">
      <TextShimmer as="h1" className="cv-title" duration={1.8} spread={2.1}>
        {title}
      </TextShimmer>
    </main>
  );
}
