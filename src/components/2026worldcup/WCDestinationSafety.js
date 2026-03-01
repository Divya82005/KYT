import React from 'react';
import './Styles/WCDestinationSafety.css';

const WCDestinationSafety = () => {
  return (
    <div className="wc-destination-container">
      <div className="wc-destination-content">
        <h2 className="wc-destination-title">Destination-Specific Safety Tips</h2>
        <div className="wc-destination-divider"></div>
        
        <p className="wc-destination-intro">
          Each host country presents its own unique safety landscape. Understanding the specific risks and best practices for each destination will help you make informed decisions and stay safe throughout your World Cup journey.
        </p>

        <div className="wc-destination-cards">
          <div className="wc-destination-card">
            <h3 className="wc-destination-card-title"><span className="country-code">US</span> United States</h3>
            <div className="wc-destination-card-content">
              <p className="wc-destination-card-text">
                <span className="wc-destination-card-label">Urban Safety:</span> Be aware of your surroundings in large cities, especially at night. Stick to well-populated areas and avoid walking alone in unfamiliar neighborhoods. In sprawling cities like Los Angeles and Dallas, ride-sharing services are often the safest and most convenient way to get around. In cities with extensive public transit, like New York and Philadelphia, be mindful of your belongings on subways and buses.
              </p>
            </div>
          </div>

          <div className="wc-destination-card">
            <h3 className="wc-destination-card-title"><span className="country-code">MX</span> Mexico</h3>
            <div className="wc-destination-card-content">
              <p className="wc-destination-card-text">
                <span className="wc-destination-card-label">Petty Crime:</span> Petty theft is a concern in Mexico's host cities. Avoid displaying expensive jewelry or electronics, and keep your valuables secure. Use official taxi services or ride-sharing apps like Uber. Avoid hailing unmarked taxis on the street. While unlikely, be cautious about the information you share with strangers.
              </p>
            </div>
          </div>

          <div className="wc-destination-card">
            <h3 className="wc-destination-card-title"><span className="country-code">CA</span> Canada</h3>
            <div className="wc-destination-card-content">
              <p className="wc-destination-card-text">
                <span className="wc-destination-card-label">General Safety:</span> Canada is known for its low crime rates, but it's still important to take basic precautions. Be aware of your surroundings and keep your valuables secure. Expect long wait times at the US-Canada border. Plan for extra travel time and have your travel documents readily accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WCDestinationSafety;
