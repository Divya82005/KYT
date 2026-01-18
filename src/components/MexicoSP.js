import React from 'react';
import './Styles/MexicoSP.css';

const destinations = [
  {
    title: "Mérida, Yucatán",
    icon: "🏛️",
    description: "Often cited as the safest city in Mexico, Mérida is a charming colonial city with a relaxed atmosphere. Its low crime rates and friendly locals make it an ideal destination for solo travelers and families. The city is known for its beautiful architecture, vibrant markets, and delicious cuisine. You can explore the historic city center, visit the Mayan ruins of Uxmal and Chichen Itza, or take a dip in one of the many nearby cenotes."
  },
  {
    title: "Puerto Vallarta",
    icon: "🏝️",
    description: "This popular resort town on the Pacific coast is known for its beautiful beaches, vibrant nightlife, and welcoming atmosphere. The tourist areas are well-policed and generally very safe. You can relax on the beach, go whale watching, or explore the charming Old Town. Puerto Vallarta is also a great destination for foodies, with a wide variety of restaurants to choose from."
  },
  {
    title: "San Miguel De Allende",
    icon: "🎨",
    description: "A UNESCO World Heritage site, San Miguel de Allende is a picturesque city with a thriving arts scene. It's a favorite among expats and tourists, and its low crime rate makes it a safe and enjoyable place to explore. You can wander the cobblestone streets, admire the colonial architecture, and visit the many art galleries and shops."
  },
  {
    title: "Huatulco",
    icon: "🌊",
    description: "Located on the Pacific coast of Oaxaca, Huatulco is a developing resort area known for its pristine beaches and eco-tourism. It's a great choice for travelers looking for a more laid-back and natural experience. You can go snorkeling or diving in the clear blue waters, explore the nearby national park, or simply relax on the beach."
  },
  {
    title: "Playa Del Carmen",
    icon: "🏝️",
    description: "While it's a bustling tourist hub, Playa del Carmen has a dedicated tourist police force that helps to ensure the safety of visitors. It's a great base for exploring the Riviera Maya. You can visit the nearby ruins of Tulum, go for a swim in a cenote, or take a ferry to the island of Cozumel.",
    fullWidth: true
  }
];

const MexicoSP = () => {
  return (
    <div className="mexico-container">
      <header className="mexico-header">
        <h1>THE SAFEST PLACES TO VISIT IN MEXICO</h1>
        <p>For a worry-free vacation, consider visiting these destinations, which are widely regarded as some of the safest in Mexico:</p>
      </header>

      <div className="destinations-grid">
        {destinations.map((dest, index) => (
          <div key={index} className={`card ${dest.fullWidth ? 'full-width' : ''}`}>
            <div className="card-header">
              <span className="icon">{dest.icon}</span>
              <h2>{dest.title}</h2>
            </div>
            <p>{dest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MexicoSP;