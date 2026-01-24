import React from 'react';
import './Styles/MexicoIntro.css';

const MexicoIntro = () => {
  return (
    <>
      <div className="mexico-intro-container">
        <div className="mexico-intro-content">
          <h1 className="mexico-intro-title">
            IS MEXICO SAFE? THE ULTIMATE GUIDE TO
            <br />
            TRAVELING SAFELY IN MEXICO
          </h1>
          
          <button className="mexico-intro-button">
            Get More Insights on the App ✦
          </button>
        </div>
      </div>
      
      <div className="mexico-intro-text-section">
        <div className="mexico-intro-text-content">
          <p>
            Mexico, a land of vibrant culture, stunning landscapes, and culinary delights, 
            is a dream destination for many. However, headlines often paint a picture of a 
            country fraught with danger, leaving many travelers wondering: Is Mexico safe to 
            travel to?<br></br>
            This comprehensive guide will provide you with a balanced and realistic perspective 
            on travel safety in Mexico. We'll explore the safest regions to visit, address 
            common safety concerns, and provide actionable tips to ensure your journey is both 
            memorable and secure. And, we'll introduce you to a powerful tool that can be your 
            safety companion throughout your travels: the KnowYourTrips app.
          </p>
        </div>
      </div>
    </>
  );
};

export default MexicoIntro;