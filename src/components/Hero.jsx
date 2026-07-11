import FadeIn from "./FadeIn";
import Mascot from "./Mascot";

export default function Hero({ scrollTo }) {
  return (
    <section className="hero">
      <div className="hero__inner hero-grid">
        {/* Text */}
        <div className="hero__text hero-text">
          <FadeIn>
            <div className="lato hero__eyebrow">📚 English Pocket Lab</div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="playfair hero__heading">
              Your Pocket-Sized
              <br />
              <span className="hero__heading--accent">English</span> Learning
              Lab
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="lato hero__body">
              Kami membantu pelajar Indonesia membangun kepercayaan diri dalam
              berbahasa Inggris, dari Kids English hingga TOEFL, IELTS & English
              for Specific Purposes (ESP).
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="hero__ctas">
              <button className="btn-pink" onClick={() => scrollTo("programs")}>
                📚 General English
              </button>
              <button className="btn-teal" onClick={() => scrollTo("programs")}>
                🎯 ESP
              </button>
              <button className="btn-navy" onClick={() => scrollTo("why")}>
                🔍 Why EPL?
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Mascot blob */}
        <FadeIn delay={0.2}>
          <div className="hero__visual">
            <div className="hero__blob">
              <div className="hero__mascot-wrap">
                <Mascot width={220} height={220} />
              </div>
            </div>
            <div
              className="hero__badge hero__badge--bottom lato"
              style={{
                background: "#18315D",
                boxShadow: "0 8px 24px rgba(24,49,93,0.3)",
              }}
            >
              ✦ Fun & Interactive
            </div>
            <div
              className="hero__badge hero__badge--top lato"
              style={{
                background: "#F8A32B",
                boxShadow: "0 8px 24px rgba(248,163,43,0.3)",
              }}
            >
              🎯 Proven Results
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
