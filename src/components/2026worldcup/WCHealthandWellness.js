import React from 'react';
import './Styles/WCHealthandWellness.css';

const WCHealthandWellness = () => {
  return (
    <div className="wc-health-container">
      <div className="wc-health-content">
        <h2 className="wc-health-title">Health and Wellness: Staying Healthy on the Road</h2>
        <div className="wc-health-divider"></div>
        
        <p className="wc-health-intro">
          Maintaining your health while traveling is crucial for enjoying the World Cup. In Mexico, it's best to drink bottled water and to be cautious about eating street food from vendors you're unsure about. In the US and Canada, the tap water is generally safe to drink. Know the emergency number for each country you're visiting (911 in the US and Canada, 911 in Mexico). Have a copy of your medical information with you, including any allergies or medications you're taking.
        </p>

        <div className="wc-health-app-section">
          <h3 className="wc-health-app-title">How KnowYourTrips Elevates Your World Cup Safety</h3>
          <div className="wc-health-app-divider"></div>
          
          <p className="wc-health-app-intro">
            The <strong>KnowYourTrips app</strong> is the ultimate tool for staying safe during the 2026 World Cup. It provides you with the real-time information you need to make smart decisions and avoid potential risks.
          </p>

          <div className="wc-health-features-grid">
            <div className="wc-health-feature-card">
              <h4 className="wc-health-feature-title">
                <span className="wc-health-feature-icon">🤖</span> AI Safety<br/>Intelligence
              </h4>
              <p className="wc-health-feature-text">
                Get a comprehensive safety score for each host city, based on data from a variety of sources including local authorities, news reports, and real-time incident data.
              </p>
            </div>

            <div className="wc-health-feature-card">
              <h4 className="wc-health-feature-title">
                <span className="wc-health-feature-icon">📍</span> Risk Assessment
              </h4>
              <p className="wc-health-feature-text">
                Evaluate the safety of your travel plans before you even leave home. Understand the specific risks in each destination and plan accordingly.
              </p>
            </div>

            <div className="wc-health-feature-card">
              <h4 className="wc-health-feature-title">
                <span className="wc-health-feature-icon">🚨</span> Real-Time Incident Alerts
              </h4>
              <p className="wc-health-feature-text">
                Receive instant notifications about safety incidents happening near you, from traffic accidents to protests, allowing you to avoid potential trouble spots.
              </p>
            </div>

            <div className="wc-health-feature-card">
              <h4 className="wc-health-feature-title">
                <span className="wc-health-feature-icon">🗺️</span> Safe Route Planning
              </h4>
              <p className="wc-health-feature-text">
                Find the safest routes to stadiums, fan zones, and other points of interest. Avoid high-risk areas and navigate with confidence.
              </p>
            </div>

            <div className="wc-health-feature-card">
              <h4 className="wc-health-feature-title">
                <span className="wc-health-feature-icon">📞</span> Emergency Contacts
              </h4>
              <p className="wc-health-feature-text">
                Access a comprehensive list of emergency contacts for each host city, including local police, hospitals, and embassy information.
              </p>
            </div>

            <div className="wc-health-feature-card">
              <h4 className="wc-health-feature-title">
                <span className="wc-health-feature-icon">🌍</span> Multi-Country Support
              </h4>
              <p className="wc-health-feature-text">
                Get country-specific safety information for the US, Mexico, and Canada all in one app, making it perfect for your tri-national World Cup journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCHealthandWellness;
