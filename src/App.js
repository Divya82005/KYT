import { Route, BrowserRouter as Router, Routes, useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

// Component to handle scroll restoration and redirect to home on refresh
const ScrollToTop = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if this was a page refresh using performance API
    const navigationType = performance.getEntriesByType('navigation')[0]?.type;
    const isRefresh = navigationType === 'reload';

    // If it's a refresh and not on home page, redirect to home
    if (isRefresh && location.pathname !== '/') {
      navigate('/', { replace: true });
      return;
    }

    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);

    // Disable browser's scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, [navigate, location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
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