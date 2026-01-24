import React from 'react';
import './Styles/MexicoFAQ.css';

const MexicoFAQ = () => {
  const faqs = [
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

  return (
    <div className="mexico-faq-container">
      <div className="mexico-faq-content">
        <h1 className="mexico-faq-title">
          FREQUENTLY ASKED QUESTIONS (FAQ)
        </h1>
        
        <div className="mexico-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="mexico-faq-card">
              <h3 className="mexico-faq-question">
                <span className="question-mark">?</span> {faq.question}
              </h3>
              <p className="mexico-faq-answer">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MexicoFAQ;