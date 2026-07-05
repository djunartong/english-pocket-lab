import FadeIn from "./FadeIn";
import { achievements } from "../constants/data";

export default function Achievement({ onImageClick }) {
  return (
    <section id="achievement" className="section achievement">
      <div className="section__inner">
        <FadeIn>
          <div className="section__header">
            <div className="lato section__eyebrow">Proud Moments</div>
            <h2 className="playfair section__title">
              Student{" "}
              <span className="section__title--accent">Achievements</span>
            </h2>
            <p className="dancing achievement__tagline">
              We're proud of every single one.
            </p>
            <div className="divider-line" />
          </div>
        </FadeIn>

        <div className="achieve-grid">
          {achievements.map((a, i) => (
            <FadeIn key={i} delay={i * 0.12} style={{ flex: 1 }}>
              <div
                className="achieve-card"
                onClick={() => onImageClick(a.instagramUrl)}
                style={{ cursor: "pointer" }}
              >
                <img src={a.src} alt={a.alt} className="achieve-card__img" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
