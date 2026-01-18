import React from 'react';
import './Styles/MexicoConcerns.css';

const concerns = [
  {
    title: "Petty Crime",
    content: "Pickpocketing and purse snatching can occur in crowded areas. Use a cross-body bag, avoid carrying large amounts of cash, and be aware of your surroundings. Make copies of important documents."
  },
  {
    title: "Scams",
    content: "Be wary of common tourist scams, such as inflated taxi fares and fake tour operators. Always agree on a price before getting into a taxi and book tours through reputable companies."
  },
  {
    title: "Transportation Safety",
    content: "When traveling between cities, use first-class buses. Within cities, use ride-sharing apps like Uber or official taxis. If you're driving, be aware of local traffic laws."
  }
];

const MexicoConcerns = () => {
  return (
    <section className="concerns-container">
      <header className="concerns-header">
        <h1>COMMON TRAVEL SAFETY CONCERNS IN MEXICO</h1>
        <p>
          While the destinations listed above are generally safe, it's still wise to be 
          aware of the potential risks. Here are some common safety concerns in 
          Mexico and how to address them:
        </p>
      </header>

      <div className="concerns-grid">
        {concerns.map((item, index) => (
          <div key={index} className="concern-card">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MexicoConcerns;