import "./Styles/PromoVideoSection.css";
import { useEffect, useState } from "react";

const PromoVideoSection = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mark that user has scrolled
      if (!hasScrolled) {
        setHasScrolled(true);
      }
      
      const aboutSection = document.querySelector('#about');
      const downloadSection = document.querySelector('.download-section');
      const promoSection = document.querySelector('.promo-section');
      
      if (aboutSection && downloadSection && promoSection) {
        // Check if about section is in viewport - use 50% for better detection
        const aboutRect = aboutSection.getBoundingClientRect();
        const isAboutVisible = aboutRect.top < window.innerHeight * 0.5;
        
        // Add/remove visible class for slide-up animation
        if (isAboutVisible) {
          aboutSection.classList.add('visible');
        } else {
          aboutSection.classList.remove('visible');
        }
        
        // Get positions
        const rect = downloadSection.getBoundingClientRect();
        const promoRect = promoSection.getBoundingClientRect();
        
        // Check if we're on iPad
        const isIPad = window.innerWidth >= 744 && window.innerWidth <= 1023;
        const isMobile = window.innerWidth < 744;
        
        // Debug logging for iPad and Mobile
        if (isIPad || isMobile) {
          console.log('Device - Download Top:', rect.top, 'Threshold (80%):', window.innerHeight * 0.8, 'hasAnimated:', hasAnimated, 'hasScrolled:', hasScrolled, 'isDownloadVisible:', isDownloadVisible);
        }
        
        // Animation trigger logic - same for iPad, mobile, and desktop
        const downloadEntering = rect.top < window.innerHeight * 0.8 && ((isIPad || isMobile) ? hasScrolled : true);
        
        // Only trigger animation once when condition is met
        if (downloadEntering && !hasAnimated) {
          console.log('Triggering animation! isIPad:', isIPad, 'isMobile:', isMobile);
          setIsDownloadVisible(true);
          setHasAnimated(true);
          
          // Automatically bring elements back after 1.5 seconds
          setTimeout(() => {
            console.log('Resetting isDownloadVisible to false');
            setIsDownloadVisible(false);
          }, 1500);
        }
        
        // Reset hasAnimated when scrolling back up
        // For both desktop and iPad: reset to allow re-animation
        // Reset when download section is below viewport OR when promo section is back at top
        if (rect.top > window.innerHeight || promoRect.top > window.innerHeight * 0.3) {
          if (hasAnimated) {
            console.log('Resetting hasAnimated - rect.top:', rect.top, 'promoRect.top:', promoRect.top);
          }
          setHasAnimated(false);
          setIsDownloadVisible(false); // Also reset the visible state
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated, hasScrolled]);

  return (
    <section id="about" className="promo-section">
      {/* ABOUT TITLE - Now positioned outside containers */}
      <h3 className="promo-about-title">About</h3>

      {/* LEFT VIDEO BOX */}
      <div className={`promo-video-box ${isDownloadVisible ? 'fade-left' : ''}`}>
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
      <div className={`promo-text-box ${isDownloadVisible ? 'fade-right' : ''}`}>
        <h2 className="promo-heading">
          <span className="main-title">REAL-TIME SAFETY</span>
          <span className="main-title">INTELLIGENCE FOR TRAVELLERS</span>
        </h2>

        <p className="promo-description">
          Introducing knowyourtrips, the dedicated app designed to inform and empower every traveler. We deliver real-time safety intelligence—not just general advice—to help you actively avoid incidents that could disrupt your journey. Navigate any city, new or familiar, with the confidence that comes from knowing the ground truth. Your peace of mind starts here.
        </p>
      </div>
    </section>
  );
};

export default PromoVideoSection;