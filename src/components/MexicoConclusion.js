import React from 'react';
import './Styles/MexicoConclusion.css';

const MexicoConclusion = () => {
  return (
    <div className="conclusion-container">
      {/* Upper Text Section */}
      <section className="conclusion-text-wrapper">
        <h1 className="conclusion-title">CONCLUSION</h1>
        <hr className="conclusion-divider" />
        
        <div className="conclusion-body">
          <p>
            Mexico is a beautiful and diverse country with a lot to offer travelers. 
            By being informed, prepared, and using a tool like the 
            <span className="brand-link"> KnowYourTrips</span> app, you can have a safe and 
            unforgettable experience. Don't let fear hold you back from exploring 
            all that this incredible country has to offer.
          </p>
          <p>
            With the right precautions and the right tools, you can travel to Mexico 
            with confidence and create memories that will last a lifetime.
          </p>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <div className="phone-mockups">
            {/* These would be <img> tags in a real project */}
            <div className="mockup-placeholder phone-1">
              <div className="screen-content screen-emergency"></div>
            </div>
            <div className="mockup-placeholder phone-2">
              <div className="screen-content screen-itinerary"></div>
            </div>
          </div>

          <div className="cta-text-box">
            <h2>Ready to Travel with Confidence?</h2>
            <button className="download-btn">Download the App</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MexicoConclusion;