import React from 'react';
import './Styles/WCGlance.css';

const WCGlance = () => {
  const hostData = [
    {
      country: 'United States',
      cities: 11,
      hostCities: 'Atlanta, Boston, Dallas, Houston, Kansas City, Los Angeles, Miami, New York/New Jersey, Philadelphia, San Francisco, Seattle'
    },
    {
      country: 'Mexico',
      cities: 3,
      hostCities: 'Guadalajara, Mexico City, Monterrey'
    },
    {
      country: 'Canada',
      cities: 2,
      hostCities: 'Toronto, Vancouver'
    }
  ];

  return (
    <div className="wc-glance-container">
      <div className="wc-glance-content">
        <h2 className="wc-glance-title">2026 World Cup at a Glance: What to Expect</h2>
        <div className="wc-glance-divider"></div>
        
        <p className="wc-glance-intro">
          The tournament will run from <strong>June 11 to July 19, 2026</strong>, across 16 vibrant host cities spread across three countries. This 
          historic expansion represents the first time the World Cup will be hosted by multiple nations in North America, making 
          it more accessible to fans across the continent.
        </p>

        <table className="wc-glance-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Number of Cities</th>
              <th>Host Cities</th>
            </tr>
          </thead>
          <tbody>
            {hostData.map((row, index) => (
              <tr key={index}>
                <td className="country-cell">{row.country}</td>
                <td className="cities-count-cell">{row.cities}</td>
                <td className="host-cities-cell">{row.hostCities}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="wc-glance-footer">
          With matches spread across three countries, fans will need to be prepared for diverse cultures, laws, and travel 
          conditions. Planning ahead is crucial for a smooth and safe journey.
        </p>
      </div>
    </div>
  );
};

export default WCGlance;
