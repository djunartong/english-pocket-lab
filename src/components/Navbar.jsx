import { useState } from "react";
import Mascot from "./Mascot";
import { FaWhatsapp } from "react-icons/fa";
import { WA_NUMBER, WA_MESSAGE } from "../constants/data";

const NAV_LINKS = [
  { id: "programs", label: "Programs" },
  { id: "why", label: "Why EPL?" },
  { id: "achievement", label: "Student Achievements" },
  { id: "instagram", label: "Instagram" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div
        className="navbar__logo"
        style={{ cursor: "pointer" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <div className="navbar__mascot">
          <Mascot width={40} height={45} />
        </div>
        <div>
          <div className="playfair navbar__brand-name">English</div>
          <div className="dancing navbar__brand-sub">Pocket Lab</div>
        </div>
      </div>

      {/* Desktop links */}
      <div className="navbar__links nav-links">
        {NAV_LINKS.map(({ id, label }) => (
          <span key={id} className="nav-link" onClick={() => scrollTo(id)}>
            {label}
          </span>
        ))}
      </div>

      {/* Desktop CTA */}
      <button
        className="btn-pink nav-cta-desktop"
        style={{ padding: "10px 22px", fontSize: 13 }}
        onClick={() =>
          window.open(
            `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
            "_blank",
          )
        }
      >
        <FaWhatsapp
          size={18}
          style={{ marginRight: 6, verticalAlign: "middle" }}
        />{" "}
        WhatsApp
      </button>

      {/* Hamburger toggle (mobile only) */}
      <button
        className="navbar__hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span
          className={`navbar__hamburger-line ${menuOpen ? "navbar__hamburger-line--top-open" : ""}`}
        />
        <span
          className={`navbar__hamburger-line ${menuOpen ? "navbar__hamburger-line--mid-open" : ""}`}
        />
        <span
          className={`navbar__hamburger-line ${menuOpen ? "navbar__hamburger-line--bottom-open" : ""}`}
        />
      </button>

      {/* Mobile dropdown */}
      <div
        className={`navbar__dropdown ${menuOpen ? "navbar__dropdown--open" : ""}`}
      >
        {NAV_LINKS.map(({ id, label }) => (
          <span
            key={id}
            className="navbar__dropdown-link nav-link"
            onClick={() => scrollTo(id)}
          >
            {label}
          </span>
        ))}
        <button
          className="btn-pink navbar__dropdown-cta"
          onClick={() => {
            window.open(
              `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`,
              "_blank",
            );
            setMenuOpen(false);
          }}
        >
          <FaWhatsapp
            size={18}
            style={{ marginRight: 6, verticalAlign: "middle" }}
          />
          {""}
          WhatsApp
        </button>
      </div>
    </nav>
  );
}
