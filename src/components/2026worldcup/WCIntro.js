import React from 'react';
import './Styles/WCIntro.css';
import ReactGA from 'react-ga4';

const WCIntro = () => {
  const handleDownloadClick = () => {
    ReactGA.event({
      category: "engagement",
      action: "app_download_click",
      label: "WC Intro Download Button"
    });
    window.open(
  "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs?pid=website&c=web_organic&af_channel=web",
  "_blank"
);
};


  const handleReadGuideClick = () => {
    // Smooth scroll to next section
    const nextSection = document.querySelector('.wc-intro-white-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wc-intro-container">
      {/* Hero Section - Purple Background */}
      <div className="wc-intro-hero-section">
        <h1 className="wc-intro-title">Your Ultimate 2026 World Cup Travel Safety Guide</h1>
        <p className="wc-intro-subtitle">
          Expert safety tips for USA, Mexico & Canada. Learn how real-time alerts help you enjoy the World Cup with confidence
        </p>
        <div className="wc-intro-buttons">
          <button className="wc-intro-read-guide-btn" onClick={handleReadGuideClick}>
            Get More Insights on the App ✦
          </button>
        </div>
      </div>

      {/* White Section - Content */}
      <div className="wc-intro-white-section">
        <div className="wc-intro-content">
          <p className="wc-intro-text">
            The FIFA World Cup 2026™ is set to be the biggest sporting event in history. For the first time ever, three nations—the{' '}
            <strong>United States, Mexico, and Canada</strong>—will co-host the tournament, welcoming millions of fans from across the globe. 
            With 48 teams, 104 matches, and 16 host cities, the excitement is palpable. But with an event of this magnitude comes 
            a unique set of travel safety challenges.
          </p>
          <p className="wc-intro-text">
            This comprehensive guide is your essential resource for navigating the 2026 World Cup safely. We'll cover everything 
            from pre-trip planning and destination-specific advice to crowd safety and transportation tips. And we'll show you 
            how the <strong>KnowYourTrips app</strong> can be your trusted companion, providing real-time safety intelligence to ensure your 
            World Cup experience is unforgettable for all the right reasons.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WCIntro;
