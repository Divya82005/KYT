import "./Styles/PromoVideoSection.css";
import { useEffect, useState } from "react";

const PromoVideoSection = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);
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
        
        // Check if we're on iPad or mobile
        const isIPad = window.innerWidth >= 744 && window.innerWidth <= 1023;
        const isMobile = window.innerWidth < 744;
        
        // Debug logging for iPad
        if (isIPad) {
          console.log('iPad - Download rect.top:', rect.top, 'Promo rect.top:', promoRect.top, 'Viewport height:', window.innerHeight, 'isDownloadVisible:', isDownloadVisible);
        }
        
        // Tear when download section enters at 80%
        // Return when download section moves back down (rect.top increases)
        if (rect.top < window.innerHeight * 0.8 && ((isIPad || isMobile) ? hasScrolled : true)) {
          console.log('Setting isDownloadVisible to TRUE');
          setIsDownloadVisible(true);
        } else if (rect.top >= window.innerHeight * 0.8) {
          console.log('Setting isDownloadVisible to FALSE - download section moved back down');
          setIsDownloadVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasScrolled]);

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