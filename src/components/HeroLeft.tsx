import type { ExperienceItem, Outcome, Profile, SocialLink, UiText } from "../data/portfolio";

type HeroLeftProps = {
  profile: Profile;
  experience: ExperienceItem[];
  outcomes: Outcome[];
  socialLinks: SocialLink[];
  ui: UiText;
};

export default function HeroLeft({ profile, experience, outcomes, socialLinks, ui }: HeroLeftProps) {
  return (
    <section className="hero-left card" aria-label="Intro">
      <h1>{profile.headline}</h1>
      {profile.descriptor ? <p className="hero-about">{profile.descriptor}</p> : null}

      <div className="meta" id="contact" aria-label="Social links" tabIndex={-1}>
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

      <a className="cta" href={profile.callLink} target="_blank" rel="noreferrer noopener">
        <span>{profile.callToAction}</span>
        <svg className="arrow-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M 14.6 10.8 L 0 10.8 L 0 8.4 L 14.6 8.4 L 7.9 1.7 L 9.6 0 L 19.2 9.6 L 9.6 19.2 L 7.9 17.5 Z"
            transform="translate(6.4 6.4) rotate(-45 9.5 9.5)"
            fill="currentColor"
          />
        </svg>
      </a>

      <section className="experience" id="experience" aria-label="Experience">
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

      <a
        className="cta"
        href={`mailto:${profile.email}?subject=${encodeURIComponent(ui.resumeSubject)}`}
        aria-label={ui.resumeAria}
      >
        <span>{ui.requestResume}</span>
        <svg className="arrow-icon" viewBox="0 0 32 32" aria-hidden="true">
          <path
            d="M 14.6 10.8 L 0 10.8 L 0 8.4 L 14.6 8.4 L 7.9 1.7 L 9.6 0 L 19.2 9.6 L 9.6 19.2 L 7.9 17.5 Z"
            transform="translate(6.4 6.4)"
            fill="currentColor"
          />
        </svg>
      </a>
    </section>
  );
}
