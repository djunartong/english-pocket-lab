import FadeIn from "./FadeIn";

const IG_URL = "https://instagram.com/englishpocketlab";

export default function InstagramFeed() {
  return (
    <section id="instagram" className="section instagram">
      <div className="section__inner">
        <FadeIn>
          <div className="section__header">
            <div className="lato section__eyebrow section__eyebrow--light">
              Follow Along
            </div>
            <h2 className="playfair section__title section__title--light">
              @englishpocketlab
            </h2>
            <p className="lato instagram__subtitle">
              Tips harian, pencapaian siswa &amp; info kelas terbaru
            </p>
          </div>
        </FadeIn>
        {/* Elfsight Instagram Feed Widget */}
        <div
          className={import.meta.env.VITE_ELFSIGHT_WIDGET_ID}
          data-elfsight-app-lazy
        ></div>

        <FadeIn>
          <div className="instagram__cta">
            <button
              className="btn-outline-white"
              onClick={() => window.open(IG_URL, "_blank")}
            >
              Follow us on Instagram →
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
