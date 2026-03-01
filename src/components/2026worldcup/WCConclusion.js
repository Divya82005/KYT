import React from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import './Styles/WCConclusion.css';

const WCConclusion = () => {
  const location = useLocation();

  const handleDownloadClick = () => {
    const path = location.pathname;

    let pageName = "Other";
    if (path === "/") pageName = "Home";
    if (path === "/blogs") pageName = "Blogs";
    if (path === "/mexico") pageName = "Mexico";
    if (path === "/worldcup") pageName = "WorldCup";

    ReactGA.event("download_btn", {
      page_name: pageName
    });

    window.open(
      "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs?pid=website&c=web_organic&af_channel=web",
      "_blank"
    );
  };

  return (
    <>
      <div className="wc-conclusion-container">
        <div className="wc-conclusion-content">
          <h2 className="wc-conclusion-title">Conclusion: A Safe and Unforgettable World Cup</h2>
          <div className="wc-conclusion-divider"></div>
          
          <p className="wc-conclusion-text">
            The 2026 World Cup promises to be a once-in-a-lifetime experience. By planning ahead, staying informed, and using a powerful tool like the <strong>KnowYourTrips app</strong>, you can ensure that your journey is not only thrilling but also safe. The excitement of witnessing world-class football, the energy of passionate fans from around the globe, and the unique experience of a tri-national tournament are all within reach. Don't let safety concerns hold you back from being a part of history.
          </p>

          <p className="wc-conclusion-text">
            With the right preparation and the right tools, you can focus on what really matters: enjoying every moment of the beautiful game.
          </p>
        </div>
      </div>

      <div className="wc-cta-section">
        <div className="wc-cta-content">
          <h3 className="wc-cta-title">Ready to Experience the World Cup with Confidence?</h3>
          <p className="wc-cta-text">
            Download the KnowYourTrips app today and get real-time safety alerts, destination risk assessments, and AI-powered safety intelligence for your World Cup journey across USA, Mexico, and Canada.
          </p>
          <button className="wc-cta-button" onClick={handleDownloadClick}>
            Download the App Now
          </button>
        </div>
      </div>

      <div className="wc-footer">
        <div className="wc-footer-content">
          <p className="wc-footer-text">
            © 2025 KnowYourTrips. All rights reserved. | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> | <a href="/contact">Contact Us</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default WCConclusion;
