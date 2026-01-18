import React from 'react';
import './Styles/MexicoFemaleTravel.css';

const MexicoFemaleTravel = () => {
  const appFeatures = [
    {
      icon: "🤖",
      title: "AI Safety Intelligence",
      description: "The app uses AI to analyze data from multiple sources to provide a comprehensive, real-time safety score for your destination."
    },
    {
      icon: "📍",
      title: "Risk Assessment",
      description: "Before you book your trip, assess the risk of your chosen destination with detailed information on crime rates and political stability."
    },
    {
      icon: "🚨",
      title: "Real-Time Incident Alerts",
      description: "Receive instant alerts about safety incidents near you, allowing you to avoid dangerous areas and make alternative plans."
    }
  ];

  return (
    <div className="mexico-female-container">
      {/* Solo Female Travel Section */}
      <section className="solo-section">
        <h1 className="section-title">SOLO FEMALE TRAVEL IN MEXICO</h1>
        <hr className="title-underline" />
        
        <p className="intro-text">
          Mexico can be a wonderful destination for solo female travelers. By taking a few extra precautions, you can have a safe and empowering experience. In addition to the general safety tips above, solo female travelers should:
        </p>
        
        <ul className="safety-list">
          <li>
            <span className="list-highlight">Choose Your Accommodation Wisely:</span> Stay in well-reviewed hotels or hostels in safe neighborhoods with 24-hour front desks.
          </li>
          <li>
            <span className="list-highlight">Be Confident:</span> Project an air of confidence. This makes you less of a target for criminals.
          </li>
          <li>
            <span className="list-highlight">Join a Group Tour:</span> If you're new to solo travel, consider joining a group tour for part of your trip.
          </li>
        </ul>
      </section>

      {/* App Enhancement Section (Blue Box) */}
      <section className="app-enhancement-box">
        <h2 className="app-title">HOW KNOWYOURTRIPS ENHANCES YOUR SAFETY IN MEXICO</h2>
        <hr className="app-underline" />
        
        <p className="app-description">
          The KnowYourTrips app is your personal safety companion for traveling in Mexico. It provides you with real-time safety intelligence and alerts to help you make informed decisions and stay safe.
        </p>

        <div className="features-grid">
          {appFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="card-header">
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
              </div>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MexicoFemaleTravel;