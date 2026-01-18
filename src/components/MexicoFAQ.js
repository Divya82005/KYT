import React from 'react';
import './Styles/MexicoFAQ.css';

const faqData = [
  {
    question: "Is It Safe To Drive In Mexico?",
    answer: "Driving in Mexico can be challenging, especially in large cities. The traffic can be chaotic, and the roads can be in poor condition. If you're not an experienced driver, it's best to avoid driving. If you do drive, get Mexican auto insurance, as your U.S. insurance won't be valid."
  },
  {
    question: "What Should I Do In An Emergency?",
    answer: "Dial 911 to reach the police, an ambulance, or the fire department. Have the contact information for the nearest U.S. embassy or consulate saved in your phone."
  },
  {
    question: "Is The Tap Water Safe To Drink?",
    answer: "It's generally not safe to drink tap water in Mexico. Stick to bottled water and avoid ice in your drinks. Be careful about eating raw fruits and vegetables that may have been washed in tap water."
  }
];

const MexicoFAQ = () => {
  return (
    <div className="faq-container">
      <header className="faq-header">
        <h1>FREQUENTLY ASKED QUESTIONS (FAQ)</h1>
        <hr className="faq-divider" />
      </header>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-card">
            <div className="faq-question-row">
              <span className="faq-q-icon">?</span>
              <h3>{item.question}</h3>
            </div>
            <p className="faq-answer">{item.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MexicoFAQ;