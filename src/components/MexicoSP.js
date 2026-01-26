import React from 'react';
import './Styles/MexicoSP.css';
import MeridaImage from '../assets/Merida.jpeg';
import PuertoImage from '../assets/Puerto.jpeg';
import SanMiguelImage from '../assets/SanMiguel.jpeg';
import HuatulcoImage from '../assets/Huatulco.jpeg';

const MexicoSP = () => {
  return (
    <div className="mexico-sp-container">
      <div className="mexico-sp-content">
        <h1 className="mexico-sp-title">
          THE SAFEST PLACES TO VISIT IN MEXICO
        </h1>
        
        <p className="mexico-sp-intro">
          For a worry-free vacation, consider visiting these destinations, which are widely regarded as some of the safest in<br />
          Mexico:
        </p>
        
        <div className="mexico-sp-grid">
          <div className="mexico-sp-card mexico-sp-row-1">
            <div className="mexico-sp-card-header">
              <img src={MeridaImage} alt="Mérida" className="mexico-sp-icon-image" />
              <h3>Mérida, Yucatán</h3>
            </div>
            <p>
              Often cited as the safest city in Mexico, Mérida is a charming colonial city with a relaxed 
              atmosphere. Its low crime rates and friendly locals make it an ideal destination for solo 
              travelers and families. The city is known for its beautiful architecture, vibrant markets, and 
              delicious cuisine. You can explore the historic city center, visit the Mayan ruins of Uxmal and 
              Chichen Itza, or take a dip in one of the many nearby cenotes.
            </p>
          </div>
          
          <div className="mexico-sp-card mexico-sp-row-1">
            <div className="mexico-sp-card-header">
              <img src={PuertoImage} alt="Puerto Vallarta" className="mexico-sp-icon-image" />
              <h3>Puerto Vallarta</h3>
            </div>
            <p>
              This popular resort town on the Pacific coast is known for its beautiful beaches, vibrant 
              nightlife, and welcoming atmosphere. The tourist areas are well-policed and generally very safe. 
              You can relax on the beach, go whale watching, or explore the charming Old Town. Puerto Vallarta 
              is also a great destination for foodies, with a wide variety of restaurants to choose from.
            </p>
          </div>
          
          <div className="mexico-sp-card mexico-sp-row-2">
            <div className="mexico-sp-card-header">
              <img src={SanMiguelImage} alt="San Miguel De Allende" className="mexico-sp-icon-image" />
              <h3>San Miguel De Allende</h3>
            </div>
            <p>
              A UNESCO World Heritage site, San Miguel de Allende is a picturesque city with a thriving arts 
              scene. It's a favorite among expats and tourists, and its low crime rate makes it a safe and 
              enjoyable place to explore. You can wander the cobblestone streets, admire the colonial 
              architecture, and visit the many art galleries and shops.
            </p>
          </div>
          
          <div className="mexico-sp-card mexico-sp-row-2">
            <div className="mexico-sp-card-header">
              <img src={HuatulcoImage} alt="Huatulco" className="mexico-sp-icon-image" />
              <h3>Huatulco</h3>
            </div>
            <p>
              Located on the Pacific coast of Oaxaca, Huatulco is a developing resort area known for its 
              pristine beaches and eco-tourism. It's a great choice for travelers looking for a more laid-back 
              and natural experience. You can go snorkeling or diving in the clear blue waters, explore the 
              nearby national park, or simply relax on the beach.
            </p>
          </div>
          
          <div className="mexico-sp-card mexico-sp-card-full mexico-sp-row-3">
            <div className="mexico-sp-card-header">
              <img src={PuertoImage} alt="Playa Del Carmen" className="mexico-sp-icon-image" />
              <h3>Playa Del Carmen</h3>
            </div>
            <p>
              While it's a bustling tourist hub, Playa del Carmen has a dedicated tourist police force that 
              helps to ensure the safety of visitors. It's a great base for exploring the Riviera Maya. You can 
              visit the nearby ruins of Tulum, go for a swim in a cenote, or take a ferry to the island of Cozumel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MexicoSP;