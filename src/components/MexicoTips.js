import React from 'react';
import './Styles/MexicoTips.css';

const safetyTips = [
  {
    id: 1,
    title: "Research Your Destination",
    text: "Check the latest travel advisories from the U.S. Department of State."
  },
  {
    id: 2,
    title: "Learn Some Spanish",
    text: "Basic phrases help with navigation and show respect for local culture."
  },
  {
    id: 3,
    title: "Dress Modestly",
    text: "Cover your shoulders and knees, especially at religious sites."
  },
  {
    id: 4,
    title: "Be Cautious At Night",
    text: "Avoid walking alone after dark. Use taxis or ride-sharing services."
  },
  {
    id: 5,
    title: "Drink Responsibly",
    text: "Never leave your drink unattended. Stick to bottled water."
  },
  {
    id: 6,
    title: "Stay Hydrated",
    text: "Drink plenty of bottled water to avoid heat-related illnesses."
  },
  {
    id: 7,
    title: "Protect From Sun",
    text: "Use sunscreen, wear a hat, and seek shade during peak hours."
  },
  {
    id: 8,
    title: "Secure Your Valuables",
    text: "Use hotel safes for passports and cash. Carry a money belt."
  },
  {
    id: 9,
    title: "Trust Your Instincts",
    text: "If a situation feels unsafe, remove yourself immediately."
  },
  {
    id: 10,
    title: "Download KnowYourTrips",
    text: "Get real-time safety alerts and destination risk assessments."
  }
];

const MexicoTips = () => {
  return (
    <section className="tips-container">
      <header className="tips-header">
        <h1>10 ESSENTIAL MEXICO TRAVEL SAFETY TIPS</h1>
        <hr className="header-line" />
      </header>

      <div className="tips-grid">
        {safetyTips.map((tip) => (
          <div key={tip.id} className="tip-card">
            <h3>{tip.id}. {tip.title}</h3>
            <p>{tip.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MexicoTips;