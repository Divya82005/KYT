import React from 'react';
import './Styles/WCTransportationSafety.css';

const WCTransportationSafety = () => {
  return (
    <div className="wc-transportation-container">
      <div className="wc-transportation-content">
        <h2 className="wc-transportation-title">Transportation Safety: Getting Around the Games</h2>
        <div className="wc-transportation-divider"></div>
        
        <p className="wc-transportation-intro">
          Navigating between cities and to and from stadiums will be a major part of the World Cup experience. Choosing the right transportation method can significantly impact your safety and comfort.
        </p>

        <p className="wc-transportation-text">
          <strong>Public Transportation:</strong> Whenever possible, use public transportation to get to and from matches. It's often the most efficient and safest option, especially in cities with extensive transit systems. Avoid traveling alone late at night on public transit.
        </p>

        <p className="wc-transportation-text">
          <strong>Driving:</strong> If you're driving, be prepared for heavy traffic and road closures. Plan your route in advance and allow for extra travel time. Avoid driving at night in unfamiliar areas, and keep your vehicle locked at all times.
        </p>

        <p className="wc-transportation-text">
          <strong>Border Crossings:</strong> If you're traveling between the US, Canada, and Mexico, be prepared for long wait times at border crossings. Have your passport and any necessary visas ready. Consider applying for a NEXUS card if you're a frequent traveler between the US and Canada.
        </p>
      </div>
    </div>
  );
};

export default WCTransportationSafety;
