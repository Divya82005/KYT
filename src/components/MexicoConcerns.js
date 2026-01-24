import React from 'react';
import './Styles/MexicoConcerns.css';

const MexicoConcerns = () => {
  return (
    <div className="mexico-concerns-container">
      <div className="mexico-concerns-content">
        <h1 className="mexico-concerns-title">
          COMMON TRAVEL SAFETY CONCERNS IN MEXICO
        </h1>
        
        <p className="mexico-concerns-intro">
          While the destinations listed above are generally safe, it's still wise to be aware of the potential risks. Here are some 
          common safety concerns in Mexico and how to address them:
        </p>
        
        <div className="mexico-concerns-grid">
          <div className="mexico-concerns-card">
            <h3>Petty Crime</h3>
            <p>
              Pickpocketing and purse snatching can occur in crowded areas. Use a cross-body bag, avoid carrying large 
              amounts of cash, and be aware of your surroundings. Make copies of important documents.
            </p>
          </div>
          
          <div className="mexico-concerns-card">
            <h3>Scams</h3>
            <p>
              Be wary of common tourist scams, such as inflated taxi fares and fake tour operators. Always agree on a price before 
              getting into a taxi and book tours through reputable companies.
            </p>
          </div>
          
          <div className="mexico-concerns-card">
            <h3>Transportation Safety</h3>
            <p>
              When traveling between cities, use first-class buses. Within cities, use ride-sharing apps like Uber or official taxis. If 
              you're driving, be aware of local traffic laws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MexicoConcerns;