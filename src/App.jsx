import "./index.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TaglineStrip from "./components/TaglineStrip";
import Programs from "./components/Programs";
import WhyEPL from "./components/WhyEPL";
import Achievement from "./components/Achievement";
import InstagramFeed from "./components/InstagramFeed";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function App() {
  const [modalUrl, setModalUrl] = useState(null);
  return (
    <>
      <Navbar />
      <Hero scrollTo={scrollTo} />
      <TaglineStrip />
      <Programs />
      <WhyEPL onImageClick={setModalUrl} />
      <Achievement onImageClick={setModalUrl} />
      <InstagramFeed />
      <Footer scrollTo={scrollTo} />
      <Modal url={modalUrl} onClose={() => setModalUrl(null)} />
    </>
  );
}
