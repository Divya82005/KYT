import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import SafetyIntelligence from "./components/SafetyIntelligence";
import DownloadSection from "./components/DownloadSection";

import CTASection from "./components/CTASection";
import FooterSection from "./components/FooterSection";
import PromoVideoSection from "./components/PromoVideoSection";
import Contact from "./components/Contact";
import Privacy from "./components/Privacy";

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
              <HeroSection />

              <PromoVideoSection />

              <DownloadSection />

              <SafetyIntelligence />

              <CTASection />
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
