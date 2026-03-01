import React from 'react';
import ReactGA from 'react-ga4';
import './Styles/MexicoConclusion.css';
import iPhone17 from '../assets/iPhone 17.png';
import { useLocation } from "react-router-dom";

const MexicoConclusion = () => {
  
  const location = useLocation();

const handleDownloadClick = () => {
  const path = location.pathname;

  let pageName = "Other";
  if (path === "/") pageName = "Home";
  if (path === "/blogs") pageName = "Blogs";
  if (path === "/mexico") pageName = "Mexico";

  ReactGA.event("download_btn", {
    page_name: pageName
  });

  window.open(
  "https://app-knowyourtrips.onelink.me/b0PV/rutxsmxs?pid=website&c=web_organic&af_channel=web",
  "_blank"
);
};


  return (
    <div className="mexico-conclusion-container">
      {/* White Section - Conclusion Text */}
      <div className="mexico-conclusion-white-section">
        <div className="mexico-conclusion-content">
          <h1 className="mexico-conclusion-title">
            CONCLUSION
          </h1>
          
          <div className="mexico-conclusion-text">
            <p>
              Mexico is a beautiful and diverse country with a lot to offer travelers. By being informed, prepared, and using a tool like 
              the <span className="knowyourtrips-link">KnowYourTrips</span> app, you can have a safe and unforgettable experience. Don't let fear hold you back from exploring 
              all that this incredible country has to offer.<br></br>
              With the right precautions and the right tools, you can travel to Mexico with confidence and create memories that will 
              last a lifetime.
            </p>
          </div>
        </div>
      </div>

      {/* Blue Section - App Download CTA */}
      <div className="mexico-conclusion-blue-section">
        <div className="mexico-conclusion-blue-content">
          <div className="mexico-conclusion-phones">
            <div className="phone-mockup phone-2">
              <img src={iPhone17} alt="iPhone 17 App Preview" style={{width: '2500px', height: 'auto'}} />
            </div>
          </div>
          
          <div className="mexico-conclusion-cta">
            <h2 className="mexico-conclusion-cta-title">
              Ready to Travel with<br />Confidence?
            </h2>
            
            <button className="mexico-conclusion-download-btn" onClick={handleDownloadClick}>
              Download the App
            </button>
          </div>
        </div>
      </div>

      {/* White Space Section */}
      <div className="mexico-conclusion-white-space">
      </div>
    </div>
  );
};

export default MexicoConclusion;