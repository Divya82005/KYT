import "./Styles/PromoVideoSection.css";
import { useEffect, useState } from "react";

const PromoVideoSection = () => {
  const [isDownloadVisible, setIsDownloadVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const downloadSection = document.querySelector('.download-section');
      if (downloadSection) {
        const rect = downloadSection.getBoundingClientRect();
        // Trigger when download section starts entering viewport
        // Remove when scrolling back up past this point
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
        
        setIsDownloadVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="promo-section">
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