import React, { useEffect, useState, useRef } from 'react';
import "./Styles/PromoVideoSection.css";

const PromoVideoSection = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const isPromoSettled = useRef(false);
  const justLandedInPromo = useRef(false);
  const scrollTimeout = useRef(null);
  const isAnimating = useRef(false);
  const lastScrollTime = useRef(0);
  const isScrollBlocked = useRef(false);
  const isInAutomaticTransition = useRef(false);

  useEffect(() => {
    let touchStartY = 0;
    let touchStartX = 0;
    let touchEndY = 0;
    let touchEndX = 0;

    const checkVisibility = () => {
      if (isAnimating.current) return;

      const promoSection = document.getElementById('about');
      if (promoSection) {
        const promoRect = promoSection.getBoundingClientRect();
        if (promoRect.top < window.innerHeight * 0.6 && promoRect.bottom > 0) {
          promoSection.classList.add('visible');
        }
      }
      
      // ALWAYS reset CTA elements when Footer is visible
      const footerSection = document.getElementById('footer');
      const ctaSection = document.querySelector('.testimonial-section');
      if (footerSection && ctaSection) {
        const footerRect = footerSection.getBoundingClientRect();
        if (footerRect.top < window.innerHeight * 1.1 && footerRect.bottom > -window.innerHeight * 0.1) {
          const feedbackCard = ctaSection.querySelector('.feedback-card');
          const navBtns = ctaSection.querySelectorAll('.nav-btn');
          const tearWrappers = ctaSection.querySelectorAll('.tear-wrapper-left, .tear-wrapper-right');
          
          if (feedbackCard) {
            feedbackCard.classList.remove('tear-away');
            feedbackCard.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important; display: block !important;';
          }
          
          navBtns.forEach(btn => {
            btn.classList.remove('tear-away', 'tear-right-arrow');
            btn.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          });
          
          tearWrappers.forEach(wrapper => {
            wrapper.classList.remove('tear-left', 'tear-right');
            wrapper.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important; display: block !important;';
          });
        }
      }
      
      requestAnimationFrame(checkVisibility);
    };

    const handleScroll = (e) => {
      const now = Date.now();
      console.log('🔥 MAIN SCROLL HANDLER TRIGGERED, deltaY:', e.deltaY, 'time:', now);
      
      // CHECK GLOBAL TRANSITION FLAGS FIRST - BUT ALLOW FOOTER -> CTA UPWARD SCROLL
      const globalTransitionTime = now - (window.lastScrollTransitionTime || 0);
      
      // Simple global blocking without footer exception for now
      if (window.isScrollTransitioning || globalTransitionTime < 1000) {
        console.log('🚫 BLOCKING main scroll - global transition in progress or too recent:', globalTransitionTime, 'ms ago');
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
      
      // Original blocking behavior for smooth transitions
      if (isAnimating.current || isScrollBlocked.current) {
        const timeSinceLastScroll = now - lastScrollTime.current;
        if (timeSinceLastScroll > 3000) { // Back to original 3 seconds
          console.log('🔧 FORCE RESET - Animation stuck for', timeSinceLastScroll, 'ms, clearing state');
          isAnimating.current = false;
          isScrollBlocked.current = false;
          isInAutomaticTransition.current = false;
          lastScrollTime.current = 0;
        } else {
          console.log('⛔ Scroll blocked - isScrollBlocked:', isScrollBlocked.current, 'isAnimating:', isAnimating.current);
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        }
      }

      // Original chain reaction prevention
      if (lastScrollTime.current > 0 && (now - lastScrollTime.current) < 500) {
        console.log('⛔ Scroll blocked - too soon, time since last:', now - lastScrollTime.current);
        e.preventDefault();
        return false;
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      scrollTimeout.current = setTimeout(() => {
        if (justLandedInPromo.current) {
          justLandedInPromo.current = false;
        }
      }, 100);

      const promoSection = document.getElementById('about');
      const downloadSection = document.querySelector('.download-section');
      const safetySection = document.querySelector('.safety-container');
      const safetyWrapper = document.getElementById('safety');
      const ctaSection = document.querySelector('.testimonial-section');
      const footerSection = document.getElementById('footer');

      // 1. Download -> Safety Transition - HANDLED BY DownloadSection.js
      // Removed from here to prevent conflicts - DownloadSection handles this transition directly

      // 2. Promo -> Download Transition
      if (promoSection && downloadSection) {
        const promoRect = promoSection.getBoundingClientRect();

        if (promoRect.top > 100) {
          isPromoSettled.current = false;
          justLandedInPromo.current = false;
          setIsDownloadVisible(false);
          setIsExiting(false);
          if (promoRect.top > window.innerHeight * 0.9) {
            promoSection.classList.remove('visible');
          }
        }
        
        if (promoRect.top > -200 && promoRect.top <= 0 && (isDownloadVisible || isExiting)) {
          setIsDownloadVisible(false);
          setIsExiting(false);
        }
        
        if (promoRect.top <= 0 && promoRect.bottom > window.innerHeight * 0.5 && !promoSection.classList.contains('visible')) {
          promoSection.classList.add('visible');
          setIsDownloadVisible(false);
          setIsExiting(false);
        }
        
        // Hero -> Promo
        if (!isPromoSettled.current && promoRect.top <= window.innerHeight * 1.5 && promoRect.bottom > 0) {
          if (e.deltaY > 5) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Set global transition flags
            window.isScrollTransitioning = true;
            window.lastScrollTransitionTime = now;
            
            isScrollBlocked.current = true;
            isAnimating.current = true;
            lastScrollTime.current = now;
            justLandedInPromo.current = true;
            
            promoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
            setTimeout(() => {
              promoSection.classList.add('visible');
            }, 300);

            setTimeout(() => {
              isPromoSettled.current = true;
              isAnimating.current = false;
              setTimeout(() => {
                isScrollBlocked.current = false;
                lastScrollTime.current = 0;
                // Reset global flags
                window.isScrollTransitioning = false;
                console.log('✅ Hero -> Promo transition complete');
              }, 800);
            }, 800);
            return false;
          }
        }

        // Promo -> Download - RESTORE ORIGINAL SMOOTH BEHAVIOR
        if (promoRect.top < window.innerHeight && promoRect.bottom > 0) {
          if (isPromoSettled.current && !justLandedInPromo.current && (e.deltaY > 3 || e.deltaX > 3) && !isDownloadVisible && !isExiting) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Set global transition flags
            window.isScrollTransitioning = true;
            window.lastScrollTransitionTime = now;
            
            isScrollBlocked.current = true;
            isAnimating.current = true;
            lastScrollTime.current = now;

            setIsExiting(true);
            
            setTimeout(() => {
              setIsDownloadVisible(true);
            }, 30);
            
            setTimeout(() => {
              downloadSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
              
              setTimeout(() => {
                isAnimating.current = false;
                setTimeout(() => {
                  isScrollBlocked.current = false;
                  lastScrollTime.current = 0;
                  // Reset global flags
                  window.isScrollTransitioning = false;
                  console.log('✅ Promo -> Download transition complete - STOPPED at Download');
                }, 800); // Back to original 800ms
              }, 800);
            }, 200); 
            
            return false;
          }

          // Promo -> Hero
          if (isPromoSettled.current && e.deltaY < -20 && !isDownloadVisible && !isExiting) {
            if (promoRect.top >= -window.innerHeight * 0.1) {
              e.preventDefault();
              e.stopPropagation();
              e.stopImmediatePropagation();
              
              // Set global transition flags
              window.isScrollTransitioning = true;
              window.lastScrollTransitionTime = now;
              
              isScrollBlocked.current = true;
              isAnimating.current = true;
              lastScrollTime.current = now;
              
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                isPromoSettled.current = false;
                isAnimating.current = false;
                promoSection.classList.remove('visible');
                setTimeout(() => {
                  isScrollBlocked.current = false;
                  lastScrollTime.current = 0;
                  // Reset global flags
                  window.isScrollTransitioning = false;
                  console.log('✅ Promo -> Hero transition complete');
                }, 800);
              }, 800);
              return false;
            }
          }
        }
      }

      // 3. Safety -> CTA Transition - HANDLED BY SafetyIntelligence.js
      // Removed from here to prevent conflicts - SafetyIntelligence handles this transition

      // 4. CTA -> Footer Transition - MANUAL USER SCROLL ONLY
      if (ctaSection && footerSection) {
        const rect = ctaSection.getBoundingClientRect();
        
        console.log('=== CTA SECTION DEBUG ===');
        console.log('CTA rect:', rect.top, rect.bottom);
        console.log('DeltaY:', e.deltaY);
        console.log('isInAutomaticTransition:', isInAutomaticTransition.current);
        console.log('Time since last scroll:', now - lastScrollTime.current);
        
        const feedbackCard = ctaSection.querySelector('.feedback-card');
        if (feedbackCard) {
          feedbackCard.classList.remove('tear-away');
        }
        
        // RELAXED CONDITIONS: Allow immediate user scroll with minimal delay
        const ctaVisible = rect.top < window.innerHeight && rect.bottom > 0;
        const notInAutoTransition = !isInAutomaticTransition.current;
        const minimalDelay = (now - lastScrollTime.current) > 800 || lastScrollTime.current === 0; // Reduced from 1200ms to 800ms
        const normalScroll = e.deltaY > 2; // Reduced threshold
        
        console.log('CTA visible:', ctaVisible);
        console.log('Not in auto transition:', notInAutoTransition);
        console.log('Minimal delay:', minimalDelay, 'time since last:', now - lastScrollTime.current);
        console.log('Normal scroll:', normalScroll);
        
        if (ctaVisible && notInAutoTransition && minimalDelay && normalScroll) {
          console.log('🚀 CTA -> Footer: USER SCROLL TRIGGERED!');
          
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          // Set global transition flags
          window.isScrollTransitioning = true;
          window.lastScrollTransitionTime = now;
          
          // Block to prevent chain reactions
          isScrollBlocked.current = true;
          isAnimating.current = true;
          lastScrollTime.current = now;
          
          setTimeout(() => {
            footerSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            setTimeout(() => {
              const feedbackCard = ctaSection.querySelector('.feedback-card');
              const navBtns = ctaSection.querySelectorAll('.nav-btn');
              const tearWrappers = ctaSection.querySelectorAll('.tear-wrapper-left, .tear-wrapper-right');
              
              if (feedbackCard) {
                feedbackCard.classList.remove('tear-away');
                feedbackCard.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
              }
              
              navBtns.forEach(btn => {
                btn.classList.remove('tear-away', 'tear-right-arrow');
                btn.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
              });
              
              tearWrappers.forEach(wrapper => {
                wrapper.classList.remove('tear-left', 'tear-right');
                wrapper.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
              });
              
              isAnimating.current = false;
              setTimeout(() => {
                isScrollBlocked.current = false;
                lastScrollTime.current = 0;
                // Reset global flags
                window.isScrollTransitioning = false;
                console.log('✅ CTA -> Footer transition complete');
              }, 800);
            }, 100);
          }, 200);
          return false;
        } else {
          console.log('❌ CTA -> Footer conditions not met');
          if (!notInAutoTransition) {
            console.log('🚫 BLOCKED: Still in automatic transition from Safety -> CTA');
          }
        }
        console.log('=== END CTA DEBUG ===');
      }

      // 4.5. CTA -> Safety Intelligence (Up) - DIRECT TO SAFETY SECTION
      if (ctaSection && safetySection) {
        const ctaRect = ctaSection.getBoundingClientRect();
        
        console.log('=== CTA -> SAFETY DEBUG ===');
        console.log('CTA rect:', ctaRect.top, ctaRect.bottom);
        console.log('DeltaY:', e.deltaY);
        
        // When CTA is visible and scrolling up - BUT NOT when footer is also visible
        const ctaVisible = ctaRect.top < window.innerHeight && ctaRect.bottom > 0;
        const footerRect = footerSection.getBoundingClientRect();
        const footerVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
        console.log('CTA visible:', ctaVisible);
        console.log('Footer visible:', footerVisible);
        
        if (ctaVisible && e.deltaY < -2 && !footerVisible) { // Upward scroll to Safety Intelligence
          console.log('🚀 CTA -> Safety Intelligence upward scroll TRIGGERED!');
          
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          // Set global transition flags
          window.isScrollTransitioning = true;
          window.lastScrollTransitionTime = now;
          
          // Same blocking pattern as other sections
          isScrollBlocked.current = true;
          isAnimating.current = true;
          lastScrollTime.current = now;
          
          // Reset any CTA tear effects before scrolling back
          const feedbackCard = ctaSection.querySelector('.feedback-card');
          const navBtns = ctaSection.querySelectorAll('.nav-btn');
          const tearWrappers = ctaSection.querySelectorAll('.tear-wrapper-left, .tear-wrapper-right');
          
          if (feedbackCard) {
            feedbackCard.classList.remove('tear-away');
            feedbackCard.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          }
          
          navBtns.forEach(btn => {
            btn.classList.remove('tear-away', 'tear-right-arrow');
            btn.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          });
          
          tearWrappers.forEach(btn => {
            btn.classList.remove('tear-left', 'tear-right');
            btn.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          });
          
          // Reset Safety Intelligence tear effects (in case they were applied)
          const leftTitle = safetySection ? safetySection.querySelector('.left-title') : null;
          const rows = safetySection ? safetySection.querySelectorAll('.safety-row') : [];
          
          if (leftTitle) leftTitle.classList.remove('tear-left');
          if (rows[0]) rows[0].classList.remove('tear-right');
          if (rows[1]) rows[1].classList.remove('tear-left');
          if (rows[2]) rows[2].classList.remove('tear-right');
          
          // Smooth scroll to Safety Intelligence section
          setTimeout(() => {
            const safetyWrapper = document.getElementById('safety');
            const targetElement = safetyWrapper || safetySection;
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            
            setTimeout(() => {
              console.log('🎯 Safety Intelligence section reached from CTA upward scroll');
              
              // Same cleanup pattern as other sections
              isAnimating.current = false;
              setTimeout(() => {
                isScrollBlocked.current = false;
                lastScrollTime.current = 0;
                // Reset global flags
                window.isScrollTransitioning = false;
                console.log('✅ CTA -> Safety Intelligence upward transition complete');
              }, 1500); // Increased to 1500ms to prevent chain reactions
            }, 800);
          }, 200);
          
          return false;
        } else {
          console.log('❌ CTA -> Safety Intelligence conditions not met');
        }
        console.log('=== END CTA -> SAFETY DEBUG ===');
      }

      // 5. Footer -> CTA (Up) - IMPROVED FOR CONSISTENT ONE-SCROLL BEHAVIOR
      if (footerSection && ctaSection) {
        const footerRect = footerSection.getBoundingClientRect();
        
        console.log('=== FOOTER SECTION DEBUG ===');
        console.log('Footer rect:', footerRect.top, footerRect.bottom);
        console.log('Window height:', window.innerHeight);
        console.log('DeltaY:', e.deltaY);
        
        // More generous detection - when footer is visible in viewport
        const footerVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
        console.log('Footer visible:', footerVisible);
        
        if (footerVisible && e.deltaY < -2) { // Removed global transition time check
          console.log('🚀 Footer -> CTA upward scroll TRIGGERED!');
          
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          
          // Set global transition flags
          window.isScrollTransitioning = true;
          window.lastScrollTransitionTime = now;
          
          // Same blocking pattern as other sections
          isScrollBlocked.current = true;
          isAnimating.current = true;
          lastScrollTime.current = now;
          
          // Reset any CTA tear effects before scrolling back
          const feedbackCard = ctaSection.querySelector('.feedback-card');
          const navBtns = ctaSection.querySelectorAll('.nav-btn');
          const tearWrappers = ctaSection.querySelectorAll('.tear-wrapper-left, .tear-wrapper-right');
          
          if (feedbackCard) {
            feedbackCard.classList.remove('tear-away');
            feedbackCard.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          }
          
          navBtns.forEach(btn => {
            btn.classList.remove('tear-away', 'tear-right-arrow');
            btn.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          });
          
          tearWrappers.forEach(wrapper => {
            wrapper.classList.remove('tear-left', 'tear-right');
            wrapper.style.cssText = 'transition: none !important; transform: translate(0, 0) !important; opacity: 1 !important; visibility: visible !important;';
          });
          
          // Smooth scroll to CTA with same timing as other sections
          setTimeout(() => {
            ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => {
              console.log('🎯 CTA reached from Footer upward scroll');
              
              // Same cleanup pattern as other sections
              isAnimating.current = false;
              setTimeout(() => {
                isScrollBlocked.current = false;
                lastScrollTime.current = 0;
                // Reset global flags
                window.isScrollTransitioning = false;
                console.log('✅ Footer -> CTA upward transition complete');
              }, 800);
            }, 800);
          }, 200);
          
          return false;
        } else {
          console.log('❌ Footer -> CTA conditions not met');
        }
        console.log('=== END FOOTER DEBUG ===');
      }
    };

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (isAnimating.current) {
        e.preventDefault();
        return;
      }
      touchEndY = e.touches[0].clientY;
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      // Touch handling logic (simplified for clean code)
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('scroll', checkVisibility);

    checkVisibility();

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('scroll', checkVisibility);
    };
  }, [isDownloadVisible, isExiting]);

  return (
    <section id="about" className="promo-section">
      <h3 className="promo-about-title">About</h3>

      {/* LEFT VIDEO CONTENT */}
      <div 
        className={`promo-video-box ${isExiting ? 'animate-exit-left' : ''}`}
        style={{
          width: '60%',
          marginLeft: '-32px',
          flexShrink: '0'
        }}
      >
        <video
          className="promo-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            background: 'transparent'
          }}
        >
          <source src="/promo-video.webm" type="video/webm" />
          <source src="/promo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* RIGHT TEXT CONTENT */}
      <div 
        className={`promo-text-box ${isExiting ? 'animate-exit-right' : ''}`}
        style={{
          width: '36%',
          flexGrow: '1'
        }}
      >
        <h2 className="promo-heading">
          <span className="main-title">REAL-TIME SAFETY</span>
          <span className="main-title">INTELLIGENCE FOR TRAVELLERS</span>
        </h2>

        <p className="promo-description">
          Introducing knowyourtrips, the dedicated app designed to inform and empower every traveler. We deliver real-time safety intelligence—not just general advice—to help you actively avoid incidents that could disrupt your journey. Navigate any city, new or familiar, with the confidence that comes from knowing the ground truth. Your peace of mind starts here.
        </p>
      </div>
      
      {/* Tear strip visual */}
      {isDownloadVisible && <div className="tear-strip-active"></div>}
    </section>
  );
};

export default PromoVideoSection;