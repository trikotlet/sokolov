export default function HeroMedia() {
  return (
    <div className="hero-right card">
      <div className="media-frame">
        <img src="/hero.svg" alt="Cybersecurity dashboard preview" />
      </div>
      <div className="media-controls">
        <div className="control-row">
          <span className="badge">Risk 55%</span>
          <span className="chip">Response</span>
        </div>
        <div className="timeline" aria-hidden="true">
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
          <span className="tick" />
        </div>
      </div>
    </div>
  );
}
