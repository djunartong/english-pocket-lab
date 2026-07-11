import FadeIn from "./FadeIn";
import { programs, WA_NUMBER, WA_MESSAGE } from "../constants/data";

export default function Programs() {
  return (
    <section id="programs" className="section programs">
      <div className="section__inner">
        <FadeIn>
          <div className="section__header">
            <div className="lato section__eyebrow">Our Programs</div>
            <h2 className="playfair section__title">What We Offer</h2>
            <div className="divider-line" />
          </div>
        </FadeIn>

        <div className="programs-grid">
          {programs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.15} style={{ flex: 1 }}>
              <div
                className="program-card"
                style={{
                  background: p.bgColor,
                  border: `2px solid ${p.color}22`,
                  boxShadow: `0 8px 30px ${p.color}18`,
                }}
              >
                <div className="program-card__icon">{p.icon}</div>
                <div
                  className="lato program-card__badge"
                  style={{ color: p.color }}
                >
                  {p.badge}
                </div>
                <h3 className="playfair program-card__title">{p.title}</h3>
                {p.subtitle && (
                  <div className="lato program-card__subtitle">
                    {p.subtitle}
                  </div>
                )}
                <ul className="program-card__list">
                  {p.items.map((item, j) => (
                    <li key={j} className="lato program-card__list-item">
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  className="btn-pink program-card__cta"
                  style={{
                    background: p.color,
                    boxShadow: `0 4px 18px ${p.color}40`,
                  }}
                  onClick={() =>
                    window.open(
                      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
                      "_blank",
                    )
                  }
                >
                  Daftar Sekarang
                </button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
