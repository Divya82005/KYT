import React, { useEffect, useState, useRef } from 'react';
import "./Styles/PromoVideoSection.css";

const PromoVideoSection = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const isPromoSettled = useRef(false);
  const justLandedInPromo = useRef(false);
  const scrollTimeout = useRef(null);
  const isAnimating = useRef(false);

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
    };

    const handleScroll = (e) => {
      // Clear existing timeout and set a new one to detect when scrolling stops
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Reset the landing flag only after user stops scrolling for 500ms
      scrollTimeout.current = setTimeout(() => {
        if (justLandedInPromo.current) {
          justLandedInPromo.current = false;
        }
      }, 100);

      if (isAnimating.current) {
        e.preventDefault();
        return;
      }

      const promoSection = document.getElementById('about');
      const downloadSection = document.querySelector('.download-section');
      const safetySection = document.querySelector('.safety-container');
      const ctaSection = document.querySelector('.testimonial-section');
      const footerSection = document.getElementById('footer');

      // 1. Promo -> Download Transition
      if (promoSection && downloadSection) {
        const promoRect = promoSection.getBoundingClientRect();

        // Reset settled state if user scrolls back up to Hero
        if (promoRect.top > 100) {
          isPromoSettled.current = false;
          justLandedInPromo.current = false;
          // Reset animation states
          setIsDownloadVisible(false);
          setIsExiting(false);
          if (promoRect.top > window.innerHeight * 0.9) {
            promoSection.classList.remove('visible');
          }
        }
        
        // Reset animation states when returning to promo section from below
        if (promoRect.top > -200 && promoRect.top <= 0 && (isDownloadVisible || isExiting)) {
          setIsDownloadVisible(false);
          setIsExiting(false);
        }
        
        // Make promo section visible when scrolling back to it
        if (promoRect.top <= 0 && promoRect.bottom > window.innerHeight * 0.5 && !promoSection.classList.contains('visible')) {
          promoSection.classList.add('visible');
          // Reset animation states to bring elements back
          setIsDownloadVisible(false);
          setIsExiting(false);
        }
        
        // Case: Arriving at Promo (Hero -> Promo)
        // If we are anywhere above the Promo section (e.g., in Hero) and scrolling down, snap to Promo
        if (!isPromoSettled.current && promoRect.top <= window.innerHeight && promoRect.bottom > window.innerHeight * 0.3) {
          if (e.deltaY > 0) {
            e.preventDefault();
            isAnimating.current = true;
            justLandedInPromo.current = true;
            
            // Snap to exact top position
            const targetScrollPos = window.scrollY + promoRect.top;
            window.scrollTo({ top: targetScrollPos, behavior: 'smooth' });
            
            // Make promo section visible early for entrance animation
            setTimeout(() => {
              promoSection.classList.add('visible');
            }, 500);

            // Mark as settled after scroll completes
            setTimeout(() => {
              isPromoSettled.current = true;
              isAnimating.current = false;
            }, 1000); // Just enough time for scroll to complete
            return;
          }
        }

        // Check if we are inside the promo section
        if (promoRect.top <= 50 && promoRect.bottom > window.innerHeight * 0.3) {
          // Trigger on Scroll Down OR Scroll Right (MUST BE SETTLED AND NOT JUST LANDED)
          if (isPromoSettled.current && (e.deltaY > 0 || e.deltaX > 0) && !isDownloadVisible && !isExiting) {
            e.preventDefault();
            isAnimating.current = true;

            // A. Trigger the separation animation (Left/Right move)
            setIsExiting(true);
            
            // B. Reveal tear strip immediately so it appears "already there"
            setTimeout(() => {
              setIsDownloadVisible(true);
            }, 50);
            
            // C. Scroll to Download Section - Reduced delay for "one scroll" feel
            setTimeout(() => {
              const yOffset = -80;
              const y = downloadSection.getBoundingClientRect().top + window.scrollY + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
              
              // Reset animation lock
              setTimeout(() => {
                isAnimating.current = false;
              }, 1000);
            }, 900); 
            
            return;
          }

          // Scroll Up to Hero Section
          if (isPromoSettled.current && e.deltaY < 0 && !isDownloadVisible && !isExiting) {
            if (promoRect.top >= -100) {
              e.preventDefault();
              isAnimating.current = true;
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setTimeout(() => {
                isPromoSettled.current = false;
                isAnimating.current = false;
                promoSection.classList.remove('visible');
              }, 1000);
              return;
            }
          }
        }
      }

      // 3. Safety -> CTA Transition (Animation + Scroll)
      if (safetySection && ctaSection) {
        const rect = safetySection.getBoundingClientRect();
        // Check if safety section is fully in view
        if (rect.top <= window.innerHeight * 0.85 && rect.bottom > 0) {
          if (e.deltaY > 0 && rect.top <= 100) {
            e.preventDefault();
            isAnimating.current = true;
            
            // Trigger animation on Safety elements
            const leftTitle = safetySection.querySelector('.left-title');
            const rows = safetySection.querySelectorAll('.safety-row');
            
            if (leftTitle) leftTitle.classList.add('tear-left');
            if (rows[0]) rows[0].classList.add('tear-right');
            if (rows[1]) rows[1].classList.add('tear-left');
            if (rows[2]) rows[2].classList.add('tear-right');
            
            setTimeout(() => {
              ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => { isAnimating.current = false; }, 1000);
            }, 800);
            return;
          }
        }
      }

      // 3. Download -> Safety Transition (Animation + Scroll)
      if (downloadSection && safetySection && promoSection) {
        const downloadRect = downloadSection.getBoundingClientRect();
        const promoRect = promoSection.getBoundingClientRect();
        const safetyRect = safetySection.getBoundingClientRect();
        const inDownloadSection = downloadRect.top > -500 && downloadRect.top < 100 && promoRect.bottom < 100 && !downloadSection.classList.contains('shrink-right') && safetyRect.top > window.innerHeight * 0.85;

        if (inDownloadSection) {
          if (e.deltaY > 0) { // Scroll Down to Safety
            e.preventDefault();
            isAnimating.current = true;
            downloadSection.classList.add('shrink-right');
            setTimeout(() => {
              safetySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => { isAnimating.current = false; }, 1000);
            }, 800);
            return;
          }
          if (e.deltaY < 0) { // Scroll Up to Promo
            e.preventDefault();
            isAnimating.current = true;
            
            // Reset animation states to ensure content is visible
            setIsExiting(false);
            setIsDownloadVisible(false);
            promoSection.classList.add('visible');

            promoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => { isAnimating.current = false; }, 1000);
            return;
          }
        }
      }

      // 4. CTA -> Footer (Down) & CTA -> Safety (Up)
      if (ctaSection && footerSection) {
        const rect = ctaSection.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom > window.innerHeight * 0.3) {
           if (e.deltaY > 0) {
             e.preventDefault();
             isAnimating.current = true;
             footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
             setTimeout(() => { isAnimating.current = false; }, 1000);
             return;
           }
           if (e.deltaY < 0 && safetySection) {
             if (rect.top >= -100) {
               e.preventDefault();
               isAnimating.current = true;

               // Trigger animation on CTA elements
               const feedbackCard = ctaSection.querySelector('.feedback-card');
               if (feedbackCard) feedbackCard.classList.add('tear-away');

               setTimeout(() => {
                 // Remove tear classes to reset Safety section
                 const leftTitle = safetySection.querySelector('.left-title');
                 const rows = safetySection.querySelectorAll('.safety-row');
                 if (leftTitle) leftTitle.classList.remove('tear-left');
                 if (rows[0]) rows[0].classList.remove('tear-right');
                 if (rows[1]) rows[1].classList.remove('tear-left');
                 if (rows[2]) rows[2].classList.remove('tear-right');

                 safetySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                 setTimeout(() => { 
                   isAnimating.current = false; 
                   if (feedbackCard) feedbackCard.classList.remove('tear-away');
                 }, 1000);
               }, 800);
               return;
             }
           }
        }
      }

      // 5. Footer -> CTA (Up)
      if (footerSection && ctaSection) {
        const rect = footerSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          if (e.deltaY < 0) {
            e.preventDefault();
            isAnimating.current = true;
            ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => { isAnimating.current = false; }, 1000);
            return;
          }
        }
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
      const promoSection = document.getElementById('about');
      const downloadSection = document.querySelector('.download-section');
      const safetySection = document.querySelector('.safety-container');
      const ctaSection = document.querySelector('.testimonial-section');
      const footerSection = document.getElementById('footer');
      
      if (!isAnimating.current) {
        const touchDiffY = touchStartY - touchEndY;
        const touchDiffX = touchStartX - touchEndX;

        // 1. Promo -> Download
        if (promoSection && downloadSection) {
          const promoRect = promoSection.getBoundingClientRect();
          if (promoRect.top <= 50 && promoRect.bottom > window.innerHeight * 0.3) {
            // Trigger on Swipe Up OR Swipe Left
            if ((touchDiffY > 50 || touchDiffX > 50) && !isDownloadVisible && !isExiting) {
               if (!isPromoSettled.current) {
                  isPromoSettled.current = true; // First swipe settles
                  return;
               }

               e.preventDefault();
               isAnimating.current = true;
               setIsExiting(true); // Start animation

               // Reveal tear strip immediately
               setTimeout(() => {
                  setIsDownloadVisible(true);
               }, 50);

               // Scroll to Download Section
               setTimeout(() => {
                  const yOffset = -80;
                  const y = downloadSection.getBoundingClientRect().top + window.scrollY + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                  setTimeout(() => { isAnimating.current = false; }, 1000);
               }, 900);
               return;
            }

            // Swipe Down (Scroll Up to Hero)
            if (touchDiffY < -50 && !isDownloadVisible && !isExiting) {
              if (isPromoSettled.current && promoRect.top >= -100) {
                e.preventDefault();
                isAnimating.current = true;
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setTimeout(() => {
                  isPromoSettled.current = false;
                  isAnimating.current = false;
                  promoSection.classList.remove('visible');
                }, 1000);
                return;
              }
            }
          }
        }

        // 2. Safety -> CTA (Swipe Up) (MOVED UP)
        if (safetySection && ctaSection) {
           const rect = safetySection.getBoundingClientRect();
           if (rect.top <= window.innerHeight * 0.85 && rect.bottom > 0) {
             if (touchDiffY > 50 && rect.top <= 100) { // Swipe Up
               e.preventDefault();
               isAnimating.current = true;
               
               const leftTitle = safetySection.querySelector('.left-title');
               const rows = safetySection.querySelectorAll('.safety-row');
               
               if (leftTitle) leftTitle.classList.add('tear-left');
               if (rows[0]) rows[0].classList.add('tear-right');
               if (rows[1]) rows[1].classList.add('tear-left');
               if (rows[2]) rows[2].classList.add('tear-right');
               
               setTimeout(() => {
                 ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                 setTimeout(() => { isAnimating.current = false; }, 1000);
               }, 800);
               return;
             }
           }
        }

        // 3. Download -> Safety (Swipe Up/Down)
        if (downloadSection && safetySection && promoSection) {
          const downloadRect = downloadSection.getBoundingClientRect();
          const promoRect = promoSection.getBoundingClientRect();
          const safetyRect = safetySection.getBoundingClientRect();
          const inDownloadSection = downloadRect.top > -500 && downloadRect.top < 100 && promoRect.bottom < 100 && !downloadSection.classList.contains('shrink-right') && safetyRect.top > window.innerHeight * 0.85;

          if (inDownloadSection) {
            if (touchDiffY > 50) { // Swipe Up
              e.preventDefault();
              isAnimating.current = true;
              downloadSection.classList.add('shrink-right');
              setTimeout(() => {
                safetySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { isAnimating.current = false; }, 1000);
              }, 800);
              return;
            }
            if (touchDiffY < -50) { // Swipe Down
              e.preventDefault();
              isAnimating.current = true;
              
              // Reset animation states to ensure content is visible
              setIsExiting(false);
              setIsDownloadVisible(false);
              promoSection.classList.add('visible');

              promoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              setTimeout(() => { isAnimating.current = false; }, 1000);
              return;
            }
          }
        }

        // 4. CTA -> Footer (Swipe Up) & CTA -> Safety (Swipe Down)
        if (ctaSection && footerSection) {
           const rect = ctaSection.getBoundingClientRect();
           if (rect.top <= 50 && rect.bottom > window.innerHeight * 0.3) {
              if (touchDiffY > 50) {
                e.preventDefault();
                isAnimating.current = true;
                footerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                setTimeout(() => { isAnimating.current = false; }, 1000);
                return;
              }
              if (touchDiffY < -50 && safetySection) {
                if (rect.top >= -100) {
                   e.preventDefault();
                   isAnimating.current = true;
                   
                   const feedbackCard = ctaSection.querySelector('.feedback-card');
                   if (feedbackCard) feedbackCard.classList.add('tear-away');

                   setTimeout(() => {
                     const leftTitle = safetySection.querySelector('.left-title');
                     const rows = safetySection.querySelectorAll('.safety-row');
                     if (leftTitle) leftTitle.classList.remove('tear-left');
                     if (rows[0]) rows[0].classList.remove('tear-right');
                     if (rows[1]) rows[1].classList.remove('tear-left');
                     if (rows[2]) rows[2].classList.remove('tear-right');
                     safetySection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                     setTimeout(() => { isAnimating.current = false; if (feedbackCard) feedbackCard.classList.remove('tear-away'); }, 1000);
                   }, 800);
                   return;
                }
              }
           }
        }

        // 5. Footer -> CTA (Swipe Down)
        if (footerSection && ctaSection) {
           const rect = footerSection.getBoundingClientRect();
           if (rect.top < window.innerHeight - 50) {
             if (touchDiffY < -50) { // Swipe Down (Scroll Up)
               e.preventDefault();
               isAnimating.current = true;
               ctaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
               setTimeout(() => { isAnimating.current = false; }, 1000);
               return;
             }
           }
        }
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });
    window.addEventListener('scroll', checkVisibility);

    checkVisibility(); // Check on mount

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
      <div className={`promo-video-box ${isExiting ? 'animate-exit-left' : ''}`}>
        <video
          className="promo-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/promo-video.webm" type="video/webm" />
          <source src="/promo-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* RIGHT TEXT CONTENT */}
      <div className={`promo-text-box ${isExiting ? 'animate-exit-right' : ''}`}>
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
