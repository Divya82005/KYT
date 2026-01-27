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
import ReactGA from "react-ga4";

// Scroll Animation Hook - animates sections when they come into view
// Works on ALL pages: Home, Blogs, Mexico, Contact, Privacy
const useScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Check regular sections (home page sections)
      const sections = document.querySelectorAll('section:not(#home)');
      
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.4; // Animate when section reaches 40% of viewport
        
        if (isVisible && !section.classList.contains('in-view')) {
          section.classList.add('in-view');
        }
      });

      // Check blog container (blogs page)
      const blogContainer = document.querySelector('.blog-container');
      if (blogContainer) {
        // If we're on the blog page, animate sections separately
        if (window.location.pathname === '/blogs') {
          // Always show header section immediately on page load
          const heroSection = blogContainer.querySelector('.hero-section');
          if (heroSection) {
            heroSection.classList.add('in-view');
          }
          
          // Animate city grid only when it comes into view
          const cityGrid = blogContainer.querySelector('.city-grid');
          if (cityGrid) {
            const gridRect = cityGrid.getBoundingClientRect();
            const isGridVisible = gridRect.top < window.innerHeight * 0.8;
            
            if (isGridVisible && !cityGrid.classList.contains('in-view')) {
              cityGrid.classList.add('in-view');
            }
          }
          
          // Animate load more button when it comes into view
          const loadMoreContainer = blogContainer.querySelector('.load-more-container');
          if (loadMoreContainer) {
            const loadMoreRect = loadMoreContainer.getBoundingClientRect();
            const isLoadMoreVisible = loadMoreRect.top < window.innerHeight * 0.8;
            
            if (isLoadMoreVisible && !loadMoreContainer.classList.contains('in-view')) {
              loadMoreContainer.classList.add('in-view');
            }
          }
        } else {
          // Otherwise, animate when scrolled into view (for blog section on other pages)
          const blogRect = blogContainer.getBoundingClientRect();
          const isBlogVisible = blogRect.top < window.innerHeight * 0.8;
          
          if (isBlogVisible && !blogContainer.classList.contains('in-view')) {
            blogContainer.classList.add('in-view');
          }
        }
      }

      // Check Mexico page wrapper (Mexico page)
      const mexicoWrapper = document.querySelector('.mexico-page-wrapper');
      if (mexicoWrapper) {
        // If we're on the Mexico page, animate sections as they come into view
        if (window.location.pathname === '/mexico') {
          // Make wrapper visible to enable CSS animations
          if (!mexicoWrapper.classList.contains('in-view')) {
            mexicoWrapper.classList.add('in-view');
          }
          
          // First section (intro) should animate immediately
          const introSection = document.querySelector('.mexico-intro-container');
          if (introSection && !introSection.classList.contains('in-view')) {
            introSection.classList.add('in-view');
          }
          
          // Other sections animate when you scroll down to visit them
          const mexicoSections = [
            '.mexico-safe-container', 
            '.mexico-concerns-container',
            '.mexico-faq-container',
            '.mexico-conclusion-container'
          ];
          
          mexicoSections.forEach(sectionSelector => {
            const section = document.querySelector(sectionSelector);
            if (section) {
              const sectionRect = section.getBoundingClientRect();
              
              // Animate when section comes into view (top 20% visible)
              // This ensures content animates as soon as user starts seeing the section
              const isSectionVisible = sectionRect.top < window.innerHeight * 0.8;
              
              if (isSectionVisible && !section.classList.contains('in-view')) {
                section.classList.add('in-view');
              }
            }
          });

          // Special handling for MexicoFemaleTravel section with separate white and blue sections
          const mexicoFemaleContainer = document.querySelector('.mexico-female-travel-container');
          if (mexicoFemaleContainer) {
            // White section animates when container comes into view
            const containerRect = mexicoFemaleContainer.getBoundingClientRect();
            const isContainerVisible = containerRect.top < window.innerHeight * 0.8;
            
            if (isContainerVisible && !mexicoFemaleContainer.classList.contains('in-view')) {
              mexicoFemaleContainer.classList.add('in-view');
            }

            // Blue section animates separately when you scroll to it
            const blueSection = document.querySelector('.mexico-female-travel-blue-section');
            if (blueSection) {
              const blueSectionRect = blueSection.getBoundingClientRect();
              // Very precise trigger - animate only when blue section is well into viewport (30% of viewport)
              const isBlueSectionVisible = blueSectionRect.top < window.innerHeight * 0.3;
              
              if (isBlueSectionVisible && !blueSection.classList.contains('in-view')) {
                blueSection.classList.add('in-view');
              }
            }
          }

          // Special handling for MexicoSP section with row-by-row animations
          const mexicoSpContainer = document.querySelector('.mexico-sp-container');
          if (mexicoSpContainer) {
            // First animate title and intro when section comes into view
            const containerRect = mexicoSpContainer.getBoundingClientRect();
            const isContainerVisible = containerRect.top < window.innerHeight * 0.8;
            
            if (isContainerVisible && !mexicoSpContainer.classList.contains('in-view')) {
              mexicoSpContainer.classList.add('in-view');
            }

            // Handle ALL rows - ONLY check unlocked cards
            const allRows = [
              { selector: '.mexico-sp-row-1', class: 'mexico-sp-row-1' },
              { selector: '.mexico-sp-row-2', class: 'mexico-sp-row-2' }, 
              { selector: '.mexico-sp-row-3', class: 'mexico-sp-row-3' }
            ];

            allRows.forEach(row => {
              // CRITICAL: Only select cards that are NOT locked
              const rowElements = document.querySelectorAll(row.selector + ':not([data-locked])');
              
              // If no unlocked cards, skip this row entirely
              if (rowElements.length === 0) return;
              
              const firstCard = rowElements[0];
              const cardRect = firstCard.getBoundingClientRect();
              const isRowVisible = cardRect.top < window.innerHeight * 0.7;

              if (isRowVisible) {
                rowElements.forEach((card, index) => {
                  // Double-check card is not locked
                  if (!card.hasAttribute('data-locked')) {
                    // Mark as locked IMMEDIATELY to prevent re-processing
                    card.setAttribute('data-locked', 'true');
                    
                    // Add in-view to trigger animation
                    card.classList.add('in-view');
                    
                    // Remove in-view class after animation starts
                    setTimeout(() => {
                      card.classList.remove('in-view');
                    }, 50);
                    
                    // Apply final locked styles after animation completes
                    setTimeout(() => {
                      card.style.cssText = `
                        opacity: 1 !important;
                        transform: translateY(0px) !important;
                        transition: none !important;
                        animation: none !important;
                      `;
                      
                      const children = card.querySelectorAll('*');
                      children.forEach(child => {
                        child.style.cssText += `
                          opacity: 1 !important;
                          transform: translateY(0px) !important;
                          transition: none !important;
                          animation: none !important;
                        `;
                      });
                      
                      console.log(`MexicoSP ${row.class}-${index} LOCKED`);
                    }, 850);
                  }
                });
              }
            });
          }

          // Special handling for MexicoTips section with row-by-row animations
          const mexicoTipsContainer = document.querySelector('.mexico-tips-container');
          if (mexicoTipsContainer) {
            // First animate title when section comes into view
            const containerRect = mexicoTipsContainer.getBoundingClientRect();
            const isContainerVisible = containerRect.top < window.innerHeight * 0.8;
            
            if (isContainerVisible && !mexicoTipsContainer.classList.contains('in-view')) {
              mexicoTipsContainer.classList.add('in-view');
            }

            // Handle ALL rows - ONLY check unlocked cards
            const tipsRows = [
              { selector: '.mexico-tips-row-1', class: 'mexico-tips-row-1' },
              { selector: '.mexico-tips-row-2', class: 'mexico-tips-row-2' }, 
              { selector: '.mexico-tips-row-3', class: 'mexico-tips-row-3' },
              { selector: '.mexico-tips-row-4', class: 'mexico-tips-row-4' }
            ];

            tipsRows.forEach(row => {
              // CRITICAL: Only select cards that are NOT locked
              const rowElements = document.querySelectorAll(row.selector + ':not([data-locked])');
              
              // If no unlocked cards, skip this row entirely
              if (rowElements.length === 0) return;
              
              const firstCard = rowElements[0];
              const cardRect = firstCard.getBoundingClientRect();
              const isRowVisible = cardRect.top < window.innerHeight * 0.7;

              if (isRowVisible) {
                rowElements.forEach((card, index) => {
                  // Double-check card is not locked
                  if (!card.hasAttribute('data-locked')) {
                    // Mark as locked IMMEDIATELY to prevent re-processing
                    card.setAttribute('data-locked', 'true');
                    
                    // Add in-view to trigger animation
                    card.classList.add('in-view');
                    
                    // Remove in-view class after animation starts
                    setTimeout(() => {
                      card.classList.remove('in-view');
                    }, 50);
                    
                    // Apply final locked styles after animation completes
                    setTimeout(() => {
                      card.style.cssText = `
                        opacity: 1 !important;
                        transform: translateY(0px) !important;
                        transition: none !important;
                        animation: none !important;
                      `;
                      
                      const children = card.querySelectorAll('*');
                      children.forEach(child => {
                        child.style.cssText += `
                          opacity: 1 !important;
                          transform: translateY(0px) !important;
                          transition: none !important;
                          animation: none !important;
                        `;
                      });
                      
                      console.log(`MexicoTips ${row.class}-${index} LOCKED`);
                    }, 850);
                  }
                });
              }
            });
          }
        } else {
          // Otherwise, animate when scrolled into view (for Mexico section on other pages)
          const mexicoRect = mexicoWrapper.getBoundingClientRect();
          const isMexicoVisible = mexicoRect.top < window.innerHeight * 0.8;
          
          if (isMexicoVisible && !mexicoWrapper.classList.contains('in-view')) {
            mexicoWrapper.classList.add('in-view');
          }
        }
      }

      // Check footer (all pages)
      const footer = document.querySelector('.footer-wrapper');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight * 0.8;
        
        if (isFooterVisible && !footer.classList.contains('in-view')) {
          footer.classList.add('in-view');
        }
      }
    };

    // Check on scroll
    window.addEventListener('scroll', handleScroll);
    
    // Check immediately in case content is already visible
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
  
  // Don't render footer on Mexico page
  if (location.pathname === '/mexico') {
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
      </Routes>

      {/* Footer conditionally rendered (not on Mexico page) */}
      <ConditionalFooter />
    </Router>
  );
}

export default App;