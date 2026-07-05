import FadeIn from "./FadeIn";
import { pastClasses } from "../constants/data";

export default function WhyEPL({ onImageClick }) {
  return (
    <section id="why" className="section why">
      <div className="section__inner">
        <FadeIn>
          <div className="section__header">
            <div className="lato section__eyebrow">Why Choose Us</div>
            <h2 className="playfair section__title">
              Why{" "}
              <span className="section__title--accent">
                English Pocket Lab?
              </span>
            </h2>
            <div className="divider-line" />
          </div>
        </FadeIn>
        <div className="past-grid">
          {pastClasses.map((c, i) => (
            <FadeIn key={i} delay={i * 0.06}>
              <div
                className="past-card"
                onClick={() => onImageClick(c.instagramUrl)}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  className="past-card__img"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
