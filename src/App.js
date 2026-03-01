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
import Blogs from "./components/Blogs";
import MexicoIntro from "./components/MexicoIntro";
import MexicoSafe from "./components/MexicoSafe";
import MexicoSP from "./components/MexicoSP";
import MexicoConcerns from "./components/MexicoConcerns";
import MexicoTips from "./components/MexicoTips";
import MexicoFemaleTravel from "./components/MexicoFemaleTravel";
import MexicoFAQ from "./components/MexicoFAQ";
import MexicoConclusion from "./components/MexicoConclusion";
import WorldCupPage from "./components/2026worldcup/WorldCupPage";
import ReactGA from "react-ga4";

// Scroll Animation Hook - DISABLED - No animations
const useScrollAnimation = () => {
  useEffect(() => {
    // Animation disabled - do nothing
  }, []);
};


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

    // Add/remove Mexico page class to body
    if (location.pathname === '/mexico') {
      document.body.classList.add('mexico-page');
    } else {
      document.body.classList.remove('mexico-page');
    }
  }, [navigate, location.pathname]);

  return null;
};

// Component to conditionally render footer
const ConditionalFooter = () => {
  const location = useLocation();
  
  // Don't render footer on Mexico page or World Cup page
  if (location.pathname === '/mexico' || location.pathname === '/worldcup') {
    return null;
  }
  
  return <FooterSection />;
};

// Component to track page views in Google Analytics
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);

  return null;
};


function App() {
  // Use scroll animation hook
  useScrollAnimation();

  return (
    <Router>
      <ScrollToTop />
      <AnalyticsTracker />
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

        {/* BLOGS PAGE */}
        <Route path="/blogs" element={<Blogs />} />

        {/* MEXICO PAGE */}
        <Route path="/mexico" element={
          <div className="mexico-page-wrapper">
            <MexicoIntro />
            <MexicoSafe />
            <MexicoSP />
            <MexicoConcerns />
            <MexicoTips />
            <MexicoFemaleTravel />
            <MexicoFAQ />
            <MexicoConclusion />
          </div>
        } />

        {/* WORLD CUP PAGE */}
        <Route path="/worldcup" element={<WorldCupPage />} />
      </Routes>

      {/* Footer conditionally rendered (not on Mexico page) */}
      <ConditionalFooter />
    </Router>
  );
}

export default App;