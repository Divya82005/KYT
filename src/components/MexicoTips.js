import React from 'react';
import './Styles/MexicoTips.css';

const MexicoTips = () => {
  const tips = [
    {
      number: 1,
      title: "Research Your Destination",
      description: "Check the latest travel advisories from the U.S. Department of State.",
      row: 1
    },
    {
      number: 2,
      title: "Learn Some Spanish",
      description: "Basic phrases help with navigation and show respect for local culture.",
      row: 1
    },
    {
      number: 3,
      title: "Dress Modestly",
      description: "Cover your shoulders and knees, especially at religious sites.",
      row: 1
    },
    {
      number: 4,
      title: "Be Cautious At Night",
      description: "Avoid walking alone after dark. Use taxis or ride-sharing services.",
      row: 2
    },
    {
      number: 5,
      title: "Drink Responsibly",
      description: "Never leave your drink unattended. Stick to bottled water.",
      row: 2
    },
    {
      number: 6,
      title: "Stay Hydrated",
      description: "Drink plenty of bottled water to avoid heat-related illnesses.",
      row: 2
    },
    {
      number: 7,
      title: "Protect From Sun",
      description: "Use sunscreen, wear a hat, and seek shade during peak hours.",
      row: 3
    },
    {
      number: 8,
      title: "Secure Your Valuables",
      description: "Use hotel safes for passports and cash. Carry a money belt.",
      row: 3
    },
    {
      number: 9,
      title: "Trust Your Instincts",
      description: "If a situation feels unsafe, remove yourself immediately.",
      row: 3
    },
    {
      number: 10,
      title: "Download KnowYourTrips",
      description: "Get real-time safety alerts and destination risk assessments.",
      row: 4
    }
  ];

  return (
    <div className="mexico-tips-container">
      <div className="mexico-tips-content">
        <h1 className="mexico-tips-title">
          10 ESSENTIAL MEXICO TRAVEL SAFETY TIPS
        </h1>
        
        <div className="mexico-tips-grid">
          {tips.map((tip) => (
            <div key={tip.number} className={`mexico-tips-card mexico-tips-row-${tip.row}`}>
              <h3 className="mexico-tips-card-title">
                {tip.number}. {tip.title}
              </h3>
              <p className="mexico-tips-card-description">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MexicoTips;