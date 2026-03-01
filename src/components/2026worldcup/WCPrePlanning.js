import React from 'react';
import './Styles/WCPrePlanning.css';

const WCPrePlanning = () => {
  return (
    <div className="wc-preplanning-container">
      <div className="wc-preplanning-content">
        <h2 className="wc-preplanning-title">Pre-Trip Planning: Your Safety Checklist</h2>
        <div className="wc-preplanning-divider"></div>
        
        <p className="wc-preplanning-intro">
          Before you pack your bags and book your flights, lay the groundwork for a secure trip. Proper preparation can<br />
          significantly reduce travel-related risks and ensure you focus on enjoying the matches rather than worrying about<br />
          logistics.
        </p>

        <div className="wc-preplanning-card">
          <h3 className="wc-preplanning-card-title">Documentation and Visas</h3>
          <p className="wc-preplanning-card-text">
            Ensure your passport is valid for at least six months beyond your planned departure date. Check the visa requirements for each country you plan to visit. While many nationalities can enter the US, Canada, and Mexico as tourists without a visa, it's essential to verify this in advance. For frequent travelers between the US and Canada, a NEXUS card can expedite border crossings, though the application process can take several months.
          </p>
        </div>

        <div className="wc-preplanning-card">
          <h3 className="wc-preplanning-card-title">Accommodation and Bookings</h3>
          <p className="wc-preplanning-card-text">
            With millions of fans expected, accommodation will be in high demand. Book your hotels or rentals well in advance to secure a safe and reputable place to stay. Choose accommodation in safe, well-lit neighborhoods with good access to public transportation. Read reviews carefully and verify the property's security features.
          </p>
        </div>

        <div className="wc-preplanning-card">
          <h3 className="wc-preplanning-card-title">Research and Insurance</h3>
          <p className="wc-preplanning-card-text">
            Familiarize yourself with the laws, customs, and potential safety risks of each host city you'll be visiting. Purchase comprehensive travel insurance that covers medical emergencies, trip cancellations, and theft. This is especially important when traveling internationally across multiple countries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WCPrePlanning;
