import React from 'react';
import './Styles/WCCrowdSafety.css';

const WCCrowdSafety = () => {
  return (
    <div className="wc-crowd-container">
      <div className="wc-crowd-content">
        <h2 className="wc-crowd-title">Crowd Safety: Navigating the Masses</h2>
        <div className="wc-crowd-divider"></div>
        
        <p className="wc-crowd-intro">
          Fan zones and stadiums will be packed with tens of thousands of passionate fans. Managing crowd safety requires awareness, planning, and quick thinking. Here's how to stay safe in a crowd:
        </p>

        <div className="wc-crowd-grid">
          <div className="wc-crowd-card">
            <h3 className="wc-crowd-card-title">Arrive Early</h3>
            <p className="wc-crowd-card-text">
              To avoid last-minute rushes and potential stampedes, arrive at the stadium or fan zone well in advance. This also gives you time to familiarize yourself with the venue.
            </p>
          </div>

          <div className="wc-crowd-card">
            <h3 className="wc-crowd-card-title">Know Your Exits</h3>
            <p className="wc-crowd-card-text">
              Upon arrival, identify the nearest emergency exits and first-aid stations. This knowledge can be invaluable in case of an emergency.
            </p>
          </div>

          <div className="wc-crowd-card">
            <h3 className="wc-crowd-card-title">Stay Hydrated</h3>
            <p className="wc-crowd-card-text">
              Summer temperatures can be high, especially in cities like Dallas and Houston. Drink plenty of water to avoid dehydration and heat-related illness.
            </p>
          </div>

          <div className="wc-crowd-card">
            <h3 className="wc-crowd-card-title">Have a Plan</h3>
            <p className="wc-crowd-card-text">
              If you're with a group, establish a meeting point in case you get separated. Share phone numbers and consider offline communication methods.
            </p>
          </div>

          <div className="wc-crowd-card">
            <h3 className="wc-crowd-card-title">Stay Aware</h3>
            <p className="wc-crowd-card-text">
              Pay attention to the flow of the crowd and be prepared to move if a situation becomes unsafe. Trust your instincts.
            </p>
          </div>

          <div className="wc-crowd-card">
            <h3 className="wc-crowd-card-title">Dress Appropriately</h3>
            <p className="wc-crowd-card-text">
              Wear comfortable shoes and weather-appropriate clothing. This helps you move quickly if needed and reduces discomfort in crowds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCCrowdSafety;
