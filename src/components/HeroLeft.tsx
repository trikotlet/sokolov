import type { ExperienceItem, Language, Outcome, Profile, SocialLink, UiText } from "../data/portfolio";
import ArrowIcon from "./ArrowIcon";
import Button from "./ui/button";

type HeroLeftProps = {
  profile: Profile;
  experience: ExperienceItem[];
  outcomes: Outcome[];
  socialLinks: SocialLink[];
  ui: UiText;
  language: Language;
};

export default function HeroLeft({ profile, experience, outcomes, socialLinks, ui, language }: HeroLeftProps) {
  const labels =
    language === "ru"
      ? {
          intro: "\u0418\u043d\u0442\u0440\u043e",
          socialLinks: "\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438",
          experience: "\u041e\u043f\u044b\u0442",
        }
      : {
          intro: "Intro",
          socialLinks: "Social links",
          experience: "Experience",
        };

  return (
    <section className="hero-left card" aria-label={labels.intro}>
      <h1>{profile.headline}</h1>
      {profile.descriptor ? <p className="hero-about">{profile.descriptor}</p> : null}

      <div className="meta" id="contact" aria-label={labels.socialLinks} tabIndex={-1}>
        {socialLinks.map((social, index) => (
          <span key={social.label}>
            {index > 0 && <span className="dot">|</span>} {" "}
            <a
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
            >
              {social.label}
            </a>
          </span>
        ))}
      </div>

      <Button as="a" className="cta" variant="outline" size="lg" href={profile.callLink} target="_blank" rel="noreferrer noopener">
        <span>{profile.callToAction}</span>
        <ArrowIcon direction="up-right" />
      </Button>

      <section className="experience" id="experience" aria-label={labels.experience}>
        {experience.map((item) => (
          <div className="exp-row" key={`${item.company}-${item.years}`}>
            <span className="exp-years">{item.years}</span>
            <span className="exp-role">
              <span className="exp-company">{item.company}</span>
              <span className="exp-sep"> / </span>
              <span className="exp-title">{item.title}</span>
            </span>
          </div>
        ))}
      </section>

      <section className="outcomes" aria-label={ui.outcomesTitle}>
        <p className="overline">{ui.outcomesTitle}</p>
        {outcomes.map((outcome) => (
          <p key={outcome.metric} className="outcome-row">
            <span className="outcome-metric">{outcome.metric}</span>
            <span className="outcome-details">{outcome.details}</span>
          </p>
        ))}
      </section>

      <Button
        as="a"
        className="cta"
        variant="outline"
        size="lg"
        href={`mailto:${profile.email}?subject=${encodeURIComponent(ui.resumeSubject)}`}
        aria-label={ui.resumeAria}
      >
        <span>{ui.requestResume}</span>
        <ArrowIcon />
      </Button>
    </section>
  );
}
