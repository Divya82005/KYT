import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DownloadSection from "./components/DownloadSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SafetyIntelligence from "./components/SafetyIntelligence";
import "./index.css";

import Contact from "./components/Contact";
import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import Privacy from "./components/Privacy";
import PromoVideoSection from "./components/PromoVideoSection";

function App() {
  return (
    <Router>
      {/* Header always visible */}
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <section id="home">
                <HeroSection />
              </section>

              <section id="about">
                <PromoVideoSection />
              </section>

              <section id="blogs">
                <DownloadSection />
              </section>

              <section id="safety">
                <SafetyIntelligence />
              </section>

              <section id="cta">
                <CTASection />
              </section>
            </>
          }
        />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />

        {/* PRIVACY PAGE */}
        <Route path="/privacy" element={<Privacy />} />
      </Routes>

      {/* Footer always visible */}
      <FooterSection />
    </Router>
  );
}

export default App;