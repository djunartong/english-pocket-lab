import FadeIn from "./FadeIn";
import Mascot from "./Mascot";
import { FaWhatsapp } from "react-icons/fa";
import { WA_NUMBER, WA_MESSAGE } from "../constants/data";

export default function Footer({ scrollTo }) {
  return (
    <footer className="footer">
      <div className="footer__dots" />
      <div className="footer__inner">
        <FadeIn>
          <div className="footer__mascot">
            <Mascot width={80} height={90} />
          </div>
          <h2 className="playfair footer__heading">Ready to Start?</h2>
          <p className="lato footer__body">
            Mulai perjalanan bahasa Inggrismu bersama kami 😊
            <br />
            Hubungi kami segera!
          </p>

          <div className="footer__btns footer-btns">
            <button
              className="footer__btn-wa"
              onClick={() =>
                window.open(
                  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
                  "_blank",
                )
              }
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              <FaWhatsapp
                size={18}
                style={{ marginRight: 6, verticalAlign: "middle" }}
              />{" "}
              Chat on WhatsApp
            </button>
            <button
              className="btn-outline-white footer__btn-programs"
              onClick={() => scrollTo("programs")}
            >
              Lihat Program →
            </button>
          </div>

          <p className="lato footer__copy">
            © {new Date().getFullYear()} English Pocket Lab · @englishpocketlab
          </p>
        </FadeIn>
      </div>
    </footer>
  );
}
