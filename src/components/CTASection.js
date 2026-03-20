import React, { useState, useEffect } from "react";
import "./Styles/CTASection.css";

import quote from "../assets/ComaImg.png";

const feedbackList = [
  {
    id: 1,
    name: "John Doe",
    title: "Travel Vlogger",
    rating: 5,
    text: "Highlight recommend it for solo travellers - The real time incident alerts when in a new country helps me to navigate the city easily. However one feedback is, the app currently is pushing too many notification, if you could tone it down to major alerts happening around me.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Content Creator",
    rating: 5,
    text: "Brillant App - Finally a app which actually apps travellers, a must use app for all the travellers.",
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Digital Nomad",
    rating: 4,
    text: "Safety Feature - Real time safety alerts when in new country helps me to stay on top of my journey.",
  },
];

const CTASection = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const [shouldTear, setShouldTear] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const nextSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % feedbackList.length);
      setIsChanging(false);
    }, 200);
  };

  const prevSlide = () => {
    setIsChanging(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + feedbackList.length) % feedbackList.length);
      setIsChanging(false);
    }, 200);
  };

  const goToSlide = (slideIndex) => {
    if (slideIndex !== index) {
      setIsChanging(true);
      setTimeout(() => {
        setIndex(slideIndex);
        setIsChanging(false);
      }, 200);
    }
  };

  // Auto-slide every 3 seconds, but pause when hovering
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsChanging(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % feedbackList.length);
        setIsChanging(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, index]);

  // Tearing animation when scrolling to end of CTA section
  useEffect(() => {
    const handleScroll = () => {
      const ctaSection = document.querySelector('.testimonial-section');
      
      if (ctaSection) {
        const ctaRect = ctaSection.getBoundingClientRect();
        const ctaBottom = ctaRect.bottom;
        
        // Tear when bottom of CTA section reaches 70% of viewport (earlier trigger)
        if (ctaBottom < window.innerHeight * 0.7) {
          setShouldTear(true);
        } else {
          setShouldTear(false);
        }
      }
    };

    // REMOVE SCROLL LISTENER - Let PromoVideoSection handle all scrolling
    // window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount only
    
    // Set up interval to check visibility instead of scroll listener
    const intervalId = setInterval(handleScroll, 100);
    
    // Add wheel event delegation to CTA section for scroll forwarding
    const ctaWrapper = document.getElementById('cta');
    const ctaContainer = document.querySelector('.testimonial-section');
    
    const forwardScrollEvent = (e) => {
      console.log('🎯 CTA SCROLL EVENT CAPTURED!', e.deltaY);
      
      // CHECK GLOBAL TRANSITION FLAGS - Extended blocking to prevent chain reactions
      const now = Date.now();
      const globalTransitionTime = now - (window.lastScrollTransitionTime || 0);
      
      // Simple blocking - only during active transitions
      if (window.isScrollTransitioning) {
        console.log('🚫 BLOCKING CTA scroll forwarding - transition in progress');
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      
      // Responsive threshold for normal user scrolls
      if (Math.abs(e.deltaY) > 2) {
        console.log('🚀 Forwarding CTA scroll event to window');
        // ONLY FORWARD TO MAIN HANDLER - NO DIRECT SCROLLING
        const newEvent = new WheelEvent('wheel', {
          deltaY: e.deltaY,
          deltaX: e.deltaX,
          deltaZ: e.deltaZ,
          deltaMode: e.deltaMode,
          bubbles: true,
          cancelable: true,
          clientX: e.clientX,
          clientY: e.clientY
        });
        
        // Dispatch to window so PromoVideoSection can handle it
        window.dispatchEvent(newEvent);
      } else {
        console.log('❌ CTA scroll too small, not forwarding:', e.deltaY);
      }
    };
    
    if (ctaWrapper) {
      console.log('✅ Adding wheel listener to CTA wrapper');
      ctaWrapper.addEventListener('wheel', forwardScrollEvent, { passive: false });
    } else {
      console.log('❌ CTA wrapper not found');
    }
    if (ctaContainer) {
      console.log('✅ Adding wheel listener to CTA container');
      ctaContainer.addEventListener('wheel', forwardScrollEvent, { passive: false });
    } else {
      console.log('❌ CTA container not found');
    }
    
    // Add listeners to ALL CTA elements to ensure scroll capture
    const feedbackCard = document.querySelector('.feedback-card');
    const feedbackContent = document.querySelector('.feedback-content');
    const sectionHeading = document.querySelector('.section-heading');
    
    if (feedbackCard) {
      console.log('✅ Adding wheel listener to feedback card');
      feedbackCard.addEventListener('wheel', forwardScrollEvent, { passive: false });
    }
    if (feedbackContent) {
      console.log('✅ Adding wheel listener to feedback content');
      feedbackContent.addEventListener('wheel', forwardScrollEvent, { passive: false });
    }
    if (sectionHeading) {
      console.log('✅ Adding wheel listener to section heading');
      sectionHeading.addEventListener('wheel', forwardScrollEvent, { passive: false });
    }
    
    return () => {
      clearInterval(intervalId);
      if (ctaWrapper) {
        ctaWrapper.removeEventListener('wheel', forwardScrollEvent);
      }
      if (ctaContainer) {
        ctaContainer.removeEventListener('wheel', forwardScrollEvent);
      }
      
      // Remove listeners from all elements
      const feedbackCard = document.querySelector('.feedback-card');
      const feedbackContent = document.querySelector('.feedback-content');
      const sectionHeading = document.querySelector('.section-heading');
      
      if (feedbackCard) {
        feedbackCard.removeEventListener('wheel', forwardScrollEvent);
      }
      if (feedbackContent) {
        feedbackContent.removeEventListener('wheel', forwardScrollEvent);
      }
      if (sectionHeading) {
        sectionHeading.removeEventListener('wheel', forwardScrollEvent);
      }
      // window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnter = () => {
    setIsPaused(true); // Pause auto-slide when hovering
  };

  const handleMouseLeave = () => {
    setIsPaused(false); // Resume auto-slide when not hovering
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`star ${index < rating ? 'filled' : 'empty'}`}
      >
        ★
      </span>
    ));
  };

  const currentFeedback = feedbackList[index];

  return (
    <section 
      className="testimonial-section"
      style={{
        pointerEvents: 'auto',
        touchAction: 'auto',
        position: 'relative',
        zIndex: 1
      }}
    >
      <h2 className="section-heading">User Feedback</h2>

      {/* MAIN FEEDBACK CARD WITH ARROWS */}
      <div 
        className={`feedback-card ${shouldTear ? 'tear-away' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          pointerEvents: 'auto',
          touchAction: 'auto'
        }}
      >
        {/* LEFT ARROW */}
        <button 
          className={`nav-btn left ${shouldTear ? 'tear-away' : ''}`} 
          onClick={prevSlide}
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto'
          }}
        >
        </button>

        <div 
          className={`feedback-content ${isChanging ? 'changing' : ''}`}
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto'
          }}
        >
          {/* LEFT SIDE - USER INFO */}
          <div 
            className={`tear-wrapper-left ${shouldTear ? 'tear-left' : ''}`}
            style={{
              pointerEvents: 'auto',
              touchAction: 'auto'
            }}
          >
            <div className="user-info">
              <div className="rating-container">
                <div className="star-rating">
                  {renderStars(currentFeedback.rating)}
                </div>
              </div>
              <div className="user-details">
                <h3 className="user-name">{currentFeedback.name}</h3>
                <p className="user-title">{currentFeedback.title}</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FEEDBACK TEXT */}
          <div 
            className={`tear-wrapper-right ${shouldTear ? 'tear-right' : ''}`}
            style={{
              pointerEvents: 'auto',
              touchAction: 'auto'
            }}
          >
            <div className="feedback-text-area">
              <div className="quote-icon-container">
                <img src={quote} className="quote-icon" alt="quote" />
              </div>
              <p className="feedback-text">{currentFeedback.text}</p>
            </div>
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button 
          className={`nav-btn right ${shouldTear ? 'tear-right-arrow' : ''}`} 
          onClick={nextSlide}
          style={{
            pointerEvents: 'auto',
            touchAction: 'auto'
          }}
        >
        </button>
      </div>
    </section>
  );
};

export default CTASection;
