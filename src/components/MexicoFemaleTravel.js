import React from 'react';
import './Styles/MexicoFemaleTravel.css';

const MexicoFemaleTravel = () => {
  return (
    <div className="mexico-female-travel-container">
      {/* Solo Female Travel Section */}
      <div className="mexico-female-travel-white-section">
        <div className="mexico-female-travel-content">
          <h1 className="mexico-female-travel-title">
            SOLO FEMALE TRAVEL IN MEXICO
          </h1>
          
          <p className="mexico-female-travel-intro">
            Mexico can be a wonderful destination for solo female travelers. By taking a few extra precautions, you can have a safe 
            and empowering experience. In addition to the general safety tips above, solo female travelers should:
          </p>
          
          <ul className="mexico-female-travel-tips">
            <li>
              <span className="tip-title">Choose Your Accommodation Wisely:</span> Stay in well-reviewed hotels or hostels in safe neighborhoods with 24-hour 
              front desks.
            </li>
            <li>
              <span className="tip-title">Be Confident:</span> Project an air of confidence. This makes you less of a target for criminals.
            </li>
            <li>
              <span className="tip-title">Join a Group Tour:</span> If you're new to solo travel, consider joining a group tour for part of your trip.
            </li>
          </ul>
        </div>
      </div>

      {/* KnowYourTrips Section */}
      <div className="mexico-female-travel-blue-section">
        <div className="mexico-female-travel-content">
          <h2 className="mexico-female-travel-blue-title">
            HOW KNOWYOURTRIPS ENHANCES YOUR SAFETY<br />IN MEXICO
          </h2>
          
          <p className="mexico-female-travel-blue-intro">
            The KnowYourTrips app is your personal safety companion for traveling in Mexico. It provides you with real-time safety 
            intelligence and alerts to help you make informed decisions and stay safe.
          </p>
          
          <div className="mexico-female-travel-features">
            <div className="mexico-female-travel-feature-card">
              <div className="feature-header">
                <div className="feature-icon">🤖</div>
                <h3>AI Safety Intelligence</h3>
              </div>
              <p>
                The app uses AI to analyze data from multiple sources to provide a comprehensive, 
                real-time safety score for your destination.
              </p>
            </div>
            
            <div className="mexico-female-travel-feature-card">
              <div className="feature-header">
                <div className="feature-icon">📍</div>
                <h3>Risk Assessment</h3>
              </div>
              <p>
                Before you book your trip, assess the risk of your chosen destination with detailed 
                information on crime rates and political stability.
              </p>
            </div>
            
            <div className="mexico-female-travel-feature-card">
              <div className="feature-header">
                <div className="feature-icon">🚨</div>
                <h3>Real-Time Incident Alerts</h3>
              </div>
              <p>
                Receive instant alerts about safety incidents near you, allowing you to avoid 
                dangerous areas and make alternative plans.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MexicoFemaleTravel;