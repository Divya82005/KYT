import React from 'react';
import './Styles/MexicoConclusion.css';
import iPhone17 from '../assets/iPhone 17.png';

const MexicoConclusion = () => {
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
            
            <button className="mexico-conclusion-download-btn">
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