import type { Ref } from "react";
import type { Profile, UiText } from "../data/portfolio";

type FooterProps = {
  profile: Profile;
  ui: UiText;
  shellRef?: Ref<HTMLDivElement>;
};

export default function Footer({ profile, ui, shellRef }: FooterProps) {
  return (
    <div className="footer-shell" ref={shellRef}>
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
