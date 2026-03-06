import React, { useEffect, useState } from 'react';
import './Styles/SafetyIntelligence.css';

const SafetyIntelligence = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldTear, setShouldTear] = useState(false);

  useEffect(() => {
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

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`safety-container ${isVisible ? 'slide-in-left' : ''}`}>
      {/* LEFT VERTICAL TITLE */}
      <div className={`left-title ${shouldTear ? 'tear-left' : ''}`}>
        <span className="title-dynamic bottom-to-top-text-jan27" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'none', direction: 'ltr', display: 'block' }}>Dynamic</span>
        <span className="title-safety bottom-to-top-text-jan27" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'none', direction: 'ltr', display: 'block' }}>Safety Intelligence</span>
      </div>

      {/* RIGHT CONTENT BLOCK */}
      <div className="right-content">
        {/* ROW 01 */}
        <div className={`safety-row ${shouldTear ? 'tear-right' : ''}`}>
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
        <div className={`safety-row card ${shouldTear ? 'tear-left' : ''}`}>
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
        <div className={`safety-row ${shouldTear ? 'tear-right' : ''}`}>
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