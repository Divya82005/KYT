import React, { useEffect, useState } from 'react';
import './Styles/SafetyIntelligence.css';

const SafetyIntelligence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldTear, setShouldTear] = useState(false);

  useEffect(() => {
    let isTransitioning = false; // Add local transition flag
    let lastTransitionTime = 0; // Track last transition time
    
    const handleScroll = () => {
      const safetySection = document.querySelector('.safety-container');
      const feedbackSection = document.querySelector('.testimonial-section');
      
      if (safetySection) {
        const rect = safetySection.getBoundingClientRect();
        // Trigger when safety section starts entering viewport
        const visible = rect.top < window.innerHeight * 0.7;
        setIsVisible(visible);
      }
      
      if (feedbackSection && safetySection) {
        const feedbackRect = feedbackSection.getBoundingClientRect();
        
        // Tear when feedback section enters at 80%
        // Return when feedback section goes back above 50% (hysteresis)
        if (feedbackRect.top < window.innerHeight * 0.8) {
          setShouldTear(true);
        } else if (feedbackRect.top > window.innerHeight * 0.5) {
          setShouldTear(false);
        }
      }
    };

    // Set up interval to check visibility instead of scroll listener
    const intervalId = setInterval(handleScroll, 100);
    handleScroll(); // Check on mount only
    
    // IMPROVED SCROLL HANDLER - Simple and responsive
    const handleSafetyScroll = (e) => {
      console.log('🔥 SAFETY AREA SCROLL DETECTED!', e.deltaY, 'from:', e.target.className);
      
      // Simple blocking - only during active transitions
      const now = Date.now();
      const globalTransitionTime = now - (window.lastScrollTransitionTime || 0);
      
      if (isTransitioning || window.isScrollTransitioning || globalTransitionTime < 1500) {
        console.log('🚫 BLOCKING Safety scroll - transition in progress or too recent:', globalTransitionTime, 'ms ago');
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      
      // Responsive threshold
      if (e.deltaY > 2) {
        const safetySection = document.querySelector('.safety-container');
        const ctaSection = document.querySelector('.testimonial-section');
        
        if (safetySection && ctaSection) {
          const safetyRect = safetySection.getBoundingClientRect();
          
          // Check if we're actually in the Safety Intelligence section
          if (safetyRect.top < window.innerHeight && safetyRect.bottom > 0) {
            console.log('🚀 SAFETY -> CTA SCROLL TRIGGERED from Safety Intelligence area!');
            
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Set transition flags
            isTransitioning = true;
            lastTransitionTime = now;
            window.isScrollTransitioning = true;
            window.lastScrollTransitionTime = now;
            
            // Add tear effects
            const leftTitle = safetySection.querySelector('.left-title');
            const rows = safetySection.querySelectorAll('.safety-row');
            
            if (leftTitle) leftTitle.classList.add('tear-left');
            if (rows[0]) rows[0].classList.add('tear-right');
            if (rows[1]) rows[1].classList.add('tear-left');
            if (rows[2]) rows[2].classList.add('tear-right');
            
            // Smooth scroll to CTA
            setTimeout(() => {
              ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              setTimeout(() => {
                console.log('✅ SAFETY -> CTA complete from Safety Intelligence scroll');
                
                // Reset transition flags after completion
                setTimeout(() => {
                  isTransitioning = false;
                  window.isScrollTransitioning = false;
                  console.log('✅ Safety -> CTA transition complete - ready for next scroll');
                }, 600); // Increased from 400ms to 600ms to prevent chain reactions
              }, 400); // Reduced from 800ms to 400ms
            }, 150); // Reduced from 300ms to 150ms
            
            return false;
          }
        }
      } else {
        console.log('❌ Safety scroll deltaY too small or upward:', e.deltaY);
      }
    };
    
    // Add listeners to comprehensive Safety Intelligence elements for better coverage
    const addScrollListeners = () => {
      // Target main containers AND child elements for better scroll detection
      const safetyWrapper = document.getElementById('safety');
      const safetyContainer = document.querySelector('.safety-container');
      const leftTitle = document.querySelector('.left-title');
      const rightContent = document.querySelector('.right-content');
      
      // All safety rows and their contents
      const safetyRows = document.querySelectorAll('.safety-row');
      const rowContents = document.querySelectorAll('.row-content');
      const rowTitles = document.querySelectorAll('.row-title');
      const rowDescs = document.querySelectorAll('.row-desc');
      
      const elementsToListen = [
        safetyWrapper, 
        safetyContainer, 
        leftTitle, 
        rightContent,
        ...safetyRows,
        ...rowContents,
        ...rowTitles,
        ...rowDescs
      ].filter(element => element);
      
      console.log(`✅ Adding scroll listeners to ${elementsToListen.length} Safety Intelligence elements for comprehensive coverage`);
      
      elementsToListen.forEach((element, index) => {
        if (element) {
          element.addEventListener('wheel', handleSafetyScroll, { passive: false });
          if (index < 5) { // Log first 5 for debugging
            console.log(`✅ Safety listener ${index + 1} added to:`, element.id || element.className);
          }
        }
      });
      
      return elementsToListen;
    };
    
    // Store elements reference for cleanup
    let elementsWithListeners = [];
    
    // Add listeners after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      elementsWithListeners = addScrollListeners();
    }, 500); // Reduced to 500ms for faster setup
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      
      // Remove all listeners
      elementsWithListeners.forEach(element => {
        if (element) {
          element.removeEventListener('wheel', handleSafetyScroll);
        }
      });
    };
  }, []);

  return (
    <section 
      className={`safety-container ${isVisible ? 'slide-in-left' : ''}`}
      style={{
        pointerEvents: 'auto',
        touchAction: 'auto',
        position: 'relative',
        zIndex: 1
      }}
    >
      {/* LEFT VERTICAL TITLE */}
      <div 
        className={`left-title ${shouldTear ? 'tear-left' : ''}`}
        style={{
          pointerEvents: 'auto',
          touchAction: 'auto'
        }}
      >
        <span className="title-dynamic bottom-to-top-text-jan27" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'none', direction: 'ltr', display: 'block', pointerEvents: 'auto', touchAction: 'auto' }}>Dynamic</span>
        <span className="title-safety bottom-to-top-text-jan27" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'none', direction: 'ltr', display: 'block', pointerEvents: 'auto', touchAction: 'auto' }}>Safety Intelligence</span>
      </div>

      {/* RIGHT CONTENT BLOCK */}
      <div 
        className="right-content"
        style={{
          pointerEvents: 'auto',
          touchAction: 'auto'
        }}
      >
        {/* ROW 01 */}
        <div 
          className={`safety-row ${shouldTear ? 'tear-right' : ''}`}
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto'
          }}
        >
          <div className="num">01</div>
          <div className="row-content">
            <h3 className="row-title">Real time incident alerts</h3>
            <p className="row-desc">
              Real-time alerts inform travellers of immediate journey
              disruptions, including localized crime, civil unrest, adverse
              weather, and transport problems, allowing for quick route
              adjustments.
            </p>
          </div>
        </div>

        {/* ROW 02 — GLOW CARD */}
        <div 
          className={`safety-row card ${shouldTear ? 'tear-left' : ''}`}
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto'
          }}
        >
          <div className="num">02</div>
          <div className="row-content">
            <h3 className="row-title">AI Safety Intelligence</h3>
            <p className="row-desc">
              AI Safety Intelligence analyzes the impact of an incident,
              calculates your distance from the event, and dynamically generates
              safe alternate routes while highlighting specific areas to avoid.
            </p>
          </div>
        </div>

        {/* ROW 03 */}
        <div 
          className={`safety-row ${shouldTear ? 'tear-right' : ''}`}
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto'
          }}
        >
          <div className="num">03</div>
          <div className="row-content">
            <h3 className="row-title">Destination Risk Assessment</h3>
            <p className="row-desc">
              Stay vigilant against petty crime, recognize common scams, and
              always prioritize secure and verified transport/walking methods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyIntelligence;