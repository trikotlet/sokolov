import type { Profile, UiText } from "../data/portfolio";

type FooterProps = {
  profile: Profile;
  ui: UiText;
};

export default function Footer({ profile, ui }: FooterProps) {
  return (
    <div className="footer-shell">
      <footer className="footer">
        <span>{ui.footerLeft}</span>
        <span className="footer-dot" aria-hidden="true">
          •
        </span>
        <span>
          {profile.location} / {profile.availability}
        </span>
      </footer>
    </div>
  );
}
